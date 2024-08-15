import { onMount, useEffect, usePathname, useState } from '@rvjs/core'
import { isInCorePage, isInIsPage, isInUIPage } from '@util/path.ts'

export const usePageCategory = () => {
  const pathname = usePathname()
  const [pageCategory, setPageCategory] = useState<'CORE' | 'UI' | 'IS' | null>(
    null,
  )

  const setPageCategoryByPathname = (pathname: string) => {
    if (isInCorePage(pathname)) {
      setPageCategory('CORE')
    } else if (isInUIPage(pathname)) {
      setPageCategory('UI')
    } else if (isInIsPage(pathname)) {
      setPageCategory('IS')
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
