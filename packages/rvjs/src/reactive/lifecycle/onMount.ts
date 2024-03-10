import { componentContext } from '../../dom/executionContext.ts'

export const onMount = (callback: () => void) => {
  const component = componentContext.get()!

  component.onMountHandler = callback
}
