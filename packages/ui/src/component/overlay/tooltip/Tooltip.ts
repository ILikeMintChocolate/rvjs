import arrowSvg from '@icon/tooltip--arrow.svg?element'
import Box from '@layout/box/Box.ts'
import {
  tooltip_arrow_style,
  tooltip_backdrop_recipe,
  tooltip_descriptionText_style,
  tooltip_descriptionWrapper_recipe,
  tooltip_wrapper_style,
} from '@overlay/tooltip/Tooltip.css.ts'
import { useTooltip } from '@overlay/tooltip/Tooltip.hook.ts'
import { Child, svg } from '@rvjs/core/dom'
import { dynamic, prop, Prop, useState } from '@rvjs/core/reactive'
import Text from '@typography/text/Text.ts'

interface TooltipProps {
  trigger: Child
  description: Prop<string>
  kind?: 'standard' | 'iconButton' | 'definition'
  showOnHoverOrClick?: 'hover' | 'click'
}

const Tooltip = (props: TooltipProps) => {
  const {
    kind = 'standard',
    trigger,
    description,
    showOnHoverOrClick = 'hover',
  } = props
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
          svg(arrowSvg, {
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
