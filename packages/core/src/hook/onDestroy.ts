import { OnDestroyHandler } from '@block/util/lifecycleHandler.ts'
import { componentContext } from '@context/component.ts'

export const onDestroy = (handler: OnDestroyHandler) => {
  componentContext.get().setOnDestroyHandler(handler)
}
