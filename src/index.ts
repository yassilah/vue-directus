import { Directus } from '@directus/sdk'
import { InjectionKey, Plugin } from 'vue'
import defu from 'defu'
import type { TypeMapCollections, VueDirectusOptions } from './types'

export * from './composables'
export * from './types'

export const directusKey: InjectionKey<Directus<TypeMapCollections>> =
    Symbol('directus')

const plugin: Plugin = {
    install(app, options: Partial<VueDirectusOptions> = {}) {
        const config = defu(options, {
            apiUrl: 'http://localhost:8055'
        })

        const directus = new Directus<TypeMapCollections>(config.apiUrl, config)

        app.provide(directusKey, directus)
    }
}

export { plugin as default }
