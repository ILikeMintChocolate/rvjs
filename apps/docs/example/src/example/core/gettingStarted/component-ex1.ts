import { component, div, onDestroy, onMount } from '@rvjs/core'

const Content = component(() => {
  onMount(() => {
    console.log('Content component: mounted')
  })

  onDestroy(() => {
    console.log('Content component: destroyed')
  })

  return div({
    textContent: 'Hello World!',
  })
})

export default Content
