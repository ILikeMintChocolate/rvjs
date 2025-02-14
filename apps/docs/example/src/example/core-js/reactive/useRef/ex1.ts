import { component, h1, onMount, useRef } from '@rvjs/core'

const App = component(() => {
  const h1Ref = useRef<HTMLHeadingElement>()

  console.log(h1Ref.current) // { current: null }
  onMount(() => {
    console.log(h1Ref.current.toString()) // { current: h1 }
  })

  return h1({
    ref: h1Ref,
    textContent: 'Hello World!',
  })
})

export default App
