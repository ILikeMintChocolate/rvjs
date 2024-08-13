import { Block, SetState, useElement } from '@rvjs/core'
import { debounce } from '@util/debounce.ts'

export const useTableOfContents = (headingIndex: Block[]) => {
  const headings = headingIndex.map((heading) => {
    const element = useElement(heading)
    return { element, title: element.textContent }
  })
  return headings
}

export const useTableOfContentsRoot = (
  headingIndex: Block[],
  setActiveIndex: SetState<number>,
) => {
  let currentObserver: IntersectionObserver

  const createObserver = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headingIndex.findIndex(
              ({ element }) => element === entry.target,
            )
            setActiveIndex(index)
          }
        })
      },
      {
        rootMargin: `-248px 0px -${window.innerHeight - 260}px 0px`,
        threshold: 0,
      },
    )
    return observer
  }

  const subscribeObserver = () => {
    if (currentObserver) {
      currentObserver.disconnect()
    }
    const observer = createObserver()
    headingIndex.forEach((heading) => {
      const element = useElement(heading)
      observer.observe(element)
    })
    currentObserver = observer
  }

  subscribeObserver()

  window.addEventListener('resize', debounce(subscribeObserver, 300))
}
