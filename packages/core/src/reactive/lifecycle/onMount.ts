import { componentContext } from '@context/executionContext.ts'
import { throwError } from '@util/error.ts'

export const onMount = (callback: () => void) => {
  const component = componentContext.get()!
  if (!component) {
    throwError('ON_MOUNT_NOT_IN_COMPONENT_ERROR')
  }
  component.setOnMountHandler(callback)
}
