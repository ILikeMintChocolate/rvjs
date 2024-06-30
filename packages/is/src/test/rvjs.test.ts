import { component, div } from '@rvjs/core/dom'
import { prop, useState } from '@rvjs/core/reactive'
import { expect, test, vi } from 'vitest'
import { checkProps, startCheckProps } from '../checkProps/check.ts'
import { isNumber, isString } from '../type/primitive.ts'
import {
  isChild,
  isChildren,
  isComponent,
  isElement,
  isGetState,
  isGetStateType,
  isProp,
  isPropType,
} from '../type/rvjs.ts'

startCheckProps({
  environment: 'development',
})

test('rvjs types - valid', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error')

  const App = component(() => div())
  const [state] = useState(0)

  const props = {
    a: div(),
    b: App(),
    c: div(),
    d: App(),
    e: [div(), App()],
    f: prop(() => ''),
    g: state,
    h: prop(() => '123'),
    i: prop(() => 123),
    j: state,
  }

  const propsType = {
    a: isElement,
    b: isComponent,
    c: isChild,
    d: isChild,
    e: isChildren,
    f: isGetStateType,
    g: isPropType,
    h: isProp(isString),
    i: isProp(isNumber),
    j: isGetState(isNumber),
  }

  checkProps(props, propsType)

  expect(consoleErrorSpy).not.toHaveBeenCalled()
  consoleErrorSpy.mockRestore()
})
