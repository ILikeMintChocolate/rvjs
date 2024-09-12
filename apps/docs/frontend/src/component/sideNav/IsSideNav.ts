import { prop, usePathname } from '@rvjs/core'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@rvjs/ui'

const IsSideNav = () => {
  const pathname = usePathname()

  return SideNav({
    children: [
      SideNavItems({
        children: [
          SideNavLink({
            text: prop(() => 'Getting Started'),
            href: prop(() => '/is/gettingStarted'),
            isActive: prop(() => pathname() === '/is/gettingStarted'),
          }),
          SideNavMenu({
            menuName: prop(() => 'Type'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'primitive'),
                href: prop(() => '/is/type/primitive'),
                isActive: prop(() => pathname() === '/is/type/primitive'),
              }),
              SideNavMenuItem({
                text: prop(() => 'reference'),
                href: prop(() => '/is/type/reference'),
                isActive: prop(() => pathname() === '/is/type/reference'),
              }),
              SideNavMenuItem({
                text: prop(() => 'composite'),
                href: prop(() => '/is/type/composite'),
                isActive: prop(() => pathname() === '/is/type/composite'),
              }),
              SideNavMenuItem({
                text: prop(() => '@rvjs/core'),
                href: prop(() => '/is/type/rvjs-core'),
                isActive: prop(() => pathname() === '/is/type/rvjs-core'),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default IsSideNav
