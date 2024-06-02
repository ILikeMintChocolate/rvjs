import { componentContext } from '@context/executionContext.ts'
import { GetState, SetState, useState } from '@hook/useState.ts'

const stateStore = new Map()

const useGlobalState = <State>(
  key: string,
  initialState: State,
): [GetState<State>, SetState<State>] => {
  const component = componentContext.get()

  if (!component) {
    throw new Error('useGlobalState must be called inside a component')
  }

  if (!stateStore.has(key)) {
    const [getState, setState] = useState(initialState)

    stateStore.set(key, {
      count: 0,
      getState,
      setState,
    })
  }

  const { getState, setState } = stateStore.get(key)!
  stateStore.get(key)!.count += 1

  component.addUnsubscribeGlobalStateHandler(() => {
    stateStore.get(key)!.count -= 1

    if (stateStore.get(key)!.count === 0) {
      stateStore.delete(key)
    }
  })

  return [getState, setState]
}

export default useGlobalState
