import { Constructor, Empty } from '@block/util/mixin.ts'

export const RouteContext = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    #pathname: string
    #queryParams: Record<string, string>
    #pathParam: { key: string; value: string } | null
    #setOutlet: Function | null
    #lazySetOutlet: Function | null

    constructor(...args: any[]) {
      super(...args)
      this.#pathname = ''
      this.#queryParams = {}
      this.#pathParam = null
      this.#setOutlet = null
      this.#lazySetOutlet = null
    }

    get pathname() {
      return this.#pathname
    }

    set pathname(value: string) {
      this.#pathname = value
    }

    get queryParams() {
      return this.#queryParams
    }

    set queryParams(value: Record<string, string>) {
      this.#queryParams = value
    }

    get pathParam() {
      return this.#pathParam
    }

    set pathParam(value: { key: string; value: string } | null) {
      this.#pathParam = value
    }

    get setOutlet() {
      return this.#setOutlet
    }

    set setOutlet(setOutlet: Function) {
      this.#setOutlet = setOutlet
    }

    set lazySetOutlet(lazySetOutlet: Function) {
      this.#lazySetOutlet = lazySetOutlet
    }

    triggerLazySetOutlet() {
      if (this.#lazySetOutlet) {
        this.#lazySetOutlet()
      }
    }
  }
}
