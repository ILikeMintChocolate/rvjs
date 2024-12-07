import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { setAttribute } from '@jsx/setAttribute.ts'
import { style } from '@jsx/style.ts'

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
    if (key !== 'style') {
      setAttribute(element, key, props[key])
    }
  }
}
