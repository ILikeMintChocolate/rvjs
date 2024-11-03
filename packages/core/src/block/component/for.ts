import { Component } from '@block/component/component.ts'
import { ForRenderer } from '@block/renderer/forRenderer.ts'
import { RVJS_FOR_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class ForComponent extends ForRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_FOR_COMPONENT_IDENTIFIER
  }
}
