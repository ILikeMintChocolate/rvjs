import type { Router, RouterProps } from '@router/router.ts'

export const normalizeRouter = (routerProps: RouterProps) => {
  let router: Router = {
    static: {},
  }

  const traverse = (router: Router, routerProps: RouterProps) => {
    for (const key in routerProps) {
      if (!validatePathname(key)) {
        throw new Error('Invalid pathname')
      }

      if (isDynamicPathname(key)) {
        router.dynamic = {
          dynamicKey: key.slice(2),
          pathname: key,
          componentFn: routerProps[key].componentFn,
        }
        const childRouterProps = routerProps[key].router
        if (childRouterProps) {
          router.dynamic.router = {
            static: {},
          }

          traverse(router.dynamic.router, childRouterProps)
        }
      } else if (isGlobalAnyPathname(key) || isLocalAnyPathname(key)) {
        router.any = {
          type: isGlobalAnyPathname(key) ? 'global' : 'local',
          componentFn: routerProps[key].componentFn,
        }
      } else {
        router.static[key] = {
          pathname: key,
          componentFn: routerProps[key].componentFn,
        }
        const childRouterProps = routerProps[key].router
        if (childRouterProps) {
          router.static[key].router = {
            static: {},
          }
          // @ts-ignore
          traverse(router.static[key].router, childRouterProps)
        }
      }
    }
  }

  traverse(router, routerProps)

  return router
}

const validatePathname = (pathname: string) => {
  const pathnameRegex = /^\/(:?[a-zA-Z0-9_-]*)$|^\*|^\/\*$/
  return pathnameRegex.test(pathname)
}

const isDynamicPathname = (pathname: string) => {
  const pathnameRegex = /^\/:[a-zA-Z0-9_-]+$/
  return pathnameRegex.test(pathname)
}

const isGlobalAnyPathname = (pathname: string) => {
  return pathname === '*'
}

const isLocalAnyPathname = (pathname: string) => {
  return pathname === '/*'
}
