import { Component } from '@block/component/component.ts'
import { RefreshRenderer } from '@block/renderer/refreshRenderer.ts'
import { RVJS_REFRESH_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class RefreshComponent extends RefreshRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_REFRESH_COMPONENT_IDENTIFIER
  }
}
