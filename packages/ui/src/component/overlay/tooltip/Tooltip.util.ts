export const getZoomLevel = () => {
  return Math.floor(((window.outerWidth - 10) / window.innerWidth) * 100)
}

export const repositionElement = (
  element: HTMLElement | SVGElement,
  position: { left?: string; right?: string; top?: string; bottom?: string },
) => {
  const { left, right, top, bottom } = position
  if (left) {
    element.style.left = left
  }
  if (right) {
    element.style.right = right
  }
  if (top) {
    element.style.top = top
  }
  if (bottom) {
    element.style.bottom = bottom
  }
}

export const setTooltipAlignCenter = (
  trigger: HTMLElement,
  tooltip: HTMLElement,
  arrow: SVGElement,
) => {
  const { left: tooltipLeft } = calcElementAlignCenterPosition(
    trigger,
    tooltip,
    'absolute',
  )
  repositionElement(tooltip, { left: `${tooltipLeft}px` })
  const { left: arrowLeft } = calcElementAlignCenterPosition(
    tooltip,
    arrow,
    'relative',
  )
  repositionElement(arrow, { left: `${arrowLeft}px` })
}

export const setTooltipAlignRight = (
  trigger: HTMLElement,
  tooltip: HTMLElement,
  arrow: SVGElement,
) => {
  const { left: tooltipLeft } = calcElementAlignRightPosition(
    trigger,
    tooltip,
    'absolute',
  )
  repositionElement(tooltip, { left: `${tooltipLeft}px` })
  const { left: arrowLeft } = calcArrowAlignRightPosition(
    trigger,
    tooltip,
    arrow,
  )
  repositionElement(arrow, { left: `${arrowLeft}px` })
}

export const setTooltipAlignLeft = (
  trigger: HTMLElement,
  tooltip: HTMLElement,
  arrow: SVGElement,
) => {
  repositionElement(tooltip, { left: '0px' })
  const { left: arrowLeft } = calcArrowAlignRightPosition(
    trigger,
    tooltip,
    arrow,
  )
  repositionElement(arrow, { left: `${arrowLeft}px` })
}

export const isTooltipOverflowRight = (tooltip: HTMLElement) => {
  const { right } = tooltip.getBoundingClientRect()
  return window.innerWidth < right
}

export const isTooltipOverflowLeft = (tooltip: HTMLElement) => {
  const { left } = tooltip.getBoundingClientRect()
  return left < 0
}

export const calcElementAlignCenterPosition = (
  anchor: HTMLElement,
  target: HTMLElement | SVGElement,
  position: 'absolute' | 'relative',
) => {
  const {
    left: anchorLeft,
    width: anchorWidth,
    top: anchorTop,
    height: anchorHeight,
  } = anchor.getBoundingClientRect()
  const { width: targetWidth } = target.getBoundingClientRect()
  if (position === 'absolute') {
    const newLeft = Math.floor(anchorLeft + anchorWidth / 2 - targetWidth / 2)
    const newTop = Math.floor(anchorTop + anchorHeight)
    return { left: newLeft, top: newTop }
  } else if (position === 'relative') {
    const newLeft = Math.floor(anchorWidth / 2 - targetWidth / 2)
    const newTop = Math.floor(anchorTop + anchorHeight)
    return { left: newLeft, top: newTop }
  }
}

export const calcElementAlignRightPosition = (
  anchor: HTMLElement,
  target: HTMLElement | SVGElement,
  position: 'absolute',
) => {
  const {
    right: anchorRight,
    top: anchorTop,
    height: anchorHeight,
  } = anchor.getBoundingClientRect()
  const { width: targetWidth } = target.getBoundingClientRect()
  if (position === 'absolute') {
    const newLeft = Math.floor(anchorRight - targetWidth)
    const newTop = Math.floor(anchorTop + anchorHeight)
    return { left: newLeft, top: newTop }
  }
}

export const calcArrowAlignRightPosition = (
  trigger: HTMLElement,
  tooltip: HTMLElement,
  arrow: SVGElement,
) => {
  const { left: triggerLeft } = trigger.getBoundingClientRect()
  const { left: tooltipLeft } = tooltip.getBoundingClientRect()
  const { left: arrowLeft } = calcElementAlignCenterPosition(
    trigger,
    arrow,
    'relative',
  )
  const newLeft = Math.floor(arrowLeft + (triggerLeft - tooltipLeft))
  return { left: newLeft }
}
