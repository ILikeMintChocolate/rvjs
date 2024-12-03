import { Component } from '@block/component/component.ts'
import { Refresh } from '@component/refresh.ts'
import { onDestroy } from '@hook/onDestroy.ts'
import { onMount } from '@hook/onMount.ts'
import { useEffect } from '@hook/useEffect.ts'
import { GetState, SetState, useState } from '@hook/useState.ts'
import { RawRoute } from '@router/component/route.ts'
import {
  compareRoutes,
  createMatchedRoutes,
  createRouteMap,
  updateRoutes,
} from '@router/util/route.tsx'
import { toArray } from '@util/data.ts'

interface RouterProps {
  children: RawRoute[]
}

export interface RouteMap {
  [path: string]: Route
}

export interface Route {
  path: string
  type: 'STATIC' | 'DYNAMIC'
  getElement: Component | Node
  element: Component | Node
  dynamicKey?: string
  childRouteMap: RouteMap
}

export const Router = (props: RouterProps) => {
  const [paths] = useRouter()
  const [rootOutlet, setRootOutlet] = useState(null)
  const routeMap = createRouteMap(toArray(props.children))
  let matchedRoutes = []

  const renderRoutes = () => {
    const newMatchedRoutes = createMatchedRoutes(routeMap, paths())
    const renderRouteContext = compareRoutes(matchedRoutes, newMatchedRoutes)
    updateRoutes(renderRouteContext, setRootOutlet)
    matchedRoutes = newMatchedRoutes
  }

  useEffect(renderRoutes, [paths])

  // @ts-ignore
  return <Refresh by={rootOutlet()}>{rootOutlet()}</Refresh>
}

export const useRouter = (): [GetState<string[]>, SetState<string[]>] => {
  const [paths, setPaths] = useState<string[]>([])

  const handleHashChange = () => {
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
