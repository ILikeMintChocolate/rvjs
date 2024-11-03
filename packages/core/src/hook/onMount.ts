import { OnMountHandler } from '@block/util/lifecycleHandler.ts'
import { componentContext } from '@context/component.ts'

export const onMount = (handler: OnMountHandler) => {
  const component = componentContext.get()
  component.setOnMountHandler(handler)
}
