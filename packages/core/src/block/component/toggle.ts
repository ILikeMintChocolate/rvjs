import { Component } from '@block/component/component.ts'
import { ToggleRenderer } from '@block/renderer/toggleRenderer.ts'
import { RVJS_TOGGLE_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class ToggleComponent extends ToggleRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_TOGGLE_COMPONENT_IDENTIFIER
  }
}
