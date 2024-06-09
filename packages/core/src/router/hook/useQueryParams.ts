import { componentContext } from '@context/executionContext.ts'

const useQueryParams = () => {
  return componentContext.get()!.queryParams
}

export default useQueryParams
