import { Ref, computed, unref } from 'vue'
import { isFunction } from '@vue/shared'

export type ReactiveArg<T> = T | Ref<T> | (() => T)

/**
 * Use a reactive argument.
 */
export function reactiveArg<T>(value: ReactiveArg<T>) {
    return computed(() => {
        if (isFunction(value)) {
            return value()
        }

        return unref(value)
    })
}
