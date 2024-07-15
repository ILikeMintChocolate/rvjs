import {
  calcArrowPosition,
  calcTooltipPosition,
  getZoomLevel,
  repositionArrow,
  repositionTooltip,
} from '@overlay/tooltip/Tooltip.util.ts'
import { Block } from '@rvjs/core/dom'
import { GetState, useEffect, useElement, useRef } from '@rvjs/core/reactive'

export const useTooltip = (showTooltip: GetState<boolean>, trigger: Block) => {
  const tooltipRef = useRef<HTMLDivElement>()
  const triggerElement = useElement(trigger)!
  let previousZoom: number = -1

  useEffect(() => {
    if (
      showTooltip() &&
      tooltipRef.current &&
      previousZoom !== getZoomLevel()
    ) {
      const tooltip = tooltipRef.current
      const arrow = tooltipRef.current.children[0] as SVGElement
      const { left: tLeft, top: tTop } = calcTooltipPosition(
        triggerElement,
        tooltip,
      )
      const { left: aLeft } = calcArrowPosition(tooltip, arrow)
      repositionTooltip(tooltip, { left: tLeft, top: tTop })
      repositionArrow(arrow, { left: aLeft })
      previousZoom = getZoomLevel()
    }
  }, [showTooltip])

  return { tooltipRef }
}
