import { TooltipArrowIcon } from '@content/icon/Icons.ts'
import Box from '@layout/box/Box.ts'
import {
  tooltip_arrow_style,
  tooltip_backdrop_recipe,
  tooltip_descriptionText_style,
  tooltip_descriptionWrapper_recipe,
  tooltip_wrapper_style,
} from '@overlay/tooltip/Tooltip.css.ts'
import { useTooltip } from '@overlay/tooltip/Tooltip.hook.ts'
import {
  TooltipProps,
  tooltipPropsType,
} from '@overlay/tooltip/Tooltip.props.ts'
import { dynamic, prop, useState } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import Text from '@typography/text/Text.ts'

const Tooltip = (props: TooltipProps) => {
  const {
    kind = 'standard',
    trigger,
    description,
    showOnHoverOrClick = 'hover',
  } = checkProps<TooltipProps>(props, tooltipPropsType)
  const [showTooltip, setShowHover] = useState(false)
  const { tooltipRef } = useTooltip(showTooltip, trigger)

  return Box({
    classes: [prop(() => tooltip_wrapper_style)],
    onmouseover: () => {
      if (showOnHoverOrClick === 'hover') {
        setShowHover(true)
      }
    },
    onmouseout: () => {
      if (showOnHoverOrClick === 'hover') {
        setShowHover(false)
      }
    },
    onclick: () => {
      if (showOnHoverOrClick === 'click') {
        setShowHover(true)

        setTimeout(() => {
          setShowHover(false)
        }, 3000)
      }
    },
    children: [
      trigger,
      Box({
        ref: tooltipRef,
        classes: [prop(() => tooltip_backdrop_recipe({ kind }))],
        style: {
          display: dynamic(() => (showTooltip() ? 'block' : 'none')),
        },
        children: [
          TooltipArrowIcon({
            classes: [dynamic(() => tooltip_arrow_style)],
          }),
          Box({
            classes: [prop(() => tooltip_descriptionWrapper_recipe({ kind }))],
            children: [
              Text({
                text: prop(() => description()),
                kind: prop(() => 'body-01'),
                color: prop(() => 'textInverse'),
                classes: [prop(() => tooltip_descriptionText_style)],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default Tooltip
