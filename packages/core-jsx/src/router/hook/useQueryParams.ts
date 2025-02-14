import { routerContext } from '@router/context/router.ts'

export const useQueryParams = () => {
  return routerContext.get().queries
}
