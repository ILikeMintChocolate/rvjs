import { BlockComponent } from '@block/component/block.ts'
import { CaseComponent } from '@block/component/case.ts'
import { Component } from '@block/component/component.ts'
import { SwitchComponent } from '@block/component/switch.ts'
import { ToggleComponent } from '@block/component/toggle.ts'
import { Context } from '@util/context.ts'

export const componentContext = new Context<
  Component | BlockComponent | SwitchComponent | CaseComponent | ToggleComponent
>()
