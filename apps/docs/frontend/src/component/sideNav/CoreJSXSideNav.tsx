import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const CoreJSXSideNav = () => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.coreJSX.overview.items.gettingStarted')}
            href={`/${language()}/core-jsx/overview/gettingStarted`}
            isActive={pathname() === '/core-jsx/overview/gettingStarted'}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJSX.overview.items.benchmark')}
            href={`/${language()}/core-jsx/overview/benchmark`}
            isActive={pathname() === '/core-jsx/overview/benchmark'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.render.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="element"
            href={`/${language()}/core-jsx/render/element`}
            isActive={pathname() === '/core-jsx/render/element'}
          />
          <SideNavMenuItem
            text="root"
            href={`/${language()}/core-jsx/render/root`}
            isActive={pathname() === '/core-jsx/render/root'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.component.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="For"
            href={`/${language()}/core-jsx/component/for`}
            isActive={pathname() === '/core-jsx/component/for'}
          />
          <SideNavMenuItem
            text="Switch / Case"
            href={`/${language()}/core-jsx/component/switchCase`}
            isActive={pathname() === '/core-jsx/component/switchCase'}
          />
          <SideNavMenuItem
            text="Toggle"
            href={`/${language()}/core-jsx/component/toggle`}
            isActive={pathname() === '/core-jsx/component/toggle'}
          />
          <SideNavMenuItem
            text="Refresh"
            href={`/${language()}/core-jsx/component/refresh`}
            isActive={pathname() === '/core-jsx/component/refresh'}
          />
          <SideNavMenuItem
            text="Tag"
            href={`/${language()}/core-jsx/component/tag`}
            isActive={pathname() === '/core-jsx/component/tag'}
          />
          <SideNavMenuItem
            text="Defined"
            href={`/${language()}/core-jsx/component/defined`}
            isActive={pathname() === '/core-jsx/component/defined'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.reactive.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="useState"
            href={`/${language()}/core-jsx/reactive/useState`}
            isActive={pathname() === '/core-jsx/reactive/useState'}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href={`/${language()}/core-jsx/reactive/useGlobalState`}
            isActive={pathname() === '/core-jsx/reactive/useGlobalState'}
          />
          <SideNavMenuItem
            text="useEffect"
            href={`/${language()}/core-jsx/reactive/useEffect`}
            isActive={pathname() === '/core-jsx/reactive/useEffect'}
          />
          <SideNavMenuItem
            text="useElement"
            href={`/${language()}/core-jsx/reactive/useElement`}
            isActive={pathname() === '/core-jsx/reactive/useElement'}
          />
          <SideNavMenuItem
            text="createContext"
            href={`/${language()}/core-jsx/reactive/createContext`}
            isActive={pathname() === '/core-jsx/reactive/createContext'}
          />
          <SideNavMenuItem
            text="onMount"
            href={`/${language()}/core-jsx/reactive/onMount`}
            isActive={pathname() === '/core-jsx/reactive/onMount'}
          />
          <SideNavMenuItem
            text="onDestroy"
            href={`/${language()}/core-jsx/reactive/onDestroy`}
            isActive={pathname() === '/core-jsx/reactive/onDestroy'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.router.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Router"
            href={`/${language()}/core-jsx/router/router`}
            isActive={pathname() === '/core-jsx/router/router'}
          />
          <SideNavMenuItem
            text="Route"
            href={`/${language()}/core-jsx/router/route`}
            isActive={pathname() === '/core-jsx/router/route'}
          />
          <SideNavMenuItem
            text="useNavigate"
            href={`/${language()}/core-jsx/router/useNavigate`}
            isActive={pathname() === '/core-jsx/router/useNavigate'}
          />
          <SideNavMenuItem
            text="useOutlet"
            href={`/${language()}/core-jsx/router/useOutlet`}
            isActive={pathname() === '/core-jsx/router/useOutlet'}
          />
          <SideNavMenuItem
            text="usePathname"
            href={`/${language()}/core-jsx/router/usePathname`}
            isActive={pathname() === '/core-jsx/router/usePathname'}
          />
          <SideNavMenuItem
            text="usePathParams"
            href={`/${language()}/core-jsx/router/usePathParams`}
            isActive={pathname() === '/core-jsx/router/usePathParams'}
          />
          <SideNavMenuItem
            text="useQueryParams"
            href={`/${language()}/core-jsx/router/useQueryParams`}
            isActive={pathname() === '/core-jsx/router/useQueryParams'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.util.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="defineProps"
            href={`/${language()}/core-jsx/util/defineProps`}
            isActive={pathname() === '/core-jsx/util/defineProps'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSXSideNav
