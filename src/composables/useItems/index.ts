import { CollectionNames, Collections } from '../../types'
import { IItems, PartialItem } from '@directus/sdk'
import { ReactiveArg } from '../../utils/args'
import { Ref, reactive, ref } from 'vue'
import { useCollection } from '../useCollection'
import defu from 'defu'

export interface UseItemsOptions<C extends boolean> {
    controls: C
    fetchOnInit: boolean
}

export type UseItemsResult<C extends boolean, T = unknown> = C extends true
    ? {
          items: Ref<PartialItem<T>[]>
          loading: Record<MethodNames<T> | 'fetch', boolean>
          errors: Record<MethodNames<T> | 'fetch', null | Error>
      } & {
          [K in MethodNames<T>]: (
              ...args: Parameters<IItems<T>[K]>
          ) => Promise<void>
      } & {
          fetch: (...args: Parameters<IItems<T>['readMany']>) => Promise<void>
      }
    : Ref<PartialItem<T>[]>

type MethodNames<T> = {
    [K in keyof IItems<T>]: IItems<T>[K] extends (...args: any[]) => any
        ? K
        : never
}[keyof IItems<T>]

const methodNames = [
    'createOne',
    'updateOne',
    'deleteOne',
    'createMany',
    'updateMany',
    'deleteMany'
] as const
/**
 * Use a Directus collection's items.
 */
export function useItems<N extends CollectionNames, C extends boolean = false>(
    name: ReactiveArg<N>,
    options?: Partial<UseItemsOptions<C>>
): UseItemsResult<C, Collections[N]>
export function useItems<N extends string, C extends boolean = false>(
    name: ReactiveArg<N>,
    options?: Partial<UseItemsOptions<C>>
): UseItemsResult<C>
export function useItems<N extends string, T>(
    name: ReactiveArg<N>,
    options?: UseItemsOptions<boolean>
) {
    const config = defu(options, {
        controls: false,
        fetchOnInit: true
    })

    // Force controls when fetch on init is not enabled.
    if (!config.fetchOnInit) {
        config.controls = true
    }

    const collection = useCollection<N, T>(name)
    const items = ref([]) as Ref<PartialItem<T>[]>
    const errors = reactive({
        fetch: null,
        ...methodNames.reduce(
            (acc, methodName) => ({ ...acc, [methodName]: null }),
            {} as Record<MethodNames<T>, Error | null>
        )
    })

    const loading = reactive({
        fetch: false,
        ...methodNames.reduce(
            (acc, methodName) => ({ ...acc, [methodName]: false }),
            {} as Record<MethodNames<T>, boolean>
        )
    })

    function wrapMethod<N extends MethodNames<T>, M extends IItems<T>[N]>(
        name: N,
        key: keyof typeof loading,
        callback?: (result: Awaited<ReturnType<M>>) => void | Promise<void>
    ) {
        return async (...args: Parameters<M>) => {
            try {
                loading[key] = true
                errors[key] = null

                const result = await collection.value[name].apply(this, args)
                if (result && callback) {
                    await callback(result as Awaited<ReturnType<M>>)
                }
            } catch (error) {
                errors[key] = error
            } finally {
                loading[key] = false
            }
        }
    }

    const fetch = wrapMethod('readMany', 'fetch', result => {
        items.value = result.data
    })

    const methods: {
        [key: string]: ReturnType<typeof wrapMethod>
    } = {
        fetch
    }

    for (const name of methodNames) {
        methods[name] = wrapMethod(name, name, async () => await fetch())
    }

    if (config.fetchOnInit) {
        void fetch()
    }

    if (config.controls) {
        return {
            items,
            errors,
            loading,
            ...methods
        }
    }

    return items
}
