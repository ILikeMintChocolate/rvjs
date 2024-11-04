import { prop, usePathname } from '@rvjs/core'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from '@rvjs/ui'

const CoreV02xSideNav = () => {
  const pathname = usePathname()

  return SideNav({
    children: [
      SideNavItems({
        children: [
          SideNavLink({
            text: prop(() => 'Getting Started'),
            href: prop(() => '/core-v0.2.x/gettingStarted'),
            isActive: prop(() => pathname() === '/core-v0.2.x/gettingStarted'),
          }),
          SideNavLink({
            text: prop(() => 'Benchmark'),
            href: prop(() => '/core-v0.2.x/benchmark'),
            isActive: prop(() => pathname() === '/core-v0.2.x/benchmark'),
          }),
          SideNavMenu({
            menuName: prop(() => 'DOM'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'element'),
                href: prop(() => '/core-v0.2.x/dom/element'),
                isActive: prop(() => pathname() === '/core-v0.2.x/dom/element'),
              }),
              SideNavMenuItem({
                text: prop(() => 'component'),
                href: prop(() => '/core-v0.2.x/dom/component'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/dom/component',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'root'),
                href: prop(() => '/core-v0.2.x/dom/root'),
                isActive: prop(() => pathname() === '/core-v0.2.x/dom/root'),
              }),
              SideNavMenuItem({
                text: prop(() => 'textNode'),
                href: prop(() => '/core-v0.2.x/dom/textNode'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/dom/textNode',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'For'),
                href: prop(() => '/core-v0.2.x/dom/for'),
                isActive: prop(() => pathname() === '/core-v0.2.x/dom/for'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Switch'),
                href: prop(() => '/core-v0.2.x/dom/switch'),
                isActive: prop(() => pathname() === '/core-v0.2.x/dom/switch'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Toggle'),
                href: prop(() => '/core-v0.2.x/dom/toggle'),
                isActive: prop(() => pathname() === '/core-v0.2.x/dom/toggle'),
              }),
              SideNavMenuItem({
                text: prop(() => 'Suspense'),
                href: prop(() => '/core-v0.2.x/dom/suspense'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/dom/suspense',
                ),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Reactive'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'useState'),
                href: prop(() => '/core-v0.2.x/reactive/useState'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/useState',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useGlobalState'),
                href: prop(() => '/core-v0.2.x/reactive/useGlobalState'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/useGlobalState',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useEffect'),
                href: prop(() => '/core-v0.2.x/reactive/useEffect'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/useEffect',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useRef'),
                href: prop(() => '/core-v0.2.x/reactive/useRef'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/useRef',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useElement'),
                href: prop(() => '/core-v0.2.x/reactive/useElement'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/useElement',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'dynamic'),
                href: prop(() => '/core-v0.2.x/reactive/dynamic'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/dynamic',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'prop'),
                href: prop(() => '/core-v0.2.x/reactive/prop'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/prop',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'createContext'),
                href: prop(() => '/core-v0.2.x/reactive/createContext'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/createContext',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'onMount'),
                href: prop(() => '/core-v0.2.x/reactive/onMount'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/onMount',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'onDestroy'),
                href: prop(() => '/core-v0.2.x/reactive/onDestroy'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/reactive/onDestroy',
                ),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Router'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'Router'),
                href: prop(() => '/core-v0.2.x/router/router'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/router',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useNavigate'),
                href: prop(() => '/core-v0.2.x/router/useNavigate'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/useNavigate',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useOutlet'),
                href: prop(() => '/core-v0.2.x/router/useOutlet'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/useOutlet',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'usePathname'),
                href: prop(() => '/core-v0.2.x/router/usePathname'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/usePathname',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'usePathEffect'),
                href: prop(() => '/core-v0.2.x/router/usePathEffect'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/usePathEffect',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'usePathParams'),
                href: prop(() => '/core-v0.2.x/router/usePathParams'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/usePathParams',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useQueryParams'),
                href: prop(() => '/core-v0.2.x/router/useQueryParams'),
                isActive: prop(
                  () => pathname() === '/core-v0.2.x/router/useQueryParams',
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default CoreV02xSideNav
