import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

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
            isActive={isPathIncluded(
              '/core-jsx/overview/gettingStarted',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJSX.overview.items.benchmark')}
            href={`/${language()}/core-jsx/overview/benchmark`}
            isActive={isPathIncluded(
              '/core-jsx/overview/benchmark',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.render.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="element"
            href={`/${language()}/core-jsx/render/element`}
            isActive={isPathIncluded('/core-jsx/render/element', pathname())}
          />
          <SideNavMenuItem
            text="root"
            href={`/${language()}/core-jsx/render/root`}
            isActive={isPathIncluded('/core-jsx/render/root', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.component.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="For"
            href={`/${language()}/core-jsx/component/for`}
            isActive={isPathIncluded('/core-jsx/component/for', pathname())}
          />
          <SideNavMenuItem
            text="Switch / Case"
            href={`/${language()}/core-jsx/component/switchCase`}
            isActive={isPathIncluded(
              '/core-jsx/component/switchCase',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="Toggle"
            href={`/${language()}/core-jsx/component/toggle`}
            isActive={isPathIncluded('/core-jsx/component/toggle', pathname())}
          />
          <SideNavMenuItem
            text="Refresh"
            href={`/${language()}/core-jsx/component/refresh`}
            isActive={isPathIncluded('/core-jsx/component/refresh', pathname())}
          />
          <SideNavMenuItem
            text="Tag"
            href={`/${language()}/core-jsx/component/tag`}
            isActive={isPathIncluded('/core-jsx/component/tag', pathname())}
          />
          <SideNavMenuItem
            text="Defined"
            href={`/${language()}/core-jsx/component/defined`}
            isActive={isPathIncluded('/core-jsx/component/defined', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.reactive.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="useState"
            href={`/${language()}/core-jsx/reactive/useState`}
            isActive={isPathIncluded('/core-jsx/reactive/useState', pathname())}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href={`/${language()}/core-jsx/reactive/useGlobalState`}
            isActive={isPathIncluded(
              '/core-jsx/reactive/useGlobalState',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="useEffect"
            href={`/${language()}/core-jsx/reactive/useEffect`}
            isActive={isPathIncluded(
              '/core-jsx/reactive/useEffect',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="useElement"
            href={`/${language()}/core-jsx/reactive/useElement`}
            isActive={isPathIncluded(
              '/core-jsx/reactive/useElement',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="createContext"
            href={`/${language()}/core-jsx/reactive/createContext`}
            isActive={isPathIncluded(
              '/core-jsx/reactive/createContext',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="onMount"
            href={`/${language()}/core-jsx/reactive/onMount`}
            isActive={isPathIncluded('/core-jsx/reactive/onMount', pathname())}
          />
          <SideNavMenuItem
            text="onDestroy"
            href={`/${language()}/core-jsx/reactive/onDestroy`}
            isActive={isPathIncluded(
              '/core-jsx/reactive/onDestroy',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.router.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Router"
            href={`/${language()}/core-jsx/router/router`}
            isActive={isPathIncluded('/core-jsx/router/router', pathname())}
          />
          <SideNavMenuItem
            text="Route"
            href={`/${language()}/core-jsx/router/route`}
            isActive={isPathIncluded('/core-jsx/router/route', pathname())}
          />
          <SideNavMenuItem
            text="useNavigate"
            href={`/${language()}/core-jsx/router/useNavigate`}
            isActive={isPathIncluded(
              '/core-jsx/router/useNavigate',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="useOutlet"
            href={`/${language()}/core-jsx/router/useOutlet`}
            isActive={isPathIncluded('/core-jsx/router/useOutlet', pathname())}
          />
          <SideNavMenuItem
            text="usePathname"
            href={`/${language()}/core-jsx/router/usePathname`}
            isActive={isPathIncluded(
              '/core-jsx/router/usePathname',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="usePathParams"
            href={`/${language()}/core-jsx/router/usePathParams`}
            isActive={isPathIncluded(
              '/core-jsx/router/usePathParams',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="useQueryParams"
            href={`/${language()}/core-jsx/router/useQueryParams`}
            isActive={isPathIncluded(
              '/core-jsx/router/useQueryParams',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJSX.util.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="defineProps"
            href={`/${language()}/core-jsx/util/defineProps`}
            isActive={isPathIncluded('/core-jsx/util/defineProps', pathname())}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSXSideNav
