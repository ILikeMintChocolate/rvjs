import { usePathname } from '@rvjs/core'
import { getLocale, t } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const CoreJSSideNav = () => {
  const pathname = usePathname()
  const locale = getLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.coreJS.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.gettingStarted')}
            href={`/${locale()}/core-js/overview/gettingStarted`}
            isActive={pathname() === '/core-js/overview/gettingStarted'}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.guide')}
            href={`/${locale()}/core-js/overview/guide`}
            isActive={pathname() === '/core-js/overview/guide'}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.benchmark')}
            href={`/${locale()}/core-js/overview/benchmark`}
            isActive={pathname() === '/core-js/overview/benchmark'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.render.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="element"
            href={`/${locale()}/core-js/dom/element`}
            isActive={pathname() === '/core-js/dom/element'}
          />
          <SideNavMenuItem
            text="component"
            href={`/${locale()}/core-js/dom/component`}
            isActive={pathname() === '/core-js/dom/component'}
          />
          <SideNavMenuItem
            text="root"
            href={`/${locale()}/core-js/dom/root`}
            isActive={pathname() === '/core-js/dom/root'}
          />
          <SideNavMenuItem
            text="textNode"
            href={`/${locale()}/core-js/dom/textNode`}
            isActive={pathname() === '/core-js/dom/textNode'}
          />
          <SideNavMenuItem
            text="For"
            href={`/${locale()}/core-js/dom/for`}
            isActive={pathname() === '/core-js/dom/for'}
          />
          <SideNavMenuItem
            text="Switch"
            href={`/${locale()}/core-js/dom/switch`}
            isActive={pathname() === '/core-js/dom/switch'}
          />
          <SideNavMenuItem
            text="Toggle"
            href={`/${locale()}/core-js/dom/toggle`}
            isActive={pathname() === '/core-js/dom/toggle'}
          />
          <SideNavMenuItem
            text="Suspense"
            href={`/${locale()}/core-js/dom/suspense`}
            isActive={pathname() === '/core-js/dom/suspense'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.reactive.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="useState"
            href={`/${locale()}/core-js/reactive/useState`}
            isActive={pathname() === '/core-js/reactive/useState'}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href={`/${locale()}/core-js/reactive/useGlobalState`}
            isActive={pathname() === '/core-js/reactive/useGlobalState'}
          />
          <SideNavMenuItem
            text="useEffect"
            href={`/${locale()}/core-js/reactive/useEffect`}
            isActive={pathname() === '/core-js/reactive/useEffect'}
          />
          <SideNavMenuItem
            text="useRef"
            href={`/${locale()}/core-js/reactive/useRef`}
            isActive={pathname() === '/core-js/reactive/useRef'}
          />
          <SideNavMenuItem
            text="useElement"
            href={`/${locale()}/core-js/reactive/useElement`}
            isActive={pathname() === '/core-js/reactive/useElement'}
          />
          <SideNavMenuItem
            text="dynamic"
            href={`/${locale()}/core-js/reactive/dynamic`}
            isActive={pathname() === '/core-js/reactive/dynamic'}
          />
          <SideNavMenuItem
            text="prop"
            href={`/${locale()}/core-js/reactive/prop`}
            isActive={pathname() === '/core-js/reactive/prop'}
          />
          <SideNavMenuItem
            text="createContext"
            href={`/${locale()}/core-js/reactive/createContext`}
            isActive={pathname() === '/core-js/reactive/createContext'}
          />
          <SideNavMenuItem
            text="onMount"
            href={`/${locale()}/core-js/reactive/onMount`}
            isActive={pathname() === '/core-js/reactive/onMount'}
          />
          <SideNavMenuItem
            text="onDestroy"
            href={`/${locale()}/core-js/reactive/onDestroy`}
            isActive={pathname() === '/core-js/reactive/onDestroy'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.router.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Router"
            href={`/${locale()}/core-js/router/router`}
            isActive={pathname() === '/core-js/router/router'}
          />
          <SideNavMenuItem
            text="useNavigate"
            href={`/${locale()}/core-js/router/useNavigate`}
            isActive={pathname() === '/core-js/router/useNavigate'}
          />
          <SideNavMenuItem
            text="useOutlet"
            href={`/${locale()}/core-js/router/useOutlet`}
            isActive={pathname() === '/core-js/router/useOutlet'}
          />
          <SideNavMenuItem
            text="usePathname"
            href={`/${locale()}/core-js/router/usePathname`}
            isActive={pathname() === '/core-js/router/usePathname'}
          />
          <SideNavMenuItem
            text="usePathEffect"
            href={`/${locale()}/core-js/router/usePathEffect`}
            isActive={pathname() === '/core-js/router/usePathEffect'}
          />
          <SideNavMenuItem
            text="usePathParams"
            href={`/${locale()}/core-js/router/usePathParams`}
            isActive={pathname() === '/core-js/router/usePathParams'}
          />
          <SideNavMenuItem
            text="useQueryParams"
            href={`/${locale()}/core-js/router/useQueryParams`}
            isActive={pathname() === '/core-js/router/useQueryParams'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSSideNav
