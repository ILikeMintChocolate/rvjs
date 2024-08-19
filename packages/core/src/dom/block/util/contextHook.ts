import { ComponentBlock } from '@block/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'

export type DeleteProvider = (component: ComponentBlock) => void

export const ContextHook = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    #contextProviders: Set<Object>
    #deleteContextProviderHandlers: DeleteProvider[]

    constructor(...args: any[]) {
      super(...args)
      this.#contextProviders = new Set()
      this.#deleteContextProviderHandlers = []
    }

    addContextProvider(ref: Object) {
      this.#contextProviders.add(ref)
    }

    hasContextProvider(ref: Object) {
      return this.#contextProviders.has(ref)
    }

    addDeleteContextProviderHandler(handler: DeleteProvider) {
      this.#deleteContextProviderHandlers.push(handler)
    }

    deleteAllContextProviders() {
      this.#contextProviders.forEach((ref) => {
        this.#contextProviders.delete(ref)
        this.#deleteContextProviderHandlers.forEach((handler) =>
          handler(this as unknown as ComponentBlock),
        )
      })
    }
  }
}
