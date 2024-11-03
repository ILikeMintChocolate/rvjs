import { Component } from '@block/component/component.ts'
import { BlockRenderer } from '@block/renderer/blockRenderer.ts'
import { RVJS_BLOCK_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class BlockComponent extends BlockRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_BLOCK_COMPONENT_IDENTIFIER
  }
}
