import { Component } from '@block/component/component.ts'
import { SwitchRenderer } from '@block/renderer/switchRenderer.ts'
import { RVJS_SWITCH_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class SwitchComponent extends SwitchRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_SWITCH_COMPONENT_IDENTIFIER
  }
}
