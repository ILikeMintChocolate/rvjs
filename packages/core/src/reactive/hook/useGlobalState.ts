import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { GetState, SetState, useState } from '@hook/useState.ts'

interface useGlobalStateOptions {
  overwrite?: boolean
}

const stateStore = new Map()

export const useGlobalState = <State>(
  key: string,
  initialState: State,
  options?: useGlobalStateOptions,
): [GetState<State>, SetState<State>] => {
  const { overwrite = false } = options || {}
  const component = componentContext.get()

  if (!component) {
    throw new Error('useGlobalState must be called inside a component')
  }

  addUnsubscribeHandler(component, key)

  if (!stateStore.has(key)) {
    const [getState, setState] = useState(initialState)
    stateStore.set(key, {
      count: 0,
      getState,
      setState,
    })
    return [getState, setState]
  } else {
    const { getState, setState } = stateStore.get(key)!
    if (overwrite) {
      setState(initialState)
    }
    stateStore.get(key)!.count += 1
    return [getState, setState]
  }
}

const addUnsubscribeHandler = (component: Component, key: string) => {
  component.addUnsubscribeGlobalStateHandler(() => {
    stateStore.get(key)!.count -= 1
    if (stateStore.get(key)!.count === 0) {
      stateStore.delete(key)
    }
  })
}
