import CoreJSSideNav from '@component/sideNav/CoreJSSideNav.tsx'
import CoreJSXSideNav from '@component/sideNav/CoreJSXSideNav.tsx'
import IsJSSideNav from '@component/sideNav/IsJSSideNav.tsx'
import UIJSSideNav from '@component/sideNav/UIJSSideNav.tsx'
import UIJSXSideNav from '@component/sideNav/UIJSXSideNav.tsx'
import { t } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu } from '@rvjs/ui'

const MobileSideNav = () => {
  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.menuName')}
          defaultShow={false}
        >
          <CoreJSXSideNav depth={1} />
        </SideNavMenu>
        <SideNavMenu menuName={t('sideNav.uiJSX.menuName')} defaultShow={false}>
          <UIJSXSideNav depth={1} />
        </SideNavMenu>
        <SideNavMenu menuName={t('header.items.legacy')} defaultShow={false}>
          <SideNavMenu
            menuName={t('sideNav.coreJS.menuName')}
            defaultShow={false}
            depth={1}
          >
            <CoreJSSideNav depth={2} />
          </SideNavMenu>
          <SideNavMenu
            menuName={t('sideNav.uiJS.menuName')}
            defaultShow={false}
            depth={1}
          >
            <UIJSSideNav depth={2} />
          </SideNavMenu>
          <SideNavMenu
            menuName={t('sideNav.isJS.menuName')}
            defaultShow={false}
            depth={1}
          >
            <IsJSSideNav depth={2} />
          </SideNavMenu>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default MobileSideNav
