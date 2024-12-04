import { routerContext } from '@router/context/router.ts'

export const useParams = () => {
  return routerContext.get()
}
