import {
  component,
  div,
  For,
  prop,
  Switch,
  textNode,
  Toggle,
  useState,
} from '@rvjs/core'
import { expect, test, vi } from 'vitest'
import { checkProps, startCheckProps } from '../checkProps/check.ts'
import { isNumber, isString } from '../type/primitive.ts'
import {
  isChild,
  isChildren,
  isComponentBlock,
  isElementBlock,
  isForFlowBlock,
  isGetState,
  isGetStateType,
  isProp,
  isPropType,
  isSwitchFlowBlock,
  isTextNodeBlock,
  isToggleFlowBlock,
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
    k: For([], () => div()),
    l: Switch(1, () => div()),
    m: Toggle(true, () => div()),
    n: textNode(''),
  }

  const propsType = {
    a: isElementBlock,
    b: isComponentBlock,
    c: isChild,
    d: isChild,
    e: isChildren,
    f: isGetStateType,
    g: isPropType,
    h: isProp(isString),
    i: isProp(isNumber),
    j: isGetState(isNumber),
    k: isForFlowBlock,
    l: isSwitchFlowBlock,
    m: isToggleFlowBlock,
    n: isTextNodeBlock,
  }

  checkProps(props, propsType)

  expect(consoleErrorSpy).not.toHaveBeenCalled()
  consoleErrorSpy.mockRestore()
})
