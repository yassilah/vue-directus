import { expect, it, test } from 'vitest'
import { myExample } from './index'

test('basic test', () => {
    it('should return a message', () => {
        expect(myExample()).toBe('Hellow World!')
    })
})
