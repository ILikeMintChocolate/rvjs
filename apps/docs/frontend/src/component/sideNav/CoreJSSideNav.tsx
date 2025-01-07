import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

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
            isActive={isPathIncluded(
              '/core-js/overview/gettingStarted',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.guide')}
            href={`/${language()}/core-js/overview/guide`}
            isActive={isPathIncluded('/core-js/overview/guide', pathname())}
          />
          <SideNavMenuItem
            text={t('sideNav.coreJS.overview.items.benchmark')}
            href={`/${language()}/core-js/overview/benchmark`}
            isActive={isPathIncluded('/core-js/overview/benchmark', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.render.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="element"
            href={`/${language()}/core-js/dom/element`}
            isActive={isPathIncluded('/core-js/dom/element', pathname())}
          />
          <SideNavMenuItem
            text="component"
            href={`/${language()}/core-js/dom/component`}
            isActive={isPathIncluded('/core-js/dom/component', pathname())}
          />
          <SideNavMenuItem
            text="root"
            href={`/${language()}/core-js/dom/root`}
            isActive={isPathIncluded('/core-js/dom/root', pathname())}
          />
          <SideNavMenuItem
            text="textNode"
            href={`/${language()}/core-js/dom/textNode`}
            isActive={isPathIncluded('/core-js/dom/textNode', pathname())}
          />
          <SideNavMenuItem
            text="For"
            href={`/${language()}/core-js/dom/for`}
            isActive={isPathIncluded('/core-js/dom/for', pathname())}
          />
          <SideNavMenuItem
            text="Switch"
            href={`/${language()}/core-js/dom/switch`}
            isActive={isPathIncluded('/core-js/dom/switch', pathname())}
          />
          <SideNavMenuItem
            text="Toggle"
            href={`/${language()}/core-js/dom/toggle`}
            isActive={isPathIncluded('/core-js/dom/toggle', pathname())}
          />
          <SideNavMenuItem
            text="Suspense"
            href={`/${language()}/core-js/dom/suspense`}
            isActive={isPathIncluded('/core-js/dom/suspense', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.reactive.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="useState"
            href={`/${language()}/core-js/reactive/useState`}
            isActive={isPathIncluded('/core-js/reactive/useState', pathname())}
          />
          <SideNavMenuItem
            text="useGlobalState"
            href={`/${language()}/core-js/reactive/useGlobalState`}
            isActive={isPathIncluded(
              '/core-js/reactive/useGlobalState',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="useEffect"
            href={`/${language()}/core-js/reactive/useEffect`}
            isActive={isPathIncluded('/core-js/reactive/useEffect', pathname())}
          />
          <SideNavMenuItem
            text="useRef"
            href={`/${language()}/core-js/reactive/useRef`}
            isActive={isPathIncluded('/core-js/reactive/useRef', pathname())}
          />
          <SideNavMenuItem
            text="useElement"
            href={`/${language()}/core-js/reactive/useElement`}
            isActive={isPathIncluded(
              '/core-js/reactive/useElement',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="dynamic"
            href={`/${language()}/core-js/reactive/dynamic`}
            isActive={isPathIncluded('/core-js/reactive/dynamic', pathname())}
          />
          <SideNavMenuItem
            text="prop"
            href={`/${language()}/core-js/reactive/prop`}
            isActive={isPathIncluded('/core-js/reactive/prop', pathname())}
          />
          <SideNavMenuItem
            text="createContext"
            href={`/${language()}/core-js/reactive/createContext`}
            isActive={isPathIncluded(
              '/core-js/reactive/createContext',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="onMount"
            href={`/${language()}/core-js/reactive/onMount`}
            isActive={isPathIncluded('/core-js/reactive/onMount', pathname())}
          />
          <SideNavMenuItem
            text="onDestroy"
            href={`/${language()}/core-js/reactive/onDestroy`}
            isActive={isPathIncluded('/core-js/reactive/onDestroy', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.coreJS.router.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Router"
            href={`/${language()}/core-js/router/router`}
            isActive={isPathIncluded('/core-js/router/router', pathname())}
          />
          <SideNavMenuItem
            text="useNavigate"
            href={`/${language()}/core-js/router/useNavigate`}
            isActive={isPathIncluded('/core-js/router/useNavigate', pathname())}
          />
          <SideNavMenuItem
            text="useOutlet"
            href={`/${language()}/core-js/router/useOutlet`}
            isActive={isPathIncluded('/core-js/router/useOutlet', pathname())}
          />
          <SideNavMenuItem
            text="usePathname"
            href={`/${language()}/core-js/router/usePathname`}
            isActive={isPathIncluded('/core-js/router/usePathname', pathname())}
          />
          <SideNavMenuItem
            text="usePathEffect"
            href={`/${language()}/core-js/router/usePathEffect`}
            isActive={isPathIncluded(
              '/core-js/router/usePathEffect',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="usePathParams"
            href={`/${language()}/core-js/router/usePathParams`}
            isActive={isPathIncluded(
              '/core-js/router/usePathParams',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="useQueryParams"
            href={`/${language()}/core-js/router/useQueryParams`}
            isActive={isPathIncluded(
              '/core-js/router/useQueryParams',
              pathname(),
            )}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default CoreJSSideNav
