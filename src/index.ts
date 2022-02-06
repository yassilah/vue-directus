import { App, InjectionKey } from 'vue'
import { Directus } from '@directus/sdk'
import defu from 'defu'
import type { TypeMapCollections, VueDirectusOptions } from './types'

export const directusKey: InjectionKey<Directus<TypeMapCollections>> =
    Symbol('directus')

export default {
    install(app: App, options: Partial<VueDirectusOptions> = {}) {
        const config = defu(options, {
            apiUrl: 'http://localhost:8055'
        })

        const directus = new Directus<TypeMapCollections>(config.apiUrl, config)

        app.provide(directusKey, directus)
    }
}
