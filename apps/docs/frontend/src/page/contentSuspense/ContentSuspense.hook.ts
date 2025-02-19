import { getContentFromServer } from '@page/contentSuspense/ContentSuspense.util.ts'
import {
  GetState,
  onMount,
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

  const getContent = async () => {
    setStatus('LOADING')
    try {
      const { content } = await getContentFromServer(`${pathname()}.json`)
      setContent(content)
      setStatus('LOADED')
    } catch {
      setStatus('ERROR')
    }
  }

  onMount(() => {
    getContent()
  })

  useEffect(() => {
    getContent()
  }, [pathname])

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
  const wrapperElement = useElement<HTMLDivElement>()
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
    } else {
      setHeadingContexts([])
    }
  }, [status])

  return { wrapperElement, headingContexts }
}

export const useContentSuspenseScroll = (status: GetState<Status>) => {
  useEffect(() => {
    if (status() === 'LOADED') {
      window.scrollTo({
        top: 0,
      })
    }
  }, [status])
}
