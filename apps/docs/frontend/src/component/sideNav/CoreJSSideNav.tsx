import { usePathname } from '@rvjs/core'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const CoreJSSideNav = () => {
  const pathname = usePathname()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu menuName="Overview" defaultShow={true}>
          <SideNavMenuItem
            text="Getting Started"
            href="/core-js/overview/gettingStarted"
            isActive={pathname() === '/core-js/overview/gettingStarted'}
          />
          <SideNavMenuItem
            text="Guide"
            href="/core-js/overview/guide"
            isActive={pathname() === '/core-js/overview/guide'}
          />
          <SideNavMenuItem
            text="Benchmark"
            href="/core-js/overview/benchmark"
            isActive={pathname() === '/core-js/overview/benchmark'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="DOM" defaultShow={true}>
          <SideNavMenuItem
            text="element"
            href="/core-js/dom/element"
            isActive={pathname() === '/core-js/dom/element'}
          />
          <SideNavMenuItem
            text="component"
            href="/core-js/dom/component"
            isActive={pathname() === '/core-js/dom/component'}
          />
          <SideNavMenuItem
            text="root"
            href="/core-js/dom/root"
            isActive={pathname() === '/core-js/dom/root'}
          />
          <SideNavMenuItem
            text="textNode"
            href="/core-js/dom/textNode"
            isActive={pathname() === '/core-js/dom/textNode'}
          />
          <SideNavMenuItem
            text="For"
            href="/core-js/dom/for"
            isActive={pathname() === '/core-js/dom/for'}
          />
          <SideNavMenuItem
            text="Switch"
            href="/core-js/dom/switch"
            isActive={pathname() === '/core-js/dom/switch'}
          />
          <SideNavMenuItem
            text="Toggle"
            href="/core-js/dom/toggle"
            isActive={pathname() === '/core-js/dom/toggle'}
          />
          <SideNavMenuItem
            text="Suspense"
            href="/core-js/dom/suspense"
            isActive={pathname() === '/core-js/dom/suspense'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Reactive" defaultShow={true}>
          <SideNavMenuItem
            text="useState"
            href="/core-js/reactive/useState"
            isActive={pathname() === '/core-js/reactive/useState'}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href="/core-js/reactive/useGlobalState"
            isActive={pathname() === '/core-js/reactive/useGlobalState'}
          />
          <SideNavMenuItem
            text="useEffect"
            href="/core-js/reactive/useEffect"
            isActive={pathname() === '/core-js/reactive/useEffect'}
          />
          <SideNavMenuItem
            text="useRef"
            href="/core-js/reactive/useRef"
            isActive={pathname() === '/core-js/reactive/useRef'}
          />
          <SideNavMenuItem
            text="useElement"
            href="/core-js/reactive/useElement"
            isActive={pathname() === '/core-js/reactive/useElement'}
          />
          <SideNavMenuItem
            text="dynamic"
            href="/core-js/reactive/dynamic"
            isActive={pathname() === '/core-js/reactive/dynamic'}
          />
          <SideNavMenuItem
            text="prop"
            href="/core-js/reactive/prop"
            isActive={pathname() === '/core-js/reactive/prop'}
          />
          <SideNavMenuItem
            text="createContext"
            href="/core-js/reactive/createContext"
            isActive={pathname() === '/core-js/reactive/createContext'}
          />
          <SideNavMenuItem
            text="onMount"
            href="/core-js/reactive/onMount"
            isActive={pathname() === '/core-js/reactive/onMount'}
          />
          <SideNavMenuItem
            text="onDestroy"
            href="/core-js/reactive/onDestroy"
            isActive={pathname() === '/core-js/reactive/onDestroy'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Router" defaultShow={true}>
          <SideNavMenuItem
            text="Router"
            href="/core-js/router/router"
            isActive={pathname() === '/core-js/router/router'}
          />
          <SideNavMenuItem
            text="useNavigate"
            href="/core-js/router/useNavigate"
            isActive={pathname() === '/core-js/router/useNavigate'}
          />
          <SideNavMenuItem
            text="useOutlet"
            href="/core-js/router/useOutlet"
            isActive={pathname() === '/core-js/router/useOutlet'}
          />
          <SideNavMenuItem
            text="usePathname"
            href="/core-js/router/usePathname"
            isActive={pathname() === '/core-js/router/usePathname'}
          />
          <SideNavMenuItem
            text="usePathEffect"
            href="/core-js/router/usePathEffect"
            isActive={pathname() === '/core-js/router/usePathEffect'}
          />
          <SideNavMenuItem
            text="usePathParams"
            href="/core-js/router/usePathParams"
            isActive={pathname() === '/core-js/router/usePathParams'}
          />
          <SideNavMenuItem
            text="useQueryParams"
            href="/core-js/router/useQueryParams"
            isActive={pathname() === '/core-js/router/useQueryParams'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSSideNav
