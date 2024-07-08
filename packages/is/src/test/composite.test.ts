import { expect, test, vi } from 'vitest'
import { checkProps, startCheckProps } from '../checkProps/check.ts'
import { isArray, isFunction, isObject, isOptional } from '../type/composite.ts'
import { isNumber, isString } from '../type/primitive.ts'

startCheckProps({
  environment: 'development',
})

test('composite types', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error')

  const props = {
    a: [1, 2, 3],
    b: ['1', '2', '3'],
    c: () => 123,
    d: () => '123',
    e: {
      a: [1, 2, 3],
      b: ['1', '2', '3'],
    },
    f: {
      a: () => 123,
      b: () => '123',
      c: undefined,
      d: '123',
    },
    g: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    h: () => [() => '1', () => '2', () => '3'],
  }

  const propsType = {
    a: isArray(isNumber),
    b: isArray(isString),
    c: isFunction(isNumber),
    d: isFunction(isString),
    e: isObject({
      a: isArray(isNumber),
      b: isArray(isString),
    }),
    f: isObject({
      a: isFunction(isNumber),
      b: isFunction(isString),
      c: isOptional(isString),
      d: isOptional(isString),
    }),
    g: isArray(isArray(isNumber)),
    h: isFunction(isArray(isFunction(isString))),
  }

  checkProps(props, propsType)

  expect(consoleErrorSpy).not.toHaveBeenCalled()
  consoleErrorSpy.mockRestore()
})

