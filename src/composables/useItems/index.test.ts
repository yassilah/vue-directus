import { describe, expect, it } from 'vitest'
import { unref } from 'vue'
import { useApp } from '../../utils/tests'
import { useItems } from '.'

describe('useCollection', () => {
    it('add a composable', () => {
        const [result] = useApp(() => useItems('items'))

        expect(unref(result)).toEqual([])
    })

    it('should have controls', () => {
        const [result] = useApp(() =>
            useItems('items', {
                controls: true
            })
        )

        expect(unref(result)).toMatchSnapshot()
    })
})
