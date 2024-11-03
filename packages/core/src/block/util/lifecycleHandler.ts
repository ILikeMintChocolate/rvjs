import { Constructor, Empty } from '@block/util/mixin.ts'

export type OnMountHandler = () => void

export type OnDestroyHandler = () => void

export const LifecycleHandler = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    onMountHandler: OnMountHandler | null
    onDestroyHandler: OnDestroyHandler | null

    constructor(...args: any[]) {
      super(...args)
      this.onMountHandler = null
      this.onDestroyHandler = null
    }

    setOnMountHandler(handler: OnMountHandler) {
      this.onMountHandler = handler
    }

    setOnDestroyHandler(handler: OnDestroyHandler) {
      this.onDestroyHandler = handler
    }
  }
}
