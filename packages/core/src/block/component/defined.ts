import { Component } from '@block/component/component.ts'
import { DefinedRenderer } from '@block/renderer/definedRenderer.ts'
import { RVJS_DEFINED_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class DefinedComponent extends DefinedRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_DEFINED_COMPONENT_IDENTIFIER
  }
}
