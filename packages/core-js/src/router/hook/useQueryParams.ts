import { componentContext } from '@context/executionContext.ts'
import { throwError } from '@util/error.ts'

const useQueryParams = () => {
  const component = componentContext.get()
  if (!component) {
    throwError('USE_QUERY_PARAMS_NOT_IN_COMPONENT_ERROR')
  }
  return component.queryParams
}

export default useQueryParams
