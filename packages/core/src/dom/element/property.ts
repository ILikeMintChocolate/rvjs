import { subscribeStateContext } from '@context/executionContext.ts'
import { Children } from '@dom/type.ts'
import { Element } from '@element/elementBlock.ts'
import { AllElementProps, StyleProps } from '@element/type.ts'
import { Dynamic, isDynamic } from '@hook/dynamic.ts'
import { RefObject } from '@hook/useRef.ts'
import { isString } from '@type/guard.ts'

export const applyPropsToElement = <
  Props extends Partial<AllElementProps>,
>(
  block: Element,
  props: Partial<Props>,
) => {
  Object.entries(props).forEach(([key, value]) => {
    setProperty(block, key as keyof AllElementProps, value)
  })
}

export const setProperty = (
  block: Element,
  key: keyof AllElementProps,
  value: AllElementProps[keyof AllElementProps],
) => {
  if(isDynamic(value)) {
    setDynamicProperty(
      block,
      key,
      value as Dynamic<AllElementProps[keyof AllElementProps]>,
    )
  } else {
    if(customProps.hasOwnProperty(key)) {
      customProps[key as keyof CustomProps](block, value as any)
    } else if(block.element.hasAttribute(key)) {
      block.element.setAttribute(key, value as string)
    } else {
      // @ts-ignore
      block.element[key] = value
    }
  }
}

export const setDynamicProperty = (
  block: Element,
  key: keyof AllElementProps,
  value: Dynamic<AllElementProps[keyof AllElementProps]>,
) => {
  subscribeStateContext.set({
    block: block,
    type: 'domProperty',
    property: key,
    value,
  })
  setProperty(block, key, value())
  subscribeStateContext.set(null)
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
  classes: (string | Dynamic<string>)[]
}

const customProps = {
  ref: (parent: Element, refObject: CustomProps['ref']) => {
    if(refObject !== undefined) {
      refObject.current = parent.element
    }
  },
  children: (parent: Element, children: CustomProps['children']) => {
    parent.appendChildren(children)
  },
  style: (parent: Element, style: CustomProps['style']) => {
    Object.entries(style).forEach(([property, value]) => {
      if(isDynamic(value)) {
        subscribeStateContext.set({
          block: parent,
          type: 'styleProperty',
          property: property,
          value,
        })
        // @ts-ignore
        parent.element.style[property] = value()
        subscribeStateContext.set(null)
      } else {
        // @ts-ignore
        parent.element.style[property] = value
      }
    })
  },
  animation: (parent: Element, animation: CustomProps['animation']) => {
    parent.element.animate(animation.keyframes, animation.options)
  },
  className: (block: Element, className: CustomProps['className']) => {
    const splitedClassNames = className.split(' ')
    block.element.classList.add(...splitedClassNames)
  },
  classes: (parent: Element, classes: CustomProps['classes']) => {
    classes.forEach((cls) => {
      if(isDynamic(cls)) {
        const clsString = cls()
        subscribeStateContext.set({
          block: parent,
          type: 'classesProperty',
          property: 'classes',
          value: {
            classFn: cls,
            removePrevClassFn: () => {
              clsString.split(' ').forEach((classString) => {
                parent.element.classList.remove(classString)
              })
            },
          },
        })
        const classesString = cls()
        classesString.split(' ').forEach((classString) => {
          parent.element.classList.add(classString)
        })
        subscribeStateContext.set(null)
      } else if(isString(cls)) {
        cls.split(' ').forEach((cls) => {
          parent.element.classList.add(cls)
        })
      }
    })
  },
}

export const setStyleProperty = (
  elementBlock: Element,
  property: string,
  value: unknown,
) => {
  if(isDynamic(value)) {
    // @ts-ignore
    elementBlock.element.style[property] = value()
  } else {
    // @ts-ignore
    elementBlock.element.style[property] = value
  }
}
