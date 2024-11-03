import { Constructor, Empty } from '@block/util/mixin.ts'

export const EffectContext = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    unsubscribeEffectHandlers: Function[]

    constructor(...args: any[]) {
      super(...args)
      this.unsubscribeEffectHandlers = []
    }

    addUnsubscribeEffectHandler(handler: Function) {
      this.unsubscribeEffectHandlers.push(handler)
    }

    unsubscribeAllEffects() {
      this.unsubscribeEffectHandlers.forEach((handler) => {
        handler()
      })
    }
  }
}
