import { onMount, useEffect, usePathname, useState } from '@rvjs/core'
import {
  isInBlogPage,
  isInCoreJSPage,
  isInCoreJSXPage,
  isInIsJSPage,
  isInLocalizerPage,
  isInUIJSPage,
  isInUIJSXPage,
} from '@util/path.ts'

export const usePageCategory = () => {
  const pathname = usePathname()
  const [pageCategory, setPageCategory] = useState<
    | 'CORE_JSX'
    | 'CORE_JS'
    | 'UI_JSX'
    | 'UI_JS'
    | 'IS_JS'
    | 'LOCALIZER'
    | 'BLOG'
    | null
  >(null)

  const setPageCategoryByPathname = (pathname: string) => {
    if (isInCoreJSXPage(pathname)) {
      setPageCategory('CORE_JSX')
    } else if (isInCoreJSPage(pathname)) {
      setPageCategory('CORE_JS')
    } else if (isInUIJSXPage(pathname)) {
      setPageCategory('UI_JSX')
    } else if (isInUIJSPage(pathname)) {
      setPageCategory('UI_JS')
    } else if (isInIsJSPage(pathname)) {
      setPageCategory('IS_JS')
    } else if (isInLocalizerPage(pathname)) {
      setPageCategory('LOCALIZER')
    } else if (isInBlogPage(pathname)) {
      setPageCategory('BLOG')
    } else {
      setPageCategory(null)
    }
  }

  onMount(() => {
    setPageCategoryByPathname(pathname())
  })

  useEffect(() => {
    setPageCategoryByPathname(pathname())
  }, [pathname])

  return pageCategory
}
