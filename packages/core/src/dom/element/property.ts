import { subscribeStateContext } from '@context/executionContext.ts'
import { Children } from '@dom/type.ts'
import { ElementBlock } from '@element/elementBlock.ts'
import { isDynamicRender } from '@hook/dynamic.ts'
import { RefObject } from '@hook/useRef.ts'

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
      if (isDynamicRender(style[key])) {
        subscribeStateContext.set({
          block: parent,
          property: 'style',
          value: () => {
            // @ts-ignore
            parent.element.style[key] = style[key]()
          },
        })
        // @ts-ignore
        parent.element.style[key] = style[key]()
        subscribeStateContext.set(null)
      } else {
        // @ts-ignore
        parent.element.style[key] = style[key]
      }
    }
  },
}
