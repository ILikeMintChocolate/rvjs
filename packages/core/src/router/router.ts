import { Switch } from '@children/switch.ts'
import { component } from '@component/component.ts'
import { Component } from '@component/componentBlock.ts'
import { Block } from '@dom/type.ts'
import { h1 } from '@element/elementMap.ts'
import { useState } from '@hook/useState.ts'
import { routeContext } from '@router/context/routerContext.ts'
import { pathEvent, Route } from '@router/util/event.ts'
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

interface RouteProps {
  router?: RouterProps
  componentFn: ComponentFn
}

export interface Router {
  dynamic?: {
    dynamicKey: string
    pathname: string
    componentFn: ComponentFn
    router?: Router
  }
  static: {
    [key: string]: {
      pathname: string
      componentFn: ComponentFn
      router?: Router
    }
  }
}

export interface MatchedRouteFn {
  pathType: 'static' | 'dynamic' | 'error'
  dynamicKey?: string
  pathname: string
  query: Record<string, string>
  componentFn: ComponentFn
}

type ComponentFn = () => Component

const Router = (routerProps: RouterProps) => {
  let router = normalizeRouter(routerProps)
  const [routerOutlet, setRouterOutlet] = useState<Block | null>(null)
  const { getRoutes, setRoutes, onPathChange } = pathEvent

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

    for (const path of paths) {
      const { pathname, query } = path

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
      } else {
        matchedRoutes.push({
          pathType: 'error',
          pathname,
          query,
          componentFn: () =>
            component(() => {
              return h1({ textContent: '404...' })
            })(),
        })
        break
      }
    }

    return matchedRoutes
  }

  const renderComponent = (routes: MatchedRouteFn[]) => {
    let currentComponent: Component | null = null
    let currRoutes: Route[] = []

    routes.reverse().forEach((route) => {
      const { pathType, pathname, query, componentFn, dynamicKey } = route

      if (pathType === 'dynamic') {
        routeContext.set({ pathType, pathname, query, dynamicKey })
      } else {
        routeContext.set({ pathType, pathname, query })
      }

      const component = componentFn()
      routeContext.set(null)

      if (currentComponent) {
        component.setOutlet(currentComponent)
      }
      currentComponent = component
      currRoutes.push({ pathType, pathname, query, component })
    })

    return {
      rootComponent: currentComponent,
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

  init(getCurrentPath())

  return Switch(routerOutlet, () => {
    return routerOutlet()
  })
}

export default Router
