import { Component } from '@block/component/component.ts'
import { CaseRenderer } from '@block/renderer/caseRenderer.ts'
import { RVJS_CASE_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export class CaseComponent extends CaseRenderer(Component) {
  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    this.$$componentType = RVJS_CASE_COMPONENT_IDENTIFIER
  }
}
