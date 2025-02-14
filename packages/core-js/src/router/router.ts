import { Block } from '@block/block.ts'
import { ComponentBlock } from '@block/component.ts'
import { SwitchBlock } from '@block/switch.ts'
import { component } from '@component/component.ts'
import { div } from '@element/elementMap.ts'
import { Switch } from '@flow/switch.ts'
import { useState } from '@hook/useState.ts'
import { routeContext } from '@router/context/routerContext.ts'
import { getPathEventInstance, Route } from '@router/util/event.ts'
import {
  getCurrentPath,
  isPathDeepEqual,
  PathToken,
  setPathParams,
  tokenizePath,
} from '@router/util/path.ts'
import { normalizeRouter } from '@router/util/router.ts'

export interface RouterProps {
  [key: string]: RouteProps
}

export interface RouterOptions {
  useHash?: boolean
}

interface RouteProps {
  router?: RouterProps
  componentFn: ComponentFn
}

export interface Router {
  static: {
    [key: string]: {
      pathname: string
      componentFn: ComponentFn
      router?: Router
    }
  }
  dynamic?: {
    dynamicKey: string
    pathname: string
    componentFn: ComponentFn
    router?: Router
  }
  any?: {
    type: 'local' | 'global'
    componentFn: ComponentFn
  }
}

export interface MatchedRouteFn {
  pathType: 'static' | 'dynamic' | 'error'
  dynamicKey?: string
  pathname: string
  query: Record<string, string>
  componentFn: ComponentFn
}

type ComponentFn = () => ComponentBlock

const Router = (
  routerProps: RouterProps,
  options?: RouterOptions,
): SwitchBlock<unknown> => {
  let router = normalizeRouter(routerProps)
  const [routerOutlet, setRouterOutlet] = useState<Block | null>(null)
  const { getRoutes, setRoutes, onPathChange } = getPathEventInstance({
    useHash: options?.useHash ?? false,
  })
  const useHash = options?.useHash ?? false

  onPathChange((state) => {
    if (!state) {
      return
    }
    const { prevPath, newPath } = state
    const prePathTokens = tokenizePath(prevPath)
    const newPathTokens = tokenizePath(newPath)
    const matchedRoutes = findRoutes(newPathTokens, router)
    setPathParams(matchedRoutes)
    for (let i = 0; i < newPathTokens.length; i++) {
      const prePath = prePathTokens?.[i]
      const newPath = newPathTokens[i]
      if (!isPathDeepEqual(prePath, newPath)) {
        if (i === 0) {
          const { rootComponent, currentRoutes: currRoutes } =
            renderComponent(matchedRoutes)
          setRoutes([...currRoutes])
          setRouterOutlet(rootComponent)
          break
        } else {
          const { rootComponent, currentRoutes: currRoutes } = renderComponent(
            matchedRoutes.slice(i),
          )
          const currentRoutes = getRoutes()
          currentRoutes[i - 1].component.setOutlet(rootComponent)
          setRoutes([...currentRoutes.slice(0, i), ...currRoutes])
          break
        }
      }
      if (i === newPathTokens.length - 1) {
        const currentRoutes = getRoutes()
        currentRoutes[i].component.setOutlet(null)
        setRoutes([...currentRoutes.slice(0, i + 1)])
      }
    }
  })

  const findRoutes = (paths: PathToken[], router: Router) => {
    const matchedRoutes: MatchedRouteFn[] = []
    let globalAnyRoute = null

    for (const path of paths) {
      const { pathname, query } = path
      if (router?.any?.type === 'global') {
        globalAnyRoute = router.any
      }
      if (router.static[pathname]) {
        matchedRoutes.push({
          pathType: 'static',
          pathname,
          query,
          componentFn: router.static[pathname].componentFn,
        })
        router = router.static[pathname].router!
      } else if (router.dynamic) {
        matchedRoutes.push({
          pathType: 'dynamic',
          dynamicKey: router.dynamic.dynamicKey,
          pathname,
          query,
          componentFn: router.dynamic.componentFn,
        })
        router = router.dynamic.router!
      } else if (router.any) {
        matchedRoutes.push({
          pathType: 'error',
          pathname,
          query,
          componentFn: router.any.componentFn,
        })
      } else if (globalAnyRoute) {
        matchedRoutes.push({
          pathType: 'error',
          pathname,
          query,
          componentFn: globalAnyRoute.componentFn,
        })
      } else {
        matchedRoutes.push({
          pathType: 'error',
          pathname,
          query,
          componentFn: () => component(() => div())(),
        })
        break
      }
    }
    return matchedRoutes
  }

  const renderComponent = (routes: MatchedRouteFn[]) => {
    let currRoutes: Route[] = []
    routes.reverse().forEach((route, i) => {
      const { pathType, pathname, query, componentFn, dynamicKey } = route
      const childComponent = currRoutes[i - 1]?.component
      if (pathType === 'dynamic') {
        routeContext.set({ pathType, pathname, query, dynamicKey })
      } else {
        routeContext.set({ pathType, pathname, query })
      }
      const component = componentFn()
      routeContext.set(null)
      if (childComponent) {
        test = childComponent
        component.lazySetOutlet = () => {
          component.setOutlet(childComponent)
        }
      }
      currRoutes.push({ pathType, pathname, query, component })
    })
    return {
      rootComponent: currRoutes.at(-1).component,
      currentRoutes: currRoutes.reverse(),
    }
  }

  const init = (currentPath: string) => {
    const pathTokens = tokenizePath(currentPath)
    const matchedRoutes = findRoutes(pathTokens, router)
    setPathParams(matchedRoutes)
    const { rootComponent, currentRoutes: currRoutes } =
      renderComponent(matchedRoutes)
    setRoutes([...currRoutes])
    setRouterOutlet(rootComponent)
  }

  init(getCurrentPath(useHash))

  return Switch(routerOutlet, () => {
    return routerOutlet()
  })
}

export let test = null

export default Router
