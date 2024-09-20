import { div, h4, Suspense } from '@rvjs/core'

const SuspenseExample = () => {
  return div({
    children: [
      Suspense({
        content: () => Content(),
        loading: h4({ textContent: 'Loading' }),
        error: h4({ textContent: 'Error' }),
      }),
    ],
  })
}

const Content = async () => {
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  await delay(3000)

  return h4({
    textContent: 'Loaded',
  })
}

export default SuspenseExample
