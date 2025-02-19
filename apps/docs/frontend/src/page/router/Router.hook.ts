import { onMount, useEffect, useNavigate, usePathname } from '@rvjs/core'

const legacyPaths = [
  {
    legacyPath: '/core-v0.2.x/gettingStarted',
    newPath: '/ko/core-js/overview/gettingStarted',
  },
  {
    legacyPath: '/core-v0.2.x/benchmark',
    newPath: '/ko/core-js/overview/benchmark',
  },
  {
    legacyPath: '/core-v0.3.x/gettingStarted',
    newPath: '/ko/core-jsx/overview/gettingStarted',
  },
  {
    legacyPath: '/core-v0.3.x/benchmark',
    newPath: '/ko/core-jsx/overview/benchmark',
  },
  {
    legacyPath: '/ko/blog/1/1',
    newPath: '/ko/blog/1',
  },
]

const titleByPath = {
  '/ko/core-jsx/overview/gettingStarted': '시작하기 | @rvjs/core 개발 문서',
  '/ko/core-jsx/overview/guide': '가이드 | @rvjs/core 개발 문서',
  '/ko/core-jsx/overview/benchmark': '벤치마크 | @rvjs/core 개발 문서',
  '/ko/core-jsx/render/element': 'element | @rvjs/core 개발 문서',
  '/ko/core-jsx/render/root': 'root | @rvjs/core 개발 문서',
  '/ko/core-jsx/component/for': 'For | @rvjs/core 개발 문서',
  '/ko/core-jsx/component/switchCase': 'Switch / Case | @rvjs/core 개발 문서',
  '/ko/core-jsx/component/toggle': 'Toggle | @rvjs/core 개발 문서',
  '/ko/core-jsx/component/refresh': 'Refresh | @rvjs/core 개발 문서',
  '/ko/core-jsx/component/tag': 'Tag | @rvjs/core 개발 문서',
  '/ko/core-jsx/component/defined': 'Defined | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/useState': 'useState | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/useGlobalState':
    'useGlobalState | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/useEffect': 'useEffect | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/useElement': 'useElement | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/createContext': 'createContext | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/onMount': 'onMount | @rvjs/core 개발 문서',
  '/ko/core-jsx/reactive/onDestroy': 'onDestroy | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/router': 'Router | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/route': 'Route | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/useNavigate': 'useNavigate | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/useOutlet': 'useOutlet | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/usePathname': 'usePathname | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/usePathParams': 'usePathParams | @rvjs/core 개발 문서',
  '/ko/core-jsx/router/useQueryParams': 'useQueryParams | @rvjs/core 개발 문서',
  '/ko/core-jsx/util/defineProps': 'defineProps | @rvjs/core 개발 문서',
  '/ko/ui-jsx/overview/gettingStarted': 'gettingStarted | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/vars/color': 'color | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/vars/font': 'font | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/vars/opacity': 'opacity | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/vars/spacing': 'spacing | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/layout/section': 'Section | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/form/button': 'Button | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/form/textInput': 'TextInput | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/text': 'Text | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/highlight': 'Highlight | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/link': 'Link | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/inlineCodeSnippet':
    'InlineCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/linkCodeSnippet':
    'LinkCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/singleCodeSnippet':
    'SingleCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/typography/multiCodeSnippet':
    'MultiCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/content/colorChip': 'ColorChip | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/content/icon': 'Icon | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/content/iframe': 'Iframe | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/content/orderedList': 'OrderedList | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/content/unorderedList': 'UnorderedList | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/content/listItem': 'ListItem | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/shell': 'Shell | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/body': 'Body | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/header': 'Header | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerGlobalAction':
    'HeaderGlobalAction | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerGlobalBar': 'HeaderGlobalBar | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerHr': 'HeaderHr | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerMenuButton': 'HeaderMenuButton | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerMenuItem': 'HeaderMenuItem | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerName': 'HeaderName | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/headerNavigation': 'HeaderNavigation | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/subMenu': 'SubMenu | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/subMenuItem': 'SubMenuItem | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/sideNav': 'SideNav | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/sideNavItems': 'SideNavItems | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/sideNavLink': 'SideNavLink | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/sideNavMenu': 'SideNavMenu | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/shell/sideNavMenuItem': 'SideNavMenuItem | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/overlay/tooltip': 'Tooltip | @rvjs/ui 개발 문서',
  '/ko/ui-jsx/overlay/spinner': 'Spinner | @rvjs/ui 개발 문서',
  '/ko/localizer/overview/gettingStarted':
    '시작하기 | @rvjs/localizer 개발 문서',
  '/ko/localizer/hook/useLocalizer': 'useLocalizer | @rvjs/localizer 개발 문서',
  '/ko/localizer/hook/t': 't | @rvjs/localizer 개발 문서',
  '/ko/localizer/hook/useLocale': 'useLocale | @rvjs/localizer 개발 문서',
  '/ko/localizer/hook/setLocale': 'setLocale | @rvjs/localizer 개발 문서',
  '/ko/core-js/overview/gettingStarted': '시작하기 | @rvjs/core 개발 문서',
  '/ko/core-js/overview/guide': '가이드 | @rvjs/core 개발 문서',
  '/ko/core-js/overview/benchmark': '벤치마크 | @rvjs/core 개발 문서',
  '/ko/core-js/dom/element': 'element | @rvjs/core 개발 문서',
  '/ko/core-js/dom/component': 'component | @rvjs/core 개발 문서',
  '/ko/core-js/dom/root': 'root | @rvjs/core 개발 문서',
  '/ko/core-js/dom/textNode': 'textNode | @rvjs/core 개발 문서',
  '/ko/core-js/dom/for': 'For | @rvjs/core 개발 문서',
  '/ko/core-js/dom/switch': 'Switch | @rvjs/core 개발 문서',
  '/ko/core-js/dom/toggle': 'Toggle | @rvjs/core 개발 문서',
  '/ko/core-js/dom/suspense': 'Suspense | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/useState': 'useState | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/useGlobalState':
    'useGlobalState | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/useEffect': 'useEffect | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/useRef': 'useRef | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/useElement': 'useElement | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/dynamic': 'dynamic | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/prop': 'prop | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/createContext': 'createContext | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/onMount': 'onMount | @rvjs/core 개발 문서',
  '/ko/core-js/reactive/onDestroy': 'onDestroy | @rvjs/core 개발 문서',
  '/ko/core-js/router/router': 'router | @rvjs/core 개발 문서',
  '/ko/core-js/router/useNavigate': 'useNavigate | @rvjs/core 개발 문서',
  '/ko/core-js/router/useOutlet': 'useOutlet | @rvjs/core 개발 문서',
  '/ko/core-js/router/usePathname': 'usePathname | @rvjs/core 개발 문서',
  '/ko/core-js/router/usePathEffect': 'usePathEffect | @rvjs/core 개발 문서',
  '/ko/core-js/router/usePathParams': 'usePathParams | @rvjs/core 개발 문서',
  '/ko/core-js/router/useQueryParams': 'useQueryParams | @rvjs/core 개발 문서',
  '/ko/ui-js/overview/gettingStarted': '시작하기 | @rvjs/ui 개발 문서',
  '/ko/ui-js/vars/color': 'color | @rvjs/ui 개발 문서',
  '/ko/ui-js/vars/font': 'font | @rvjs/ui 개발 문서',
  '/ko/ui-js/vars/opacity': 'opacity | @rvjs/ui 개발 문서',
  '/ko/ui-js/vars/spacing': 'spacing | @rvjs/ui 개발 문서',
  '/ko/ui-js/layout/box': 'Box | @rvjs/ui 개발 문서',
  '/ko/ui-js/layout/flex': 'Flex | @rvjs/ui 개발 문서',
  '/ko/ui-js/layout/grid': 'Grid | @rvjs/ui 개발 문서',
  '/ko/ui-js/layout/section': 'Section | @rvjs/ui 개발 문서',
  '/ko/ui-js/form/button': 'Button | @rvjs/ui 개발 문서',
  '/ko/ui-js/form/textInput': 'TextInput | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/text': 'Text | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/highlight': 'Highlight | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/link': 'Link | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/inlineCodeSnippet':
    'InlineCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/linkCodeSnippet':
    'LinkCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/singleCodeSnippet':
    'SingleCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-js/typography/multiCodeSnippet':
    'MultiCodeSnippet | @rvjs/ui 개발 문서',
  '/ko/ui-js/content/colorChip': 'ColorChip | @rvjs/ui 개발 문서',
  '/ko/ui-js/content/icon': 'Icon | @rvjs/ui 개발 문서',
  '/ko/ui-js/content/iframe': 'Iframe | @rvjs/ui 개발 문서',
  '/ko/ui-js/content/orderedList': 'OrderedList | @rvjs/ui 개발 문서',
  '/ko/ui-js/content/unorderedList': 'UnorderedList | @rvjs/ui 개발 문서',
  '/ko/ui-js/content/listItem': 'ListItem | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/body': 'Body | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/header': 'Header | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerGlobalAction':
    'HeaderGlobalAction | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerGlobalBar': 'HeaderGlobalBar | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerHr': 'HeaderHr | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerMenuButton': 'HeaderMenuButton | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerMenuItem': 'HeaderMenuItem | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerName': 'HeaderName | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/headerNavigation': 'HeaderNavigation | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/subMenu': 'SubMenu | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/subMenuItem': 'SubMenuItem | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/sideNav': 'SideNav | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/sideNavItems': 'SideNavItems | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/sideNavLink': 'SideNavLink | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/sideNavMenu': 'SideNavMenu | @rvjs/ui 개발 문서',
  '/ko/ui-js/shell/sideNavMenuItem': 'SideNavMenuItem | @rvjs/ui 개발 문서',
  '/ko/ui-js/overlay/tooltip': 'Tooltip | @rvjs/ui 개발 문서',
  '/ko/ui-js/util/renderComponentFromJSON':
    'renderComponentFromJSON | @rvjs/ui 개발 문서',
  '/ko/is-js/overview/gettingStarted': '시작하기 | @rvjs/is 개발 문서',
  '/ko/is-js/type/primitive': 'primitive | @rvjs/is 개발 문서',
  '/ko/is-js/type/reference': 'reference | @rvjs/is 개발 문서',
  '/ko/is-js/type/composite': 'composite | @rvjs/is 개발 문서',
  '/ko/is-js/type/rvjs-core': '@rvjs/core | @rvjs/is 개발 문서',
}

export const useRouter = () => {
  const pathname = usePathname()
  const navigate = useNavigate()

  const redirectLegacyPath = (pathname: string) => {
    for (const { legacyPath, newPath } of legacyPaths) {
      if (pathname.startsWith(legacyPath)) {
        navigate(pathname.replace(legacyPath, newPath))
        return
      }
    }
  }

  const redirectInitialPath = (pathname: string) => {
    if (pathname === '/') {
      navigate('/ko/core-jsx/overview/gettingStarted')
    }
  }

  const updateTitle = (pathname: string) => {
    document.title =
      titleByPath[pathname] ?? 'rvjs 개발 문서 | SPA 개발 라이브러리'
  }

  onMount(() => {
    const currentPathname = pathname()
    redirectLegacyPath(currentPathname)
    redirectInitialPath(currentPathname)
    updateTitle(currentPathname)
  })

  useEffect(() => {
    const currentPathname = pathname()
    redirectLegacyPath(currentPathname)
    redirectInitialPath(currentPathname)
    updateTitle(currentPathname)
  }, [pathname])
}
