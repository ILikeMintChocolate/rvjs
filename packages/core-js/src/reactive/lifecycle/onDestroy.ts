import { componentContext } from '@context/executionContext.ts'
import { throwError } from '@util/error.ts'

export const onDestroy = (callback: () => void) => {
  const component = componentContext.get()
  if (!component) {
    throwError('ON_DESTROY_NOT_IN_COMPONENT_ERROR')
  }
  component.setOnDestroyHandler(callback)
}
