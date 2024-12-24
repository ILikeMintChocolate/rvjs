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

export const useContentHeading = (status: GetState<Status>) => {
  const wrapperElement = useElement<HTMLElement>()
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])

  const findHeading = (element: Element) => {
    return [
      ...element.querySelectorAll('h1, h2, h3, h4, h5, h6'),
    ] as HTMLHeadingElement[]
  }

  useEffect(() => {
    if (status() === 'LOADED') {
      setTimeout(() => {
        setHeadings(findHeading(wrapperElement.current.children[0]))
      }, 0)
    }
  }, [status])

  return { wrapperElement, headings }
}
