import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

interface CoreJSSideNavProps {
  depth: number
}

const CoreJSSideNav = (props: CoreJSSideNavProps) => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <>
      <SideNavMenu
        menuName={t('sideNav.coreJS.overview.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.coreJS.overview.items.gettingStarted')}
          href={`/${language()}/core-js/overview/gettingStarted`}
          isActive={isPathIncluded(
            '/core-js/overview/gettingStarted',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.coreJS.overview.items.guide')}
          href={`/${language()}/core-js/overview/guide`}
          isActive={isPathIncluded('/core-js/overview/guide', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text={t('sideNav.coreJS.overview.items.benchmark')}
          href={`/${language()}/core-js/overview/benchmark`}
          isActive={isPathIncluded('/core-js/overview/benchmark', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.coreJS.render.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="element"
          href={`/${language()}/core-js/dom/element`}
          isActive={isPathIncluded('/core-js/dom/element', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="component"
          href={`/${language()}/core-js/dom/component`}
          isActive={isPathIncluded('/core-js/dom/component', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="root"
          href={`/${language()}/core-js/dom/root`}
          isActive={isPathIncluded('/core-js/dom/root', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="textNode"
          href={`/${language()}/core-js/dom/textNode`}
          isActive={isPathIncluded('/core-js/dom/textNode', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="For"
          href={`/${language()}/core-js/dom/for`}
          isActive={isPathIncluded('/core-js/dom/for', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Switch"
          href={`/${language()}/core-js/dom/switch`}
          isActive={isPathIncluded('/core-js/dom/switch', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Toggle"
          href={`/${language()}/core-js/dom/toggle`}
          isActive={isPathIncluded('/core-js/dom/toggle', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Suspense"
          href={`/${language()}/core-js/dom/suspense`}
          isActive={isPathIncluded('/core-js/dom/suspense', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.coreJS.reactive.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="useState"
          href={`/${language()}/core-js/reactive/useState`}
          isActive={isPathIncluded('/core-js/reactive/useState', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useGlobalState"
          href={`/${language()}/core-js/reactive/useGlobalState`}
          isActive={isPathIncluded(
            '/core-js/reactive/useGlobalState',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useEffect"
          href={`/${language()}/core-js/reactive/useEffect`}
          isActive={isPathIncluded('/core-js/reactive/useEffect', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useRef"
          href={`/${language()}/core-js/reactive/useRef`}
          isActive={isPathIncluded('/core-js/reactive/useRef', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useElement"
          href={`/${language()}/core-js/reactive/useElement`}
          isActive={isPathIncluded('/core-js/reactive/useElement', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="dynamic"
          href={`/${language()}/core-js/reactive/dynamic`}
          isActive={isPathIncluded('/core-js/reactive/dynamic', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="prop"
          href={`/${language()}/core-js/reactive/prop`}
          isActive={isPathIncluded('/core-js/reactive/prop', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="createContext"
          href={`/${language()}/core-js/reactive/createContext`}
          isActive={isPathIncluded(
            '/core-js/reactive/createContext',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="onMount"
          href={`/${language()}/core-js/reactive/onMount`}
          isActive={isPathIncluded('/core-js/reactive/onMount', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="onDestroy"
          href={`/${language()}/core-js/reactive/onDestroy`}
          isActive={isPathIncluded('/core-js/reactive/onDestroy', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.coreJS.router.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Router"
          href={`/${language()}/core-js/router/router`}
          isActive={isPathIncluded('/core-js/router/router', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useNavigate"
          href={`/${language()}/core-js/router/useNavigate`}
          isActive={isPathIncluded('/core-js/router/useNavigate', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useOutlet"
          href={`/${language()}/core-js/router/useOutlet`}
          isActive={isPathIncluded('/core-js/router/useOutlet', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="usePathname"
          href={`/${language()}/core-js/router/usePathname`}
          isActive={isPathIncluded('/core-js/router/usePathname', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="usePathEffect"
          href={`/${language()}/core-js/router/usePathEffect`}
          isActive={isPathIncluded('/core-js/router/usePathEffect', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="usePathParams"
          href={`/${language()}/core-js/router/usePathParams`}
          isActive={isPathIncluded('/core-js/router/usePathParams', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="useQueryParams"
          href={`/${language()}/core-js/router/useQueryParams`}
          isActive={isPathIncluded(
            '/core-js/router/useQueryParams',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
    </>
  )
}

export default CoreJSSideNav
