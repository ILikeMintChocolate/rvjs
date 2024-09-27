import Flex from '@layout/flex/Flex.ts'
import Tooltip from '@overlay/tooltip/Tooltip.ts'
import { button, dynamic, prop, Switch } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  headerGlobalAction_button_recipe,
  headerGlobalAction_li_style,
} from '@shell/header/headerGlobalAction/HeaderGlobalAction.css.ts'
import {
  HeaderGlobalActionProps,
  headerGlobalActionPropsType,
} from '@shell/header/headerGlobalAction/HeaderGlobalAction.props.ts'

const HeaderGlobalAction = (props: HeaderGlobalActionProps) => {
  const {
    children,
    classes = [],
    isActive = prop(() => false),
    onClick,
    tooltip,
  } = checkProps(props, headerGlobalActionPropsType)

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
                  headerGlobalAction_button_recipe({
                    isActive: isActive(),
                  }).split(' '),
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
                headerGlobalAction_button_recipe({
                  isActive: isActive(),
                }).split(' '),
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
