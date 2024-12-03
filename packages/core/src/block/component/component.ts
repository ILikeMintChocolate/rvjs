import { Renderer } from '@block/renderer/renderer.ts'
import { ContextProvider } from '@block/util/contextProvider.ts'
import { EffectContext } from '@block/util/effectContext.ts'
import { LifecycleHandler } from '@block/util/lifecycleHandler.ts'
import { Empty } from '@block/util/mixin.ts'
import { Relations } from '@block/util/relations.ts'
import { RouterRenderer } from '@block/util/routerRenderer.ts'
import { RVJS_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class Component extends RouterRenderer(
  Renderer(ContextProvider(Relations(LifecycleHandler(EffectContext(Empty))))),
) {
  $$typeof: symbol
  $$componentType: symbol
  key: string

  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    const [_, key] = args
    this.$$typeof = RVJS_COMPONENT_IDENTIFIER
    this.key = key
  }
}
