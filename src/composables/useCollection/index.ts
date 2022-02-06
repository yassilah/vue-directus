import { CollectionNames, Collections } from '../../types'
import { ComputedRef, computed, unref } from 'vue'
import { IItems } from '@directus/sdk'
import { ReactiveArg, reactiveArg } from '../../utils/args'
import { useDirectus } from '../useDirectus'

/**
 * Use a Directus collection.
 */
export function useCollection<
    N extends CollectionNames,
    T extends Collections[N]
>(name: ReactiveArg<N>): ComputedRef<IItems<T>>
export function useCollection<N extends string, T>(
    name: ReactiveArg<N>
): ComputedRef<IItems<T>>
export function useCollection<N extends string, T>(name: ReactiveArg<N>) {
    const directus = useDirectus()

    const collectionName = reactiveArg(name)

    const collection = computed(() => {
        return directus.items<N, T>(unref(collectionName))
    })

    return collection
}
