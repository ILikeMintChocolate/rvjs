import { prop, usePathname } from '@rvjs/core'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@rvjs/ui'

const UISideNav = () => {
  const pathname = usePathname()

  return SideNav({
    children: [
      SideNavItems({
        children: [
          SideNavLink({
            text: prop(() => 'Getting Started'),
            href: prop(() => '/ui/gettingStarted'),
            isActive: prop(() => pathname() === '/ui/gettingStarted'),
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
              SideNavMenuItem({
                text: prop(() => 'Grid'),
                href: prop(() => '/ui/layout/grid'),
                isActive: prop(() => pathname() === '/ui/layout/grid'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Section'),
                href: prop(() => '/ui/layout/section'),
                isActive: prop(() => pathname() === '/ui/layout/section'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Form'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Button'),
                href: prop(() => '/ui/form/button'),
                isActive: prop(() => pathname() === '/ui/form/button'),
              }),
              SideNavMenuItem({
                text: prop(() => 'TextInput'),
                href: prop(() => '/ui/form/textInput'),
                isActive: prop(() => pathname() === '/ui/form/textInput'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Typography'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Text'),
                href: prop(() => '/ui/typography/text'),
                isActive: prop(() => pathname() === '/ui/typography/text'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Highlight'),
                href: prop(() => '/ui/typography/highlight'),
                isActive: prop(() => pathname() === '/ui/typography/highlight'),
              }),
              SideNavMenuItem({
                text: prop(() => 'CodeSnippet'),
                href: prop(() => '/ui/typography/codeSnippet'),
                isActive: prop(
                  () => pathname() === '/ui/typography/codeSnippet',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'Link'),
                href: prop(() => '/ui/typography/link'),
                isActive: prop(() => pathname() === '/ui/typography/link'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Content'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Icon'),
                href: prop(() => '/ui/content/icon'),
                isActive: prop(() => pathname() === '/ui/content/icon'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Iframe'),
                href: prop(() => '/ui/content/iframe'),
                isActive: prop(() => pathname() === '/ui/content/iframe'),
              }),
              SideNavMenuItem({
                text: prop(() => 'OrderedList'),
                href: prop(() => '/ui/content/orderedList'),
                isActive: prop(() => pathname() === '/ui/content/orderedList'),
              }),
              SideNavMenuItem({
                text: prop(() => 'UnorderedList'),
                href: prop(() => '/ui/content/unorderedList'),
                isActive: prop(
                  () => pathname() === '/ui/content/unorderedList',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'ListItem'),
                href: prop(() => '/ui/content/listItem'),
                isActive: prop(() => pathname() === '/ui/content/listItem'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Shell'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'App'),
                href: prop(() => '/ui/shell/app'),
                isActive: prop(() => pathname() === '/ui/shell/app'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Body'),
                href: prop(() => '/ui/shell/body'),
                isActive: prop(() => pathname() === '/ui/shell/body'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Header'),
                href: prop(() => '/ui/shell/header'),
                isActive: prop(() => pathname() === '/ui/shell/header'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderGlobalAction'),
                href: prop(() => '/ui/shell/headerGlobalAction'),
                isActive: prop(
                  () => pathname() === '/ui/shell/headerGlobalAction',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderGlobalBar'),
                href: prop(() => '/ui/shell/headerGlobalBar'),
                isActive: prop(
                  () => pathname() === '/ui/shell/headerGlobalBar',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderHr'),
                href: prop(() => '/ui/shell/headerHr'),
                isActive: prop(() => pathname() === '/ui/shell/headerHr'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderMenuButton'),
                href: prop(() => '/ui/shell/headerMenuButton'),
                isActive: prop(
                  () => pathname() === '/ui/shell/headerMenuButton',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderMenuItem'),
                href: prop(() => '/ui/shell/headerMenuItem'),
                isActive: prop(() => pathname() === '/ui/shell/headerMenuItem'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderName'),
                href: prop(() => '/ui/shell/headerName'),
                isActive: prop(() => pathname() === '/ui/shell/headerName'),
              }),
              SideNavMenuItem({
                text: prop(() => 'HeaderNavigation'),
                href: prop(() => '/ui/shell/headerNavigation'),
                isActive: prop(
                  () => pathname() === '/ui/shell/headerNavigation',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'SubMenu'),
                href: prop(() => '/ui/shell/subMenu'),
                isActive: prop(() => pathname() === '/ui/shell/subMenu'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SubMenuItem'),
                href: prop(() => '/ui/shell/subMenuItem'),
                isActive: prop(() => pathname() === '/ui/shell/subMenuItem'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNav'),
                href: prop(() => '/ui/shell/sideNav'),
                isActive: prop(() => pathname() === '/ui/shell/sideNav'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavItems'),
                href: prop(() => '/ui/shell/sideNavItems'),
                isActive: prop(() => pathname() === '/ui/shell/sideNavItems'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavLink'),
                href: prop(() => '/ui/shell/sideNavLink'),
                isActive: prop(() => pathname() === '/ui/shell/sideNavLink'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavMenu'),
                href: prop(() => '/ui/shell/sideNavMenu'),
                isActive: prop(() => pathname() === '/ui/shell/sideNavMenu'),
              }),
              SideNavMenuItem({
                text: prop(() => 'SideNavMenuItem'),
                href: prop(() => '/ui/shell/sideNavMenuItem'),
                isActive: prop(
                  () => pathname() === '/ui/shell/sideNavMenuItem',
                ),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Overlay'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Tooltip'),
                href: prop(() => '/ui/overlay/tooltip'),
                isActive: prop(() => pathname() === '/ui/overlay/tooltip'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Util'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'renderComponentFromJSON'),
                href: prop(() => '/ui/util/renderComponentFromJSON'),
                isActive: prop(
                  () => pathname() === '/ui/util/renderComponentFromJSON',
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default UISideNav
