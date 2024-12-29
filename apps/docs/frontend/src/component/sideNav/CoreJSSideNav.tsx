import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const CoreJSSideNav = () => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.coreJS.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.gettingStarted')}
            href={`/${language()}/core-js/overview/gettingStarted`}
            isActive={pathname() === '/core-js/overview/gettingStarted'}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.guide')}
            href={`/${language()}/core-js/overview/guide`}
            isActive={pathname() === '/core-js/overview/guide'}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.benchmark')}
            href={`/${language()}/core-js/overview/benchmark`}
            isActive={pathname() === '/core-js/overview/benchmark'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.render.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="element"
            href={`/${language()}/core-js/dom/element`}
            isActive={pathname() === '/core-js/dom/element'}
          />
          <SideNavMenuItem
            text="component"
            href={`/${language()}/core-js/dom/component`}
            isActive={pathname() === '/core-js/dom/component'}
          />
          <SideNavMenuItem
            text="root"
            href={`/${language()}/core-js/dom/root`}
            isActive={pathname() === '/core-js/dom/root'}
          />
          <SideNavMenuItem
            text="textNode"
            href={`/${language()}/core-js/dom/textNode`}
            isActive={pathname() === '/core-js/dom/textNode'}
          />
          <SideNavMenuItem
            text="For"
            href={`/${language()}/core-js/dom/for`}
            isActive={pathname() === '/core-js/dom/for'}
          />
          <SideNavMenuItem
            text="Switch"
            href={`/${language()}/core-js/dom/switch`}
            isActive={pathname() === '/core-js/dom/switch'}
          />
          <SideNavMenuItem
            text="Toggle"
            href={`/${language()}/core-js/dom/toggle`}
            isActive={pathname() === '/core-js/dom/toggle'}
          />
          <SideNavMenuItem
            text="Suspense"
            href={`/${language()}/core-js/dom/suspense`}
            isActive={pathname() === '/core-js/dom/suspense'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.reactive.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="useState"
            href={`/${language()}/core-js/reactive/useState`}
            isActive={pathname() === '/core-js/reactive/useState'}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href={`/${language()}/core-js/reactive/useGlobalState`}
            isActive={pathname() === '/core-js/reactive/useGlobalState'}
          />
          <SideNavMenuItem
            text="useEffect"
            href={`/${language()}/core-js/reactive/useEffect`}
            isActive={pathname() === '/core-js/reactive/useEffect'}
          />
          <SideNavMenuItem
            text="useRef"
            href={`/${language()}/core-js/reactive/useRef`}
            isActive={pathname() === '/core-js/reactive/useRef'}
          />
          <SideNavMenuItem
            text="useElement"
            href={`/${language()}/core-js/reactive/useElement`}
            isActive={pathname() === '/core-js/reactive/useElement'}
          />
          <SideNavMenuItem
            text="dynamic"
            href={`/${language()}/core-js/reactive/dynamic`}
            isActive={pathname() === '/core-js/reactive/dynamic'}
          />
          <SideNavMenuItem
            text="prop"
            href={`/${language()}/core-js/reactive/prop`}
            isActive={pathname() === '/core-js/reactive/prop'}
          />
          <SideNavMenuItem
            text="createContext"
            href={`/${language()}/core-js/reactive/createContext`}
            isActive={pathname() === '/core-js/reactive/createContext'}
          />
          <SideNavMenuItem
            text="onMount"
            href={`/${language()}/core-js/reactive/onMount`}
            isActive={pathname() === '/core-js/reactive/onMount'}
          />
          <SideNavMenuItem
            text="onDestroy"
            href={`/${language()}/core-js/reactive/onDestroy`}
            isActive={pathname() === '/core-js/reactive/onDestroy'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.router.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Router"
            href={`/${language()}/core-js/router/router`}
            isActive={pathname() === '/core-js/router/router'}
          />
          <SideNavMenuItem
            text="useNavigate"
            href={`/${language()}/core-js/router/useNavigate`}
            isActive={pathname() === '/core-js/router/useNavigate'}
          />
          <SideNavMenuItem
            text="useOutlet"
            href={`/${language()}/core-js/router/useOutlet`}
            isActive={pathname() === '/core-js/router/useOutlet'}
          />
          <SideNavMenuItem
            text="usePathname"
            href={`/${language()}/core-js/router/usePathname`}
            isActive={pathname() === '/core-js/router/usePathname'}
          />
          <SideNavMenuItem
            text="usePathEffect"
            href={`/${language()}/core-js/router/usePathEffect`}
            isActive={pathname() === '/core-js/router/usePathEffect'}
          />
          <SideNavMenuItem
            text="usePathParams"
            href={`/${language()}/core-js/router/usePathParams`}
            isActive={pathname() === '/core-js/router/usePathParams'}
          />
          <SideNavMenuItem
            text="useQueryParams"
            href={`/${language()}/core-js/router/useQueryParams`}
            isActive={pathname() === '/core-js/router/useQueryParams'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSSideNav
