import CoreJSSideNav from '@component/sideNav/CoreJSSideNav.tsx'
import CoreJSXSideNav from '@component/sideNav/CoreJSXSideNav.tsx'
import IsJSSideNav from '@component/sideNav/IsJSSideNav.tsx'
import MobileSideNav from '@component/sideNav/MobileSideNav.tsx'
import { usePageCategory } from '@component/sideNav/SideNav.hook.ts'
import UIJSSideNav from '@component/sideNav/UIJSSideNav.tsx'
import UIJSXSideNav from '@component/sideNav/UIJSXSideNav.tsx'
import { Refresh } from '@rvjs/core'
import { SideNav, SideNavItems } from '@rvjs/ui'
import { getDeviceType } from '@util/device.ts'

const MainSideNav = () => {
  const pageCategory = usePageCategory()

  if (getDeviceType() === 'mobile') {
    return <MobileSideNav />
  }

  return (
    <SideNav>
      <SideNavItems>
        <Refresh by={pageCategory()}>
          {(() => {
            switch (pageCategory()) {
              case 'CORE_JSX':
                return <CoreJSXSideNav depth={0} />
              case 'CORE_JS':
                return <CoreJSSideNav depth={0} />
              case 'UI_JSX':
                return <UIJSXSideNav depth={0} />
              case 'UI_JS':
                return <UIJSSideNav depth={0} />
              case 'IS_JS':
                return <IsJSSideNav depth={0} />
              default:
                return <></>
            }
          })()}
        </Refresh>
      </SideNavItems>
    </SideNav>
  )
}

export default MainSideNav
