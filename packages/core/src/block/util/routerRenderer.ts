import { RefreshComponent } from '@block/component/refresh.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { SetState } from '@hook/useState.ts'
import { Children } from '@type/jsx.ts'

export const RouterRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    outlet: RefreshComponent
    setOutlet: SetState<Children>

    constructor(...args: any[]) {
      super(...args)
      this.outlet = null
      this.setOutlet = null
    }
  }
}
