import { prop } from '@rvjs/core/reactive'
import { usePathname } from '@rvjs/core/router'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@rvjs/ui/shell'

const UISideNav = () => {
  const pathname = usePathname()

  return SideNav({
    children: [
      SideNavItems({
        children: [
          SideNavLink({
            text: prop(() => 'Getting Started'),
            href: prop(() => '/ui/getting-started'),
            isActive: prop(() => pathname() === '/ui/getting-started'),
          }),
          SideNavMenu({
            menuName: prop(() => 'Layout'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Box'),
                href: prop(() => '/ui/layout/box'),
                isActive: prop(() => pathname() === '/ui/layout/box'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Flex'),
                href: prop(() => '/ui/layout/flex'),
                isActive: prop(() => pathname() === '/ui/layout/flex'),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default UISideNav
