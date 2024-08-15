import CoreSideNav from '@component/sideNav/CoreSideNav.ts'
import IsSideNav from '@component/sideNav/IsSideNav.ts'
import { usePageCategory } from '@component/sideNav/SideNav.hook.ts'
import UISideNav from '@component/sideNav/UISideNav.ts'
import { component, Switch } from '@rvjs/core'

const MainSideNav = component(() => {
  const pageCategory = usePageCategory()

  return Switch(pageCategory, () => {
    if (pageCategory() === 'CORE') {
      return CoreSideNav()
    } else if (pageCategory() === 'UI') {
      return UISideNav()
    } else if (pageCategory() === 'IS') {
      return IsSideNav()
    }
    return null
  })
})

export default MainSideNav
