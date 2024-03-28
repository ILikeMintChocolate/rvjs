import { subscribeStateContext } from '@context/executionContext.ts'
import { Children } from '@dom/type.ts'
import { ElementBlock } from '@element/elementBlock.ts'
import { isDynamicRender } from '@hook/dynamic.ts'
import { RefObject } from '@hook/useRef.ts'
import { AddTypeToValues } from '@type/util.ts'
import { Properties } from 'csstype'

export const setProperty = (
  elementBlock: ElementBlock,
  key: string,
  value: unknown,
) => {
  if (isDynamicRender(value)) {
    subscribeStateContext.set({
      block: elementBlock,
      type: 'domProperty',
      property: key,
      value,
    })
    setProperty(elementBlock, key, value())
    subscribeStateContext.set(null)
  } else {
    if (customProperties.hasOwnProperty(key)) {
      // @ts-ignore
      customProperties[key](elementBlock, value)
    } else if (elementBlock.element.hasAttribute(key)) {
      elementBlock.element.setAttribute(key, value as string)
    } else {
      // @ts-ignore
      elementBlock.element[key] = value
    }
  }
}

export interface CustomProperties {
  ref: RefObject<HTMLElement>
  children: Children
  style: AddTypeToValues<Properties, any>
  animation: AnimationProps
}

interface AnimationProps {
  keyframes: Keyframe[] | PropertyIndexedKeyframes | null
  options?: number | KeyframeAnimationOptions
}

const customProperties = {
  ref: (parent: ElementBlock, refObject: RefObject<HTMLElement>) => {
    refObject.current = parent.element
  },
  children: (parent: ElementBlock, children: Children) => {
    parent.appendChildren(children)
  },
  style: (parent: ElementBlock, style: AddTypeToValues<Properties, any>) => {
    for (const property in style) {
      // @ts-ignore
      if (isDynamicRender(style[property])) {
        subscribeStateContext.set({
          block: parent,
          type: 'styleProperty',
          property: property,
          // @ts-ignore
          value: style[property],
        })
        // @ts-ignore
        parent.element.style[property] = style[property]()
        subscribeStateContext.set(null)
      } else {
        // @ts-ignore
        parent.element.style[property] = style[property]
      }
    }
  },
  animation: (parent: ElementBlock, animation: AnimationProps) => {
    parent.element.animate(animation.keyframes, animation.options)
  },
}

export const setStyleProperty = (
  elementBlock: ElementBlock,
  property: string,
  value: unknown,
) => {
  if (isDynamicRender(value)) {
    // @ts-ignore
    elementBlock.element.style[property] = value()
  } else {
    // @ts-ignore
    elementBlock.element.style[property] = value
  }
}
