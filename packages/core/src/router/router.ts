import { SwitchRender } from '@children/switch.ts'
import { component } from '@component/component.ts'
import { Component } from '@component/componentBlock.ts'
import { Block, Child } from '@dom/type.ts'
import { h1 } from '@element/element.ts'
import useSwitchable from '@router/hook/useSwitchable.ts'
import { pathEvent } from '@router/util/event.ts'
import { getCurrentPath, splitPath } from '@router/util/path.ts'
import { popAllIndex } from '@util/array.ts'

interface Router {
  [key: string]: Route
}

interface Route {
  componentFn: ComponentFn
  router?: Router
}

interface RouteContext {
  outlet?: Child
}

export type ComponentFn = (context: RouteContext) => Component

interface MatchedRoute {
  path: string
  componentFn: ComponentFn
}

interface CachedRoute {
  path: string
  switchable: SwitchRender
  setSwitchable: (newBlock: Block | null) => void
}

const ErrorComponent = component(() => {
  return h1({ textContent: '404' })
})

export const Router = (router: Router) => {
  let cachedRoutes: CachedRoute[] = []

  pathEvent.onPathChange((prePaths, newPaths) => {
    let currentRouter = router

    for (let i = 0; i < newPaths.length; i++) {
      const prePath = prePaths?.[i]
      const newPath = newPaths[i]

      if (prePath !== newPath) {
        const matchedRoutes = diffingPath(newPaths.slice(i), currentRouter)
        const { component, cachedRoutes: newCachedRoutes } =
          makeComponent(matchedRoutes)

        cachedRoutes = popAllIndex(cachedRoutes, i + 1)
        cachedRoutes[cachedRoutes.length - 1].setSwitchable(component as Block)
        cachedRoutes[cachedRoutes.length - 1].path = newPath
        cachedRoutes = [...cachedRoutes, ...newCachedRoutes]

        break
      } else {
        currentRouter = currentRouter[newPath].router!
      }

      if (i === newPaths.length - 1) {
        cachedRoutes = popAllIndex(cachedRoutes, i + 2)
        cachedRoutes[cachedRoutes.length - 1].setSwitchable(null)
        cachedRoutes[cachedRoutes.length - 1].path = '/'
      }
    }
  })

  const pushEmptySwitchable = (
    cachedRoutes: CachedRoute[],
    path: string = '/',
  ) => {
    const [emptySwitchable, setEmptySwitchable] = useSwitchable(null)
    const newCachedRoutes = [
      ...cachedRoutes,
      {
        path,
        switchable: emptySwitchable(),
        setSwitchable: setEmptySwitchable,
      },
    ]

    return newCachedRoutes
  }

  const diffingPath = (paths: string[], currentRouter: Router) => {
    const matchedRoutes: MatchedRoute[] = []

    for (const p of paths) {
      if (!currentRouter || !currentRouter[p]) {
        matchedRoutes.push({
          path: p,
          componentFn: () => ErrorComponent(),
        })
      }

      matchedRoutes.push({
        path: p,
        componentFn: currentRouter[p].componentFn,
      })
      currentRouter = currentRouter[p].router!
    }

    return matchedRoutes
  }

  const makeComponent = (routes: MatchedRoute[]) => {
    let cachedRoutes: CachedRoute[] = []

    cachedRoutes = pushEmptySwitchable(cachedRoutes, '/')

    const component = routes
      .reverse()
      .reduce((renderedChild: SwitchRender | Block | null, route, i) => {
        const { path, componentFn } = route
        const isLast = i === routes.length - 1

        if (isLast) {
          return componentFn({
            outlet: renderedChild ?? cachedRoutes[0].switchable,
          })
        } else {
          const component = componentFn({
            outlet: renderedChild ?? cachedRoutes[0].switchable,
          })
          const [switchable, setSwitchable] = useSwitchable(component)

          cachedRoutes = [
            ...cachedRoutes,
            { path, switchable: switchable(), setSwitchable },
          ]

          return switchable()
        }
      }, null)

    return { component, cachedRoutes: cachedRoutes.reverse() }
  }

  const init = (currentPath: string) => {
    const paths = splitPath(currentPath)
    const matchedRoutes = diffingPath(paths, router)
    const { component, cachedRoutes: newCachedRoutes } =
      makeComponent(matchedRoutes)

    cachedRoutes = pushEmptySwitchable(cachedRoutes, '/')
    cachedRoutes[cachedRoutes.length - 1].setSwitchable(component as Block)
    cachedRoutes[cachedRoutes.length - 1].path = paths[0]
    cachedRoutes = [...cachedRoutes, ...newCachedRoutes]
  }

  init(getCurrentPath())

  return cachedRoutes[0].switchable
}
