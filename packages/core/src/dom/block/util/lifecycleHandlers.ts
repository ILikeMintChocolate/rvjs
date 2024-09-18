import { Constructor, Empty } from '@block/util/mixin.ts'

export const LifecycleHandlers = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    lifecycleHandlers: {
      onMount: Function | null
      onDestroy: Function | null
    }

    constructor(...args: any[]) {
      super(...args)
      this.lifecycleHandlers = {
        onMount: null,
        onDestroy: null,
      }
    }

    setOnMountHandler(onMount: Function) {
      this.lifecycleHandlers.onMount = onMount
    }

    setOnDestroyHandler(onDestroy: Function) {
      this.lifecycleHandlers.onDestroy = onDestroy
    }

    triggerOnMount() {
      if (this.lifecycleHandlers.onMount) {
        this.lifecycleHandlers.onMount()
        this.lifecycleHandlers.onMount = null
      }
    }

    triggerOnDestroy() {
      if (this.lifecycleHandlers.onDestroy) {
        this.lifecycleHandlers.onDestroy()
        this.lifecycleHandlers.onDestroy = null
      }
    }
  }
}
