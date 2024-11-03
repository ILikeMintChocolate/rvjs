import { copyGetter, isGetterEqual } from '@util/function.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('isGetterEqual', () => {
  let object1: Object
  let object2: Object

  beforeEach(() => {
    object1 = {}
    object2 = {}
  })

  test('case - 1', () => {
    const object = {
      get count() {
        return 1
      },
    }
    object1 = object
    object2 = object
    expect(isGetterEqual(object1, 'count', object2, 'count')).toBe(true)
  })

  test('case - 2', () => {
    object1 = {
      get count() {
        return 1
      },
    }
    object2 = {
      get count() {
        return 1
      },
    }
    expect(isGetterEqual(object1, 'count', object2, 'count')).toBe(false)
  })
})

describe('copyGetter', () => {
  let object1: Object
  let object2: Object

  beforeEach(() => {
    object1 = {}
    object2 = {}
  })

  test('case - 1', () => {
    object1 = {
      get count() {
        return 1
      },
    }
    copyGetter(object1, 'count', object2, 'count')
    expect(isGetterEqual(object1, 'count', object2, 'count')).toBe(true)
  })

  test('case - 2', () => {
    object1 = {
      get count() {
        return 1
      },
    }
    copyGetter(object1, 'count', object2, 'copiedCount')
    expect(isGetterEqual(object1, 'count', object2, 'copiedCount')).toBe(true)
  })
})
