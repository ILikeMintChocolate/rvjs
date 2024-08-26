import { prop, usePathname } from '@rvjs/core'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@rvjs/ui'

const CoreSideNav = () => {
  const pathname = usePathname()

  return SideNav({
    children: [
      SideNavItems({
        children: [
          SideNavLink({
            text: prop(() => 'Getting Started'),
            href: prop(() => '/core/getting-started'),
            isActive: prop(() => pathname() === '/core/getting-started'),
          }),
          SideNavMenu({
            menuName: prop(() => 'DOM'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'element'),
                href: prop(() => '/core/dom/element'),
                isActive: prop(() => pathname() === '/core/dom/element'),
              }),
              SideNavMenuItem({
                text: prop(() => 'component'),
                href: prop(() => '/core/dom/component'),
                isActive: prop(() => pathname() === '/core/dom/component'),
              }),
              SideNavMenuItem({
                text: prop(() => 'root'),
                href: prop(() => '/core/dom/root'),
                isActive: prop(() => pathname() === '/core/dom/root'),
              }),
              SideNavMenuItem({
                text: prop(() => 'For'),
                href: prop(() => '/core/dom/for'),
                isActive: prop(() => pathname() === '/core/dom/for'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Switch'),
                href: prop(() => '/core/dom/switch'),
                isActive: prop(() => pathname() === '/core/dom/switch'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Toggle'),
                href: prop(() => '/core/dom/toggle'),
                isActive: prop(() => pathname() === '/core/dom/toggle'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Reactive'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'useState'),
                href: prop(() => '/core/reactive/useState'),
                isActive: prop(() => pathname() === '/core/reactive/useState'),
              }),
              SideNavMenuItem({
                text: prop(() => 'useGlobalState'),
                href: prop(() => '/core/reactive/useGlobalState'),
                isActive: prop(
                  () => pathname() === '/core/reactive/useGlobalState',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useEffect'),
                href: prop(() => '/core/reactive/useEffect'),
                isActive: prop(() => pathname() === '/core/reactive/useEffect'),
              }),
              SideNavMenuItem({
                text: prop(() => 'useElement'),
                href: prop(() => '/core/reactive/useElement'),
                isActive: prop(
                  () => pathname() === '/core/reactive/useElement',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useRef'),
                href: prop(() => '/core/reactive/useRef'),
                isActive: prop(() => pathname() === '/core/reactive/useRef'),
              }),
              SideNavMenuItem({
                text: prop(() => 'onMount'),
                href: prop(() => '/core/reactive/onMount'),
                isActive: prop(() => pathname() === '/core/reactive/onMount'),
              }),
              SideNavMenuItem({
                text: prop(() => 'onDestroy'),
                href: prop(() => '/core/reactive/onDestroy'),
                isActive: prop(() => pathname() === '/core/reactive/onDestroy'),
              }),
              SideNavMenuItem({
                text: prop(() => 'dynamic'),
                href: prop(() => '/core/reactive/dynamic'),
                isActive: prop(() => pathname() === '/core/reactive/dynamic'),
              }),
              SideNavMenuItem({
                text: prop(() => 'prop'),
                href: prop(() => '/core/reactive/prop'),
                isActive: prop(() => pathname() === '/core/reactive/prop'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Router'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Router'),
                href: prop(() => '/core/router/router'),
                isActive: prop(() => pathname() === '/core/router/router'),
              }),
              SideNavMenuItem({
                text: prop(() => 'useNavigate'),
                href: prop(() => '/core/router/useNavigate'),
                isActive: prop(() => pathname() === '/core/router/useNavigate'),
              }),
              SideNavMenuItem({
                text: prop(() => 'useOutlet'),
                href: prop(() => '/core/router/useOutlet'),
                isActive: prop(() => pathname() === '/core/router/useOutlet'),
              }),
              SideNavMenuItem({
                text: prop(() => 'usePathname'),
                href: prop(() => '/core/router/usePathname'),
                isActive: prop(() => pathname() === '/core/router/usePathname'),
              }),
              SideNavMenuItem({
                text: prop(() => 'usePathEffect'),
                href: prop(() => '/core/router/usePathEffect'),
                isActive: prop(
                  () => pathname() === '/core/router/usePathEffect',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'usePathParams'),
                href: prop(() => '/core/router/usePathParams'),
                isActive: prop(
                  () => pathname() === '/core/router/usePathParams',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useQueryParams'),
                href: prop(() => '/core/router/useQueryParams'),
                isActive: prop(
                  () => pathname() === '/core/router/useQueryParams',
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default CoreSideNav
