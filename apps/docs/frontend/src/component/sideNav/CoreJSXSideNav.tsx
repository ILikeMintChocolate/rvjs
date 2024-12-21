import { usePathname } from '@rvjs/core'
import { getLocale, t } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const CoreJSXSideNav = () => {
  const pathname = usePathname()
  const locale = getLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.coreJSX.overview.items.gettingStarted')}
            href={`/${locale()}/core-jsx/overview/gettingStarted`}
            isActive={pathname() === '/core-jsx/overview/gettingStarted'}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJSX.overview.items.benchmark')}
            href={`/${locale()}/core-jsx/overview/benchmark`}
            isActive={pathname() === '/core-jsx/overview/benchmark'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.render.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="element"
            href={`/${locale()}/core-jsx/render/element`}
            isActive={pathname() === '/core-jsx/render/element'}
          />
          <SideNavMenuItem
            text="root"
            href={`/${locale()}/core-jsx/render/root`}
            isActive={pathname() === '/core-jsx/render/root'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.component.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="For"
            href={`/${locale()}/core-jsx/component/for`}
            isActive={pathname() === '/core-jsx/component/for'}
          />
          <SideNavMenuItem
            text="Switch / Case"
            href={`/${locale()}/core-jsx/component/switchCase`}
            isActive={pathname() === '/core-jsx/component/switchCase'}
          />
          <SideNavMenuItem
            text="Toggle"
            href={`/${locale()}/core-jsx/component/toggle`}
            isActive={pathname() === '/core-jsx/component/toggle'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.reactive.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="useState"
            href={`/${locale()}/core-jsx/reactive/useState`}
            isActive={pathname() === '/core-jsx/reactive/useState'}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href={`/${locale()}/core-jsx/reactive/useGlobalState`}
            isActive={pathname() === '/core-jsx/reactive/useGlobalState'}
          />
          <SideNavMenuItem
            text="useEffect"
            href={`/${locale()}/core-jsx/reactive/useEffect`}
            isActive={pathname() === '/core-jsx/reactive/useEffect'}
          />
          <SideNavMenuItem
            text="useElement"
            href={`/${locale()}/core-jsx/reactive/useElement`}
            isActive={pathname() === '/core-jsx/reactive/useElement'}
          />
          <SideNavMenuItem
            text="createContext"
            href={`/${locale()}/core-jsx/reactive/createContext`}
            isActive={pathname() === '/core-jsx/reactive/createContext'}
          />
          <SideNavMenuItem
            text="onMount"
            href={`/${locale()}/core-jsx/reactive/onMount`}
            isActive={pathname() === '/core-jsx/reactive/onMount'}
          />
          <SideNavMenuItem
            text="onDestroy"
            href={`/${locale()}/core-jsx/reactive/onDestroy`}
            isActive={pathname() === '/core-jsx/reactive/onDestroy'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSXSideNav
