import { Refresh } from '@component/refresh.ts'
import { onDestroy } from '@hook/onDestroy.ts'
import { onMount } from '@hook/onMount.ts'
import { useEffect } from '@hook/useEffect.ts'
import { useGlobalState } from '@hook/useGlobalState.ts'
import { GetState, SetState, useState } from '@hook/useState.ts'
import { Component } from '@render/component.ts'
import { isUsingHash } from '@router/util/path.ts'
import {
  compareRoutes,
  createMatchedRoutes,
  createRouteMap,
  updateRoutes,
} from '@router/util/route.ts'
import { Children } from '@type/jsx.ts'
import { toArray } from '@util/data.ts'

interface RouterProps {
  children: Children
}

export interface RouteMap {
  [path: string]: Route
}

export interface Route {
  path: string
  rawPath: string
  type: 'STATIC' | 'DYNAMIC' | 'ANY'
  getElement: Component
  element: Component
  dynamicKey?: string
  queries: {
    [key: string]: string
  }
  childRouteMap: RouteMap
}

export const Router = (props: RouterProps) => {
  const [paths] = useRouter()
  const [rootOutlet, setRootOutlet] = useState(null)
  const routeMap = createRouteMap(toArray(props.children as []))
  let matchedRoutes = []

  const renderRoutes = () => {
    const newMatchedRoutes = createMatchedRoutes(routeMap, paths())
    const { routeToRetain, routeToRender, routeToRemove } = compareRoutes(
      matchedRoutes,
      newMatchedRoutes,
    )
    updateRoutes({ routeToRetain, routeToRender, routeToRemove }, setRootOutlet)
    matchedRoutes = [...routeToRetain, ...routeToRender]
  }

  useEffect(renderRoutes, [paths])

  return Refresh({
    get by() {
      return rootOutlet()
    },
    get children() {
      return rootOutlet()
    },
  })
}

export const useRouter = (): [GetState<string[]>, SetState<string[]>] => {
  const [paths, setPaths] = useGlobalState<string[]>('RVJS_ROUTER_PATHS', [])

  const handleHashChange = () => {
    if (!isUsingHash()) {
      const newHash = `#${location.pathname}${location.search}`
      history.replaceState(null, '', '/')
      location.hash = newHash
    }
    const hash = (window.location.hash || '#/').replace('#/', '/')
    const pathArray = hash
      .substring(1)
      .split('/')
      .map((path) => `/${path}`)
    setPaths(pathArray)
  }

  onMount(() => {
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
  })

  onDestroy(() => {
    window.removeEventListener('hashchange', handleHashChange)
  })

  return [paths, setPaths]
}
