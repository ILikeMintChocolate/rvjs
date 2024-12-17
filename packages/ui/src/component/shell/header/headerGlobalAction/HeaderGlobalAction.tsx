import Tooltip from '@overlay/tooltip/Tooltip.tsx'
import { Case, Switch } from '@rvjs/core'
import {
  headerGlobalAction_button_recipe,
  headerGlobalAction_li_style,
} from '@shell/header/headerGlobalAction/HeaderGlobalAction.css.ts'
import { useHeaderGlobalActionProps } from '@shell/header/headerGlobalAction/HeaderGlobalAction.hook.ts'
import { HeaderGlobalActionProps } from '@shell/header/headerGlobalAction/HeaderGlobalAction.props.ts'
import { isDefined } from '@type/guard.ts'

const HeaderGlobalAction = (_props: HeaderGlobalActionProps) => {
  const props = useHeaderGlobalActionProps(_props)

  return (
    <li className={[headerGlobalAction_li_style, props.className].join(' ')}>
      <Switch>
        <Case is={isDefined(props.tooltip)}>
          <Tooltip description={props.tooltip}>
            <button
              className={headerGlobalAction_button_recipe({
                isActive: props.isActive,
              })}
              onClick={props.onClick}
            >
              {props.children}
            </button>
          </Tooltip>
        </Case>
        <Case is={!isDefined(props.tooltip)}>
          <button
            onClick={props.onClick}
            className={headerGlobalAction_button_recipe({
              isActive: props.isActive,
            })}
          >
            {props.children}
          </button>
        </Case>
      </Switch>
    </li>
  )
}

export default HeaderGlobalAction
