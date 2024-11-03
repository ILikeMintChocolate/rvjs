import { Constructor, Empty } from '@block/util/mixin.ts'

export const ContextProvider = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    contextRef: Object
    context: Object

    constructor(...args: any[]) {
      super(...args)
      this.contextRef = null
      this.context = null
    }

    setContextRef(contextRef: Object) {
      this.contextRef = contextRef
    }

    setContext(context: Object) {
      this.context = context
    }
  }
}
