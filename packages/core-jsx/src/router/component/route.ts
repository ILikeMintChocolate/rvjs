import { Children } from '@type/jsx.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface RouteProps {
  path: string
  element: Children
  children?: Children
}

export interface RawRoute {
  path: string
  element: Children
  childRoutes: RawRoute[]
}

export const Route = (props: RouteProps) => {
  const { path, children: childRoutes } = props
  const route = { path, childRoutes: childRoutes ?? [] }
  copyGetter(props, 'element', route, 'element')
  // @ts-ignore
  return route as Children
}
Route.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
