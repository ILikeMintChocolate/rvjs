import { Constructor, Empty } from '@block/util/mixin.ts'

export const RouteContext = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    pathname: string
    queryParams: Record<string, string>
    pathParam: { key: string; value: string } | null
    setOutlet: Function | null
    lazySetOutlet: Function | null

    constructor(...args: any[]) {
      super(...args)
      this.pathname = ''
      this.queryParams = {}
      this.pathParam = null
      this.setOutlet = null
      this.lazySetOutlet = null
    }

    triggerLazySetOutlet() {
      if (this.lazySetOutlet) {
        this.lazySetOutlet()
      }
    }
  }
}
