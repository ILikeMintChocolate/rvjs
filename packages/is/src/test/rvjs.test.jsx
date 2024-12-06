import { Case, div, Refresh, Switch, Toggle, useState } from '@rvjs/core'
import { expect, test, vi } from 'vitest'
import { checkProps, startCheckProps } from '../checkProps/check.ts'
import { isNumber } from '../type/primitive.ts'
import {
  isBlockComponent,
  isCaseComponent,
  isChild,
  isChildren,
  isElement,
  isForComponent,
  isGetState,
  isGetStateType,
  isRefreshComponent,
  isSwitchComponent,
  isToggleComponent,
} from '../type/rvjs.ts'

startCheckProps({
  environment: 'development',
})

test('rvjs types - valid', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error')

  const App = () => {
    return <div />
  }
  const [state] = useState(0)

  const props = {
    a: <div />,
    b: <App />,
    c: <div />,
    d: <App />,
    e: [<div />, <App />],
    f: state,
    g: state,
    h: <For each={[]}>{() => <div />}</For>,
    i: (
      <Switch>
        <Case is={true}>
          <div />
        </Case>
      </Switch>
    ),
    j: (
      <Case is={true}>
        <div />
      </Case>
    ),
    k: (
      <Toggle is={true}>
        <div />
      </Toggle>
    ),
    l: (
      <Refresh by={true}>
        <div />
      </Refresh>
    ),
  }

  const propsType = {
    a: isElement,
    b: isBlockComponent,
    c: isChild,
    d: isChild,
    e: isChildren,
    f: isGetStateType,
    g: isGetState(isNumber),
    h: isForComponent,
    i: isSwitchComponent,
    j: isCaseComponent,
    k: isToggleComponent,
    l: isRefreshComponent,
  }

  checkProps(props, propsType)

  expect(consoleErrorSpy).not.toHaveBeenCalled()
  consoleErrorSpy.mockRestore()
})
