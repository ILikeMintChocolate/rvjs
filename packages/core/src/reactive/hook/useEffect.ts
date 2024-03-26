import {
  componentContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { GetState } from '@hook/useState.ts'

export const useEffect = (callback: () => void, dependencies: GetState[]) => {
  const componentBlock = componentContext.get()

  if (componentBlock) {
    dependencies.forEach((dependency) => {
      subscribeStateContext.set({
        block: componentBlock,
        property: 'useEffect',
        value: callback,
      })
      dependency()
      subscribeStateContext.set(null)
    })
  }
}
