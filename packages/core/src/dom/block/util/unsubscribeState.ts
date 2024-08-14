import { Constructor, Empty } from '@block/util/mixin.ts'

export const UnsubscribeState = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    #unsubscribeHandlers: {
      state: Function[]
      globalState: Function[]
    }

    constructor(...args: any[]) {
      super(...args)
      this.#unsubscribeHandlers = {
        state: [],
        globalState: [],
      }
    }

    addStateUnsubscribeHandler(unsubscribeHandler: Function) {
      this.#unsubscribeHandlers.state.push(unsubscribeHandler)
    }

    addUnsubscribeGlobalStateHandler(unsubscribeHandler: Function) {
      this.#unsubscribeHandlers.globalState.push(unsubscribeHandler)
    }

    cleanUpUnsubscribeState() {
      this.#unsubscribeHandlers.state.forEach((unsubscribeHandler) =>
        unsubscribeHandler(this),
      )
      this.#unsubscribeHandlers.globalState.forEach((unsubscribeHandler) => {
        unsubscribeHandler(this)
      })
    }
  }
}
