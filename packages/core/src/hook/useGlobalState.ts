import { componentContext } from '@context/component.ts'
import { GetState, SetState, StateAccessors, useState } from '@hook/useState.ts'

interface GlobalStateContext<T> {
  count: number
  getState: GetState<T>
  setState: SetState<T>
}

const globalStateMap = new Map<string, GlobalStateContext<unknown>>()

export const useGlobalState = <State>(
  key: string,
  initialState?: State,
): StateAccessors<State> => {
  addUnsubscribeHandler(key)

  if (!globalStateMap.has(key)) {
    const [getState, setState] = useState(initialState)
    globalStateMap.set(key, {
      count: 0,
      getState,
      setState,
    })
  }
  const { getState, setState } = globalStateMap.get(key)!
  globalStateMap.get(key)!.count += 1
  return [getState as GetState<State>, setState as SetState<State>]
}

const addUnsubscribeHandler = (key: string) => {
  const component = componentContext.get()!
  component.addUnsubscribeEffectHandler(() => {
    globalStateMap.get(key)!.count -= 1
    if (globalStateMap.get(key)!.count === 0) {
      globalStateMap.delete(key)
    }
  })
}
