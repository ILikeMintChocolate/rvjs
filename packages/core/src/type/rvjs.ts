import { BlockComponent } from '@block/component/block.ts'
import { CaseComponent } from '@block/component/case.ts'
import { Component } from '@block/component/component.ts'
import { RefreshComponent } from '@block/component/refresh.ts'
import { SwitchComponent } from '@block/component/switch.ts'
import { ToggleComponent } from '@block/component/toggle.ts'

export type RvjsComponent =
  | Component
  | BlockComponent
  | SwitchComponent
  | CaseComponent
  | ToggleComponent
  | RefreshComponent

export type RvjsObject<T extends Object> = T & {
  $$typeof: symbol
}
