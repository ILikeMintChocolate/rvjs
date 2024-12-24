import { usePathname } from '@rvjs/core'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const IsJSSideNav = () => {
  const pathname = usePathname()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu menuName="Overview" defaultShow={true}>
          <SideNavMenuItem
            text="Getting Started"
            href="/is-js/overview/gettingStarted"
            isActive={pathname() === '/is-js/overview/gettingStarted'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Type" defaultShow={true}>
          <SideNavMenuItem
            text="primitive"
            href="/is-js/type/primitive"
            isActive={pathname() === '/is-js/type/primitive'}
          />
          <SideNavMenuItem
            text="reference"
            href="/is-js/type/reference"
            isActive={pathname() === '/is-js/type/reference'}
          />
          <SideNavMenuItem
            text="composite"
            href="/is-js/type/composite"
            isActive={pathname() === '/is-js/type/composite'}
          />
          <SideNavMenuItem
            text="@rvjs/core"
            href="/is-js/type/rvjs-core"
            isActive={pathname() === '/is-js/type/rvjs-core'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default IsJSSideNav
