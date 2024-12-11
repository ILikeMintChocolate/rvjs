// @ts-nocheck

import { TooltipArrowIcon } from '@content/icon/Icons.tsx'
import {
  tooltip_arrow_style,
  tooltip_backdrop_recipe,
  tooltip_descriptionText_style,
  tooltip_descriptionWrapper_recipe,
  tooltip_wrapper_style,
} from '@overlay/tooltip/Tooltip.css.ts'
import {
  useTooltipPosition,
  useTooltipProps,
  useTooltipToggle,
} from '@overlay/tooltip/Tooltip.hook.ts'
import { TooltipProps } from '@overlay/tooltip/Tooltip.props.ts'
import Text from '@typography/text/Text.tsx'

const Tooltip = (_props: TooltipProps) => {
  const props = useTooltipProps(_props)
  const { showTooltip, onMouseOverHandler, onMouseOutHandler, onClickHandler } =
    useTooltipToggle(props)
  const tooltipElement = useTooltipPosition(showTooltip, props.children)

  return (
    <div
      className={tooltip_wrapper_style}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={onClickHandler}
    >
      {props.children}
      <div
        element={tooltipElement}
        className={tooltip_backdrop_recipe({
          kind: props.kind,
        })}
        style={{
          visibility: showTooltip() ? 'visible' : 'hidden',
        }}
      >
        <TooltipArrowIcon className={tooltip_arrow_style} />
        <div
          className={tooltip_descriptionWrapper_recipe({ kind: props.kind })}
        >
          <Text
            kind="body-01"
            color="textInverse"
            className={tooltip_descriptionText_style}
          >
            {props.description}
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
