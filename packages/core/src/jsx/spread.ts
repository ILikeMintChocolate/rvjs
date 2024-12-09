import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { effect } from '@jsx/effect.ts'
import { setAttribute } from '@jsx/setAttribute.ts'
import { style } from '@jsx/style.ts'

const excludeProps = new Set(['style', 'as', 'children'])

const customProps = {
  className: (element: HTMLElement, props: Object) => {
    // @ts-ignore
    effect(() => (element.className = props.className))
  },
}

export const spread = (element: HTMLElement, props: Object) => {
  if (Object.getOwnPropertyDescriptor(props, 'style')) {
    const effectFn = () => {
      // @ts-ignore
      style(element, props.style)
    }
    stateContext.set({
      component: componentContext.get(),
      type: 'USE_EFFECT',
      effectFn: () => {
        effectFn()
      },
    })
    effectFn()
    stateContext.clear()
  }
  for (const key in props) {
    if (customProps.hasOwnProperty(key)) {
      customProps[key](element, props)
    } else if (!excludeProps.has(key) && key in element) {
      setAttribute(element, key, props[key])
    }
  }
}
