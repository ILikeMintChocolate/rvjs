import { componentContext } from '@context/executionContext.ts'

const useQueryParam = () => {
  return componentContext.get()!.queryParams
}

export default useQueryParam
