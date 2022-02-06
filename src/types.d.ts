import type { DirectusOptions, TypeMap } from '@directus/sdk'

export interface VueDirectusOptions extends DirectusOptions {
    apiUrl: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Collections {}

export interface TypeMapCollections extends TypeMap, Collections {}

export type CollectionNames = Exclude<keyof Collections, number | symbol>
