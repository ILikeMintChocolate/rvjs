import CoreV02xSideNav from '@component/sideNav/CoreV02xSideNav.ts'
import CoreV03xSideNav from '@component/sideNav/CoreV03xSideNav.ts'
import IsSideNav from '@component/sideNav/IsSideNav.ts'
import { usePageCategory } from '@component/sideNav/SideNav.hook.ts'
import UISideNav from '@component/sideNav/UISideNav.ts'
import { component, Switch } from '@rvjs/core'

const MainSideNav = component(() => {
  const pageCategory = usePageCategory()

  return Switch(pageCategory, () => {
    if (pageCategory() === 'CORE_V03X') {
      return CoreV03xSideNav()
    } else if (pageCategory() === 'CORE_V02X') {
      return CoreV02xSideNav()
    } else if (pageCategory() === 'UI') {
      return UISideNav()
    } else if (pageCategory() === 'IS') {
      return IsSideNav()
    }
    return null
  })
})

export default MainSideNav
