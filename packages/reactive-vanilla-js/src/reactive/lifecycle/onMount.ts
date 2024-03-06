import {
  componentContext,
  onMountHandlerQueueContext,
} from '../../dom/executionContext.ts'

export const onMount = (callback: () => void) => {
  const component = componentContext.get()!

  onMountHandlerQueueContext.push(callback.bind(component))
}
