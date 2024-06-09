import { componentContext } from '@context/executionContext.ts'

const usePathParam = (key: string) => {
  const component = componentContext.get()
  const pathParam = component?.pathParam

  if (!pathParam || pathParam.key !== key) {
    return null
  }

  return pathParam.value
}

export default usePathParam
