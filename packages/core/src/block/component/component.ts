import { Renderer } from '@block/renderer/renderer.ts'
import { ContextProvider } from '@block/util/contextProvider.ts'
import { EffectContext } from '@block/util/effectContext.ts'
import { LifecycleHandler } from '@block/util/lifecycleHandler.ts'
import { Empty } from '@block/util/mixin.ts'
import { Relations } from '@block/util/relations.ts'
import { RVJS_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class Component extends Renderer(
  ContextProvider(Relations(LifecycleHandler(EffectContext(Empty)))),
) {
  $$typeof: symbol
  $$componentType: symbol
  type:
    | 'BLOCK_COMPONENT'
    | 'SWITCH_COMPONENT'
    | 'CASE_COMPONENT'
    | 'FOR_COMPONENT'
    | 'TOGGLE_COMPONENT'
  key: string

  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    const [_, type, key] = args
    this.$$typeof = RVJS_COMPONENT_IDENTIFIER
    this.type = type
    this.key = key
  }
}
