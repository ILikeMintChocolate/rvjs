import { TooltipProps } from '@overlay/tooltip/Tooltip.props.ts'
import {
  getZoomLevel,
  isTooltipOverflowLeft,
  isTooltipOverflowRight,
  setTooltipAlignCenter,
  setTooltipAlignLeft,
  setTooltipAlignRight,
} from '@overlay/tooltip/Tooltip.util.ts'
import {
  Component,
  defineProps,
  GetState,
  isComponent,
  onDestroy,
  onMount,
  useEffect,
  useElement,
  useState,
} from '@rvjs/core'
import { isHTMLElement } from '@type/guard.ts'

export const useTooltipProps = (props: TooltipProps): TooltipProps => {
  const newProps = defineProps(
    props,
    {
      get kind() {
        return props.kind ?? 'standard'
      },
      get showOnHoverOrClick() {
        return props.showOnHoverOrClick ?? 'hover'
      },
    },
    {
      children: ['children'],
    },
  )

  return newProps
}

export const useTooltipToggle = (props: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const onMouseOverHandler = () => {
    if (props.showOnHoverOrClick === 'hover') {
      setShowTooltip(true)
    }
  }

  const onMouseOutHandler = () => {
    if (props.showOnHoverOrClick === 'hover') {
      setShowTooltip(false)
    }
  }

  const onClickHandler = () => {
    if (props.showOnHoverOrClick === 'click') {
      setShowTooltip(true)
      setTimeout(() => {
        setShowTooltip(false)
      }, 3000)
    }
  }

  return {
    showTooltip,
    onMouseOverHandler,
    onMouseOutHandler,
    onClickHandler,
  }
}

export const useTooltipPosition = (
  showTooltip: GetState<boolean>,
  trigger: Component | Node,
) => {
  const tooltipElementObject = useElement<HTMLDivElement>()
  let previousZoom: number = -1

  const setTooltipPosition = () => {
    const tooltipElement = tooltipElementObject.current
    const arrowElement = tooltipElementObject.current.children[0] as SVGElement
    const triggerElement = getTriggerElement(trigger)
    previousZoom = getZoomLevel()
    setTooltipAlignCenter(triggerElement, tooltipElement, arrowElement)
    if (isTooltipOverflowRight(tooltipElement)) {
      setTooltipAlignRight(triggerElement, tooltipElement, arrowElement)
    } else if (isTooltipOverflowLeft(tooltipElement)) {
      setTooltipAlignLeft(triggerElement, tooltipElement, arrowElement)
    }
  }

  onMount(() => {
    window.addEventListener('resize', setTooltipPosition)
  })

  onDestroy(() => {
    window.removeEventListener('resize', setTooltipPosition)
  })

  useEffect(() => {
    if (
      showTooltip() &&
      previousZoom !== getZoomLevel() &&
      tooltipElementObject.current
    ) {
      setTooltipPosition()
    }
  }, [showTooltip])

  return tooltipElementObject
}

const getTriggerElement = (trigger: Component | Node): HTMLElement => {
  if (isHTMLElement(trigger)) {
    return trigger
  } else if (isComponent(trigger)) {
    return trigger.getNodes()[0] as HTMLElement
  }
}
