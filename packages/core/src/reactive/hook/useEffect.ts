import { subscribeStateContext } from '@context/executionContext.ts'
import { GetState, isGetState } from '@hook/useState.ts'

export const useEffect = (
  callback: () => void,
  dependencies: (GetState | any)[],
) => {
  dependencies.forEach((dependency) => {
    if (isGetState(dependency)) {
      subscribeStateContext.set({
        // @ts-ignore
        block: null,
        type: 'useEffect',
        property: 'useEffect',
        value: callback,
      })
      dependency()
      subscribeStateContext.set(null)
    }
  })
}
