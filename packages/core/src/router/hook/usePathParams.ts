import { routerContext } from '@router/context/router.ts'

export const usePathParams = () => {
  return routerContext.get().dynamicKeys
}
