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
            href: prop(() => '/core-v0.3.x/gettingStarted'),
            isActive: prop(() => pathname() === '/core-v0.3.x/gettingStarted'),
          }),
          SideNavLink({
            text: prop(() => 'Benchmark'),
            href: prop(() => '/core-v0.3.x/benchmark'),
            isActive: prop(() => pathname() === '/core-v0.3.x/benchmark'),
          }),
          SideNavMenu({
            menuName: prop(() => 'Render'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'element'),
                href: prop(() => '/core-v0.3.x/render/element'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/render/element',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'root'),
                href: prop(() => '/core-v0.3.x/render/root'),
                isActive: prop(() => pathname() === '/core-v0.3.x/render/root'),
              }),
            ],
          }),
          SideNavMenu({
            menuName: prop(() => 'Component'),
            defaultShow: prop(() => true),
            children: [
              SideNavMenuItem({
                text: prop(() => 'For'),
                href: prop(() => '/core-v0.3.x/component/for'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/component/for',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'Switch'),
                href: prop(() => '/core-v0.3.x/component/switch'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/component/switch',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'Case'),
                href: prop(() => '/core-v0.3.x/component/case'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/component/case',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'Toggle'),
                href: prop(() => '/core-v0.3.x/component/toggle'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/component/toggle',
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
                href: prop(() => '/core-v0.3.x/reactive/useState'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/useState',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useGlobalState'),
                href: prop(() => '/core-v0.3.x/reactive/useGlobalState'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/useGlobalState',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useEffect'),
                href: prop(() => '/core-v0.3.x/reactive/useEffect'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/useEffect',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'useElement'),
                href: prop(() => '/core-v0.3.x/reactive/useElement'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/useElement',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'createContext'),
                href: prop(() => '/core-v0.3.x/reactive/createContext'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/createContext',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'onMount'),
                href: prop(() => '/core-v0.3.x/reactive/onMount'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/onMount',
                ),
              }),
              SideNavMenuItem({
                text: prop(() => 'onDestroy'),
                href: prop(() => '/core-v0.3.x/reactive/onDestroy'),
                isActive: prop(
                  () => pathname() === '/core-v0.3.x/reactive/onDestroy',
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
