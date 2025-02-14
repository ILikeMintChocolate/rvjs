import { dynamicContext } from '@context/executionContext.ts'
import { StateContext } from '@hook/useState.ts'
import { isRvjsFunction } from '@type/guard.ts'
import { RVJS_DYNAMIC_RENDER_SYMBOL } from '@util/symbol.ts'

export type Dynamic<Result = unknown> = (context?: StateContext) => Result

export const dynamic = <Result>(
  resultFn: (context?: StateContext) => Result,
) => {
  const dynamicRender = (context?: StateContext) => {
    if (context) {
      dynamicContext.set(context)
      const result = resultFn()
      dynamicContext.set(null)
      return result
    }
    return resultFn()
  }
  dynamicRender.$$typeof = RVJS_DYNAMIC_RENDER_SYMBOL
  return dynamicRender as Dynamic<Result>
}

export const isDynamic = (value: unknown): value is Dynamic => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_DYNAMIC_RENDER_SYMBOL
}
