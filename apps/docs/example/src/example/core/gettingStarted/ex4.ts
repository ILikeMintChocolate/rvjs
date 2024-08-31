import { component, div, h1, onMount } from '@rvjs/core'

const Content = component(() => {
  onMount(() => {
    console.log('Content component: mounted')
  })

  return div({
    children: [
      h1({
        textContent: 'Hello World!',
      }),
    ],
  })
})

export default Content
