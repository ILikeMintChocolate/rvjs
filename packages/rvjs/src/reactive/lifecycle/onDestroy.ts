import { componentContext } from '../../dom/executionContext.ts'

export const onDestroy = (callback: () => void) => {
  const component = componentContext.get()!

  component.onDestoryHandler = callback
}
