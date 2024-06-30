import { expect, test, vi } from 'vitest'
import { checkProps, startCheckProps } from '../checkProps/check.ts'
import {
  isArrayType,
  isDate,
  isError,
  isFunctionType,
  isMap,
  isObjectType,
  isPromise,
  isRegExp,
  isSet,
  isWeakMap,
  isWeakSet,
} from '../type/reference.ts'

startCheckProps({
  environment: 'development',
})

test('reference types', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error')

  const props = {
    a: [1, 2, 3],
    b: { a: 1, b: 2 },
    c: () => 123,
    d: new Date(),
    e: new RegExp(''),
    f: new Error(),
    g: new Promise(() => {}),
    h: new Set(),
    i: new Map(),
    j: new WeakSet(),
    k: new WeakMap(),
  }

  const propsType = {
    a: isArrayType,
    b: isObjectType,
    c: isFunctionType,
    d: isDate,
    e: isRegExp,
    f: isError,
    g: isPromise,
    h: isSet,
    i: isMap,
    j: isWeakSet,
    k: isWeakMap,
  }

  checkProps(props, propsType)

  expect(consoleErrorSpy).not.toHaveBeenCalled()
  consoleErrorSpy.mockRestore()
})
