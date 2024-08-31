import {
  text_style,
  wrapper_style,
} from '@example/core/reactive/useGlobalState/ex1.css.ts'
import { button, component, div, dynamic, h1, useGlobalState } from '@rvjs/core'

const Counter = component(() => {
  const [globalCount] = useGlobalState('COUNT', 0)

  return div({
    classes: [wrapper_style],
    children: [
      h1({
        textContent: dynamic(() => `Count: ${globalCount()}`),
      }),
      A(),
      B(),
    ],
  })
})

const A = component(() => {
  const [globalCount, setGlobalCount] = useGlobalState('COUNT', 0)

  return button({
    classes: [text_style],
    textContent: dynamic(() => `A Count: ${globalCount()}`),
    onclick: () => setGlobalCount(globalCount() + 1),
  })
})

const B = component(() => {
  const [globalCount, setGlobalCount] = useGlobalState('COUNT', 0)

  return button({
    classes: [text_style],
    textContent: dynamic(() => `B Count: ${globalCount()}`),
    onclick: () => setGlobalCount(globalCount() + 1),
  })
})

export default Counter
