import { getContent } from '@page/contentSuspense/ContentSuspense.util.ts'
import {
  GetState,
  useEffect,
  useElement,
  usePathname,
  useState,
} from '@rvjs/core'

type Status = 'LOADING' | 'LOADED' | 'ERROR'

export const useContentSuspense = () => {
  const [status, setStatus] = useState<Status>('LOADING')
  const [content, setContent] = useState(null)
  const pathname = usePathname()

  ;(async () => {
    try {
      const { content } = await getContent(`${pathname()}.json`)
      setContent(content)
      setStatus('LOADED')
    } catch {
      setStatus('ERROR')
    }
  })()

  window.scrollTo({
    top: 0,
  })

  return { status, content }
}

export interface HeadingContext {
  section: HTMLElement
  heading: HTMLElement
}

export const useContentHeading = (status: GetState<Status>) => {
  const wrapperElement = useElement<HTMLElement>()
  const [headingContexts, setHeadingContexts] = useState<HeadingContext[]>([])

  const findHeadingContext = (element: Element): HeadingContext[] => {
    const sections = [
      ...element.querySelectorAll('h1, section'),
    ] as HTMLElement[]
    const headingContext = sections
      .map((section) => {
        return {
          section,
          heading:
            section.tagName === 'H1'
              ? section
              : (section.querySelector(
                  'h2, h2, h3, h4, h5, h6',
                ) as HTMLElement),
        }
      })
      .filter((context) => context.heading)

    return headingContext
  }

  useEffect(() => {
    if (status() === 'LOADED') {
      setHeadingContexts(findHeadingContext(wrapperElement.current.children[0]))
    }
  }, [status])

  return { wrapperElement, headingContexts }
}
