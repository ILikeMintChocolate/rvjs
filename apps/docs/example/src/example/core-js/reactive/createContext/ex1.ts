import {
  text_style,
  wrapper_style,
} from '@example/core-js/reactive/createContext/ex1.css.ts'
import {
  button,
  component,
  createContext,
  div,
  dynamic,
  GetState,
  h1,
  SetState,
  useState,
} from '@rvjs/core'

interface CounterContext {
  count: GetState<number>
  setCount: SetState<number>
}

const CounterContext = createContext<CounterContext>()

const Counter = component(() => {
  const [count, setCount] = useState(0)
  CounterContext.setContext({ count, setCount })

  return div({
    classes: [wrapper_style],
    children: [
      h1({
        textContent: dynamic(() => `Count: ${count()}`),
      }),
      A(),
      B(),
    ],
  })
})

const A = component(() => {
  const { count, setCount } = CounterContext.getContext()

  return button({
    classes: [text_style],
    textContent: dynamic(() => `A Count: ${count()}`),
    onclick: () => setCount(count() + 1),
  })
})

const B = component(() => {
  const { count, setCount } = CounterContext.getContext()

  return button({
    classes: [text_style],
    textContent: dynamic(() => `B Count: ${count()}`),
    onclick: () => setCount(count() + 1),
  })
})

export default Counter
