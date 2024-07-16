import IsSideNav from '@layout/sideNav/IsSideNav.ts'
import { Switch } from '@rvjs/core/dom'
import { useEffect, useState } from '@rvjs/core/reactive'
import { usePathname } from '@rvjs/core/router'
import { isInCorePage, isInIsPage, isInUIPage } from '@util/path.ts'
import CoreSideNav from './CoreSideNav.ts'
import UISideNav from './UISideNav.ts'

const MainSideNav = () => {
  const pathname = usePathname()
  const [pageCategory, setPageCategory] = useState('core')

  useEffect(() => {
    if (isInCorePage(pathname())) {
      setPageCategory('core')
    } else if (isInUIPage(pathname())) {
      setPageCategory('ui')
    } else if (isInIsPage(pathname())) {
      setPageCategory('is')
    } else {
      setPageCategory('home')
    }
  }, [pathname])

  return Switch(pageCategory, () => {
    if (pageCategory() === 'core') {
      return CoreSideNav()
    } else if (pageCategory() === 'ui') {
      return UISideNav()
    } else if (pageCategory() === 'is') {
      return IsSideNav()
    }
    return null
  })
}

export default MainSideNav
