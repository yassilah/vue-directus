import { directusKey } from '../..'
import { inject } from 'vue'

/**
 * Use the directus SDK.
 */
export function useDirectus() {
    const directus = inject(directusKey)

    return directus
}
