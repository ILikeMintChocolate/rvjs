import { componentContext } from '@context/executionContext.ts'

export const onDestroy = (callback: () => void) => {
  const component = componentContext.get()!

  component.onDestroyHandler = callback
}
