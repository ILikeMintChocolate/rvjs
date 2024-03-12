import { ElementBlock } from './elementBlock.ts'
import { isDynamicRender } from '../reactive/hook/dynamic.ts'
import { subscribeStateContext } from '../reactive/context/executionContext.ts'
import { RefObject } from '../reactive/hook/useRef.ts'
import { Children } from '../type/dom.ts'

export const setProperty = (
  elementBlock: ElementBlock,
  key: string,
  value: unknown,
) => {
  if (isDynamicRender(value)) {
    subscribeStateContext.set({
      block: elementBlock,
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
  style: Partial<CSSStyleDeclaration>
}

const customProperties = {
  ref: (parent: ElementBlock, refObject: RefObject<HTMLElement>) => {
    refObject.current = parent.element
  },
  children: (parent: ElementBlock, children: Children) => {
    parent.appendChildren(children)
  },
  style: (parent: ElementBlock, style: Partial<CSSStyleDeclaration>) => {
    for (const key in style) {
      // @ts-ignore
      parent.element.style[key] = style[key]
    }
  },
}
