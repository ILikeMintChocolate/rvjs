import { Component } from '@block/component/component.ts'
import { Refresh } from '@component/refresh.ts'
import { SetState, useState } from '@hook/useState.ts'
import { RawRoute } from '@router/component/route.ts'
import { Route, RouteMap } from '@router/component/router.ts'
import { routerContext } from '@router/context/router.ts'
import {
  findDynamicKey,
  findDynamicPath,
  findPath,
  findPathType,
  findQuery,
} from '@router/util/path.ts'
import { isComponent } from '@type/guard.ts'
import { toArray } from '@util/data.ts'
import { copyGetter } from '@util/function.ts'

export const createRouteMap = (childRoutes: RawRoute[]) => {
  const routeMap: RouteMap = {}
  const findChildRoutes = (
    currentRouteMap: RouteMap,
    currentChildRoutes: RawRoute[],
  ) => {
    currentChildRoutes.forEach((childRoute) => {
      const { path, childRoutes } = childRoute
      const childRouteMap = {}
      const routeContext = {
        path,
        childRouteMap,
        type: findPathType(path),
      }
      copyGetter(childRoute, 'element', routeContext, 'getElement')
      // @ts-ignore
      currentRouteMap[path] = routeContext
      if (childRoutes) {
        findChildRoutes(childRouteMap, toArray(childRoutes))
      }
    })
  }
  findChildRoutes(routeMap, toArray(childRoutes))
  return routeMap
}

export const createMatchedRoutes = (routeMap: RouteMap, paths: string[]) => {
  let currentRouteMap: RouteMap = routeMap
  const matchedRoutes: Route[] = []
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const matchedRoute = (() => {
      const dynamicRoute = findDynamicRoute(currentRouteMap)
      if (dynamicRoute) {
        const route = {
          path: findPath(path),
          rawPath: path,
          type: dynamicRoute.type,
          dynamicKey: findDynamicKey(dynamicRoute.path),
          queries: findQuery(path),
          childRouteMap: dynamicRoute.childRouteMap,
        }
        copyGetter(dynamicRoute, 'getElement', route, 'getElement')
        return route
      }
      const anyRoute = findAnyRoute(currentRouteMap)
      if (anyRoute) {
        const route = {
          path: path,
          type: anyRoute.type,
          queries: findQuery(path),
          childRouteMap: anyRoute.childRouteMap,
        }
        copyGetter(anyRoute, 'getElement', route, 'getElement')
        return route
      }
      if (currentRouteMap[path] || findPath(path)) {
        const staticRoute = currentRouteMap[findPath(path)]
        const route = {
          path: findPath(path),
          rawPath: path,
          queries: findQuery(path),
          dynamicKey: {},
          type: 'STATIC',
          ...staticRoute,
        }
        copyGetter(staticRoute, 'getElement', route, 'getElement')
        return route
      }
    })()
    if (!matchedRoute) {
      break
    }
    matchedRoutes.push(matchedRoute as Route)
    currentRouteMap = matchedRoute.childRouteMap
  }
  return matchedRoutes
}

export const compareRoutes = (prevRoutes: Route[], newRoutes: Route[]) => {
  const findRoutesToRetain = (prevRoutes: Route[], newRoutes: Route[]) => {
    const routeToRetain: Route[] = []
    let retainIndex = -1
    for (let i = 0; i < Math.min(prevRoutes.length, newRoutes.length); i++) {
      const prevRoute = prevRoutes[i]
      const newRoute = newRoutes[i]
      if (isRouteEqual(prevRoute, newRoute)) {
        retainIndex++
        routeToRetain.push(prevRoute)
      } else {
        retainIndex = i - 1
        break
      }
    }
    return { routeToRetain, retainIndex }
  }

  const findRoutesToRemove = (prevRoutes: Route[], retainIndex: number) => {
    return prevRoutes.slice(retainIndex + 1)
  }

  const findRoutesToRender = (newRoutes: Route[], retainIndex: number) => {
    return newRoutes.slice(retainIndex + 1)
  }

  const { routeToRetain, retainIndex } = findRoutesToRetain(
    prevRoutes,
    newRoutes,
  )
  const routeToRemove = findRoutesToRemove(prevRoutes, retainIndex)
  const routeToRender = findRoutesToRender(newRoutes, retainIndex)
  return { routeToRetain, routeToRender, routeToRemove }
}

export const updateRoutes = (
  renderRouteContext: {
    routeToRetain: Route[]
    routeToRender: Route[]
    routeToRemove: Route[]
  },
  setRootOutlet: SetState<Component | Node>,
) => {
  const setComponentToRootOutlet = (
    routeToRetain: Route[],
    routeToRender: Route[],
    setRootOutlet: SetState<Component | Node>,
  ) => {
    const rootRouteToRetain = routeToRetain.at(-1)
    if (rootRouteToRetain && isComponent(rootRouteToRetain?.element)) {
      rootRouteToRetain.element.setOutlet(routeToRender[0].element)
    } else {
      setRootOutlet(routeToRender[0].element)
    }
  }

  const { routeToRetain, routeToRender, routeToRemove } = renderRouteContext
  let childRoute = null
  if (!routeToRender.length && routeToRemove.length) {
    const rootRoute = routeToRetain.at(-1)
    if (rootRoute && isComponent(rootRoute.element)) {
      rootRoute.element.setOutlet(null)
    }
    return
  }
  if (!routeToRender.length) {
    return
  }
  const context = {
    dynamicKeys: {} as Record<string, string>,
    queries: {} as Record<string, string>,
  }
  ;[...routeToRender].reverse().forEach((route) => {
    // @ts-ignore
    route.element = route.getElement
    if (isComponent(route.element)) {
      const [outlet, setOutlet] = useState(childRoute?.element ?? null)
      // @ts-ignore
      route.element.outlet = <Refresh by={outlet()}>{outlet()}</Refresh>
      route.element.setOutlet = setOutlet
      if (route.type === 'DYNAMIC') {
        context.dynamicKeys[route.dynamicKey] = findDynamicPath(route.path)
      }
      Object.assign(context.queries, route.queries)
    }
    childRoute = route
  })
  routerContext.set(context)
  setComponentToRootOutlet(routeToRetain, routeToRender, setRootOutlet)
}

const isRouteEqual = (prevRoute: Route, newRoute: Route) => {
  return prevRoute.rawPath === newRoute.rawPath
}

const findDynamicRoute = (routeMap: RouteMap) => {
  return Object.values(routeMap).find((route) => route.type === 'DYNAMIC')
}

const findAnyRoute = (routeMap: RouteMap) => {
  return routeMap['*']
}
