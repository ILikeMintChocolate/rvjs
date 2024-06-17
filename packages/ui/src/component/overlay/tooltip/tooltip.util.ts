export const getZoomLevel = () => {
  return Math.floor(((window.outerWidth - 10) / window.innerWidth) * 100)
}

export const calcTooltipPosition = (
  trigger: HTMLElement,
  tooltip: HTMLElement,
) => {
  const {
    left: trLeft,
    top: trTop,
    width: trWidth,
    height: trHeight,
  } = trigger.getBoundingClientRect()
  const { width: tlWidth } = tooltip.getBoundingClientRect()

  const left = Math.floor(trLeft + trWidth / 2 - tlWidth / 2)
  const top = Math.floor(trTop + trHeight)

  return { left, top }
}

export const calcArrowPosition = (tooltip: HTMLElement, arrow: SVGElement) => {
  const { width: tlWidth } = tooltip.getBoundingClientRect()
  const { width: aWidth } = arrow.getBoundingClientRect()

  const left = Math.floor(tlWidth / 2) - Math.floor(aWidth / 2)

  return { left }
}

export const repositionTooltip = (
  tooltip: HTMLElement,
  position: { left: number; top: number },
) => {
  const { left, top } = position

  tooltip.style.left = `${left}px`
  tooltip.style.top = `${top}px`
}

export const repositionArrow = (
  arrow: SVGElement,
  position: { left: number },
) => {
  const { left } = position

  arrow.style.left = `${left}px`
}
