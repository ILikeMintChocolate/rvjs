import { pathParamsContext } from '@router/context/routerContext.ts'

const usePathParams = () => {
  return pathParamsContext.get()
}

export default usePathParams
