import { isRvjsFunction } from '@type/guard.ts'
import { RVJS_DYNAMIC_RENDER_SYMBOL } from '@util/symbol.ts'

export type Dynamic<Result = unknown> = () => Result

export const dynamic = <Result>(resultFn: () => Result) => {
  const dynamicRender = () => {
    return resultFn()
  }
  dynamicRender.$$typeof = RVJS_DYNAMIC_RENDER_SYMBOL
  return dynamicRender as Dynamic<Result>
}

export const isDynamic = (value: unknown): value is Dynamic => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_DYNAMIC_RENDER_SYMBOL
}
