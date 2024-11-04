import { onMount, useEffect, usePathname, useState } from '@rvjs/core'
import {
  isInCoreV02xPage,
  isInCoreV03xPage,
  isInIsPage,
  isInUIPage,
} from '@util/path.ts'

export const usePageCategory = () => {
  const pathname = usePathname()
  const [pageCategory, setPageCategory] = useState<
    'CORE_V03X' | 'CORE_V02X' | 'UI' | 'IS' | null
  >(null)

  const setPageCategoryByPathname = (pathname: string) => {
    if (isInCoreV03xPage(pathname)) {
      setPageCategory('CORE_V03X')
    } else if (isInCoreV02xPage(pathname)) {
      setPageCategory('CORE_V02X')
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
