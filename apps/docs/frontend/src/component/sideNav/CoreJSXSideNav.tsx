import { usePathname } from '@rvjs/core'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const CoreJSXSideNav = () => {
  const pathname = usePathname()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu menuName="Overview" defaultShow={true}>
          <SideNavMenuItem
            text="Getting Started"
            href="/core-jsx/overview/gettingStarted"
            isActive={pathname() === '/core-jsx/overview/gettingStarted'}
          />
          <SideNavMenuItem
            text="Benchmark"
            href="/core-jsx/overview/benchmark"
            isActive={pathname() === '/core-jsx/overview/benchmark'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Render" defaultShow={true}>
          <SideNavMenuItem
            text="element"
            href="/core-jsx/render/element"
            isActive={pathname() === '/core-jsx/render/element'}
          />
          <SideNavMenuItem
            text="root"
            href="/core-jsx/render/root"
            isActive={pathname() === '/core-jsx/render/root'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Component" defaultShow={true}>
          <SideNavMenuItem
            text="For"
            href="/core-jsx/component/for"
            isActive={pathname() === '/core-jsx/component/for'}
          />
          <SideNavMenuItem
            text="Switch / Case"
            href="/core-jsx/component/switchCase"
            isActive={pathname() === '/core-jsx/component/switchCase'}
          />
          <SideNavMenuItem
            text="Toggle"
            href="/core-jsx/component/toggle"
            isActive={pathname() === '/core-jsx/component/toggle'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Reactive" defaultShow={true}>
          <SideNavMenuItem
            text="useState"
            href="/core-jsx/reactive/useState"
            isActive={pathname() === '/core-jsx/reactive/useState'}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href="/core-jsx/reactive/useGlobalState"
            isActive={pathname() === '/core-jsx/reactive/useGlobalState'}
          />
          <SideNavMenuItem
            text="useEffect"
            href="/core-jsx/reactive/useEffect"
            isActive={pathname() === '/core-jsx/reactive/useEffect'}
          />
          <SideNavMenuItem
            text="useElement"
            href="/core-jsx/reactive/useElement"
            isActive={pathname() === '/core-jsx/reactive/useElement'}
          />
          <SideNavMenuItem
            text="createContext"
            href="/core-jsx/reactive/createContext"
            isActive={pathname() === '/core-jsx/reactive/createContext'}
          />
          <SideNavMenuItem
            text="onMount"
            href="/core-jsx/reactive/onMount"
            isActive={pathname() === '/core-jsx/reactive/onMount'}
          />
          <SideNavMenuItem
            text="onDestroy"
            href="/core-jsx/reactive/onDestroy"
            isActive={pathname() === '/core-jsx/reactive/onDestroy'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSXSideNav
