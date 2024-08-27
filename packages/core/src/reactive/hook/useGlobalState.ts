import { ComponentBlock } from '@block/component.ts'
import { componentContext } from '@context/executionContext.ts'
import { GetState, SetState, useState } from '@hook/useState.ts'
import { throwError } from '@util/error.ts'

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
    throwError('USE_GLOBAL_STATE_NOT_IN_COMPONENT_ERROR')
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

const addUnsubscribeHandler = (component: ComponentBlock, key: string) => {
  component.addUnsubscribeGlobalStateHandler(() => {
    stateStore.get(key)!.count -= 1
    if (stateStore.get(key)!.count === 0) {
      stateStore.delete(key)
    }
  })
}
