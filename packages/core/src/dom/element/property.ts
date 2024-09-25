import { ElementBlock } from '@block/element.ts'
import { AllElementProps, StyleProps } from '@element/type.ts'
import { Dynamic, isDynamic } from '@hook/dynamic.ts'
import { RefObject } from '@hook/useRef.ts'
import { isArray } from '@type/guard.ts'
import { Children } from '@type/type.ts'

export const applyPropsToElement = <Props extends Partial<AllElementProps>>(
  block: ElementBlock,
  props: Partial<Props>,
) => {
  Object.entries(props).forEach(([key, value]) => {
    setProperty(block, key as keyof AllElementProps, value)
  })
}

export const setProperty = (
  block: ElementBlock,
  key: keyof AllElementProps,
  value: AllElementProps[keyof AllElementProps],
) => {
  if (isDynamic(value)) {
    setDynamicProperty(
      block,
      key,
      value as Dynamic<AllElementProps[keyof AllElementProps]>,
    )
  } else {
    if (customProps.hasOwnProperty(key)) {
      customProps[key as keyof CustomProps](block, value as any)
    } else if (block.element.hasAttribute(key)) {
      block.element.setAttribute(key, value as string)
    } else {
      // @ts-ignore
      block.element[key] = value
    }
  }
}

export const setDynamicProperty = (
  block: ElementBlock,
  key: keyof AllElementProps,
  value: Dynamic<AllElementProps[keyof AllElementProps]>,
) => {
  setProperty(
    block,
    key,
    value({
      block: block,
      type: 'domProperty',
      property: key,
      value,
    }),
  )
}

export interface CustomProps {
  ref: RefObject<HTMLElement>
  children: Children
  style: Partial<StyleProps>
  animation: {
    keyframes: Keyframe[] | PropertyIndexedKeyframes | null
    options?: number | KeyframeAnimationOptions
  }
  className: string
  classes: (
    | string
    | string[]
    | Dynamic<string>
    | Dynamic<string[]>
    | Dynamic<string | string[]>
  )[]
}

const customProps = {
  ref: (parent: ElementBlock, refObject: CustomProps['ref']) => {
    if (refObject !== undefined) {
      refObject.current = parent.element
    }
  },
  children: (parent: ElementBlock, children: CustomProps['children']) => {
    parent.appendChildren(children)
  },
  style: (parent: ElementBlock, style: CustomProps['style']) => {
    Object.entries(style).forEach(([property, value]) => {
      if (isDynamic(value)) {
        parent.element.style[property] = value({
          block: parent,
          type: 'styleProperty',
          property: property,
          value,
        })
      } else {
        // @ts-ignore
        parent.element.style[property] = value
      }
    })
  },
  animation: (parent: ElementBlock, animation: CustomProps['animation']) => {
    parent.element.animate(animation.keyframes, animation.options)
  },
  classes: (parent: ElementBlock, classes: CustomProps['classes']) => {
    for (let i = 0; i < classes.length; i++) {
      const singleClass = classes[i]
      if (isDynamic(singleClass)) {
        const prevClassString = singleClass()
        singleClass({
          block: parent,
          type: 'classesProperty',
          property: 'classes',
          value: {
            classFn: singleClass,
            removePrevClassFn: () => {
              removeClasses(parent.element, prevClassString)
            },
          },
        })
        setClasses(parent.element, prevClassString)
      } else {
        setClasses(parent.element, singleClass)
      }
    }
  },
}

export const setStyleProperty = (
  elementBlock: ElementBlock,
  property: string,
  value: unknown,
) => {
  if (isDynamic(value)) {
    // @ts-ignore
    elementBlock.element.style[property] = value()
  } else {
    // @ts-ignore
    elementBlock.element.style[property] = value
  }
}

export const setClasses = (
  element: HTMLElement,
  cls: Array<string> | string,
) => {
  if (isArray(cls)) {
    element.classList.add(...cls.filter(Boolean))
  } else if (cls !== '') {
    element.classList.add(cls)
  }
}

export const removeClasses = (
  element: HTMLElement,
  cls: Array<string> | string,
) => {
  if (isArray(cls)) {
    element.classList.remove(...cls.filter(Boolean))
  } else if (cls !== '') {
    element.classList.remove(cls)
  }
}
