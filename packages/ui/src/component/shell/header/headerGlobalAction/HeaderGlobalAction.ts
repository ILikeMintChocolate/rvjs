import Flex from '@layout/flex/Flex.ts'
import Tooltip from '@overlay/tooltip/Tooltip.ts'
import { button, Children, Switch } from '@rvjs/core/dom'
import { dynamic, Prop, prop } from '@rvjs/core/reactive'
import {
  headerGlobalAction_button_recipe,
  headerGlobalAction_li_style,
} from '@shell/header/headerGlobalAction/HeaderGlobalAction.css.ts'
import { EventHandlers } from '@type/event.ts'

interface HeaderGlobalActionProps {
  children: Children
  classes?: Prop<string>[]
  isActive?: Prop<boolean>
  onClick?: EventHandlers['onClick']
  tooltip?: Prop<string>
  tooltipAlignment?: 'start' | 'center' | 'end'
}

const HeaderGlobalAction = (props: HeaderGlobalActionProps) => {
  const {
    children,
    classes = [],
    isActive = prop(() => false),
    onClick,
    tooltip,
  } = props

  return Flex({
    as: 'li',
    classes: [prop(() => headerGlobalAction_li_style), ...classes],
    children: [
      Switch(tooltip, () => {
        if (tooltip) {
          return Tooltip({
            trigger: button({
              onclick: onClick,
              classes: [
                dynamic(() =>
                  headerGlobalAction_button_recipe({ isActive: isActive() }),
                ),
              ],
              children,
            }),
            description: prop(() => tooltip()),
          })
        } else {
          return button({
            onclick: onClick,
            classes: [
              dynamic(() =>
                headerGlobalAction_button_recipe({ isActive: isActive() }),
              ),
            ],
            children,
          })
        }
      }),
    ],
  })
}

export default HeaderGlobalAction
