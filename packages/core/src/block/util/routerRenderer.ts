import { Component } from '@block/component/component.ts'
import { RefreshComponent } from '@block/component/refresh.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { SetState } from '@hook/useState.ts'

export const RouterRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    outlet: RefreshComponent
    setOutlet: SetState<Component | Node>

    constructor(...args: any[]) {
      super(...args)
      this.outlet = null
      this.setOutlet = null
    }
  }
}
