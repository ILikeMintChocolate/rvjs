import { Component } from '@block/component/component.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface RouteProps {
  path: string
  element: (Component | Node)[]
  children?: Component[]
}

export interface RawRoute {
  path: string
  element: readonly (Component | Node)[]
  childRoutes: RawRoute[]
}

export const Route = (props: RouteProps) => {
  const { path, children: childRoutes } = props
  const route = { path, childRoutes: childRoutes ?? [] }
  copyGetter(props, 'element', route, 'element')
  return route
}
Route.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
