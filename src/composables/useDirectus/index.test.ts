import { Directus } from '@directus/sdk'
import { describe, expect, it } from 'vitest'
import { useApp } from '../../utils/tests'
import { useDirectus } from '.'

describe('useDirectus', () => {
    it('add a composable', () => {
        const [result] = useApp(useDirectus)

        expect(result).toBeInstanceOf(Directus)
    })
})
