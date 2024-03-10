import {
  componentContext,
  subscribeStateContext,
} from '../../dom/executionContext.ts'
import { GetState } from './useState.ts'

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
