import { ItemsHandler } from '@directus/sdk'
import { describe, expect, it } from 'vitest'
import { ref, unref } from 'vue'
import { useApp } from '../../utils/tests'
import { useCollection } from '.'

describe('useCollection', () => {
    it('add a composable', () => {
        const [result] = useApp(() => useCollection('items'))

        expect(unref(result)).toBeInstanceOf(ItemsHandler)
    })

    it('collection is reactive', () => {
        const name = ref('items')

        const [result] = useApp(() => useCollection(name))

        expect((unref(result) as any).endpoint).toBe('/items/items')

        name.value = 'foo'

        expect((unref(result) as any).endpoint).toBe('/items/foo')
    })
})
