import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { effect } from '@jsx/effect.ts'
import { setAttribute } from '@jsx/setAttribute.ts'
import { style } from '@jsx/style.ts'
import { isHTMLElement, isSVGElement } from '@type/guard.ts'

const excludeProps = new Set(['style', 'as', 'children'])

const customProps = {
  className: (element: Node, props: Object) => {
    if (isHTMLElement(element)) {
      // @ts-ignore
      effect(() => (element.className = props.className))
    } else if (isSVGElement(element)) {
      // @ts-ignore
      effect(() => element.setAttribute('class', props.className))
    }
  },
}

export const spread = (element: HTMLElement, props: Object) => {
  if (Object.getOwnPropertyDescriptor(props, 'style')) {
    const effectFn = () => {
      // @ts-ignore
      style(element, props.style)
    }
    stateContext.value = {
      component: currentComponent.value,
      type: 'USE_EFFECT',
      effectFn,
    }
    effectFn()
    stateContext.value = null
  }
  for (const key in props) {
    if (customProps.hasOwnProperty(key)) {
      customProps[key](element, props)
    } else if (!excludeProps.has(key) && key in element) {
      setAttribute(element, key, props[key])
    }
  }
}
