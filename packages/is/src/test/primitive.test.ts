import { expect, test, vi } from 'vitest'
import { checkProps, startCheckProps } from '../checkProps/check.ts'
import {
  isAny,
  isBigint,
  isBoolean,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
} from '../type/primitive.ts'

startCheckProps({
  environment: 'development',
})

test('primitive types', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error')

  const props = {
    a: '1',
    b: 1,
    c: BigInt(1),
    d: true,
    e: undefined,
    f: Symbol('1'),
    g: null,
    h: {},
  }

  const propsType = {
    a: isString,
    b: isNumber,
    c: isBigint,
    d: isBoolean,
    e: isUndefined,
    f: isSymbol,
    g: isNull,
    h: isAny,
  }

  checkProps(props, propsType)

  expect(consoleErrorSpy).not.toHaveBeenCalled()
  consoleErrorSpy.mockRestore()
})
