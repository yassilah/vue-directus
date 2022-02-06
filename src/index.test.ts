import { Directus } from '@directus/sdk'
import { describe, expect, it } from 'vitest'
import { directusKey } from './index'
import { useApp } from './utils/tests'

describe('installation', () => {
    it('should install the plugin', () => {
        const app = useApp()
        const injection = app._context.provides[directusKey as any]
        expect(injection).toBeInstanceOf(Directus)
        expect(injection._url).toBe('http://localhost:8055')
    })
})
