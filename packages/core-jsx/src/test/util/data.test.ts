import { toArray } from '@util/data.ts'
import { describe, expect, test } from 'vitest'

describe('toArray', () => {
  test('case - 1', () => {
    expect(toArray([])).toEqual([])
  })

  test('case - 2', () => {
    expect(toArray(1)).toEqual([1])
  })

  test('case - 3', () => {
    expect(toArray([1, 2, 3])).toEqual([1, 2, 3])
  })
})
