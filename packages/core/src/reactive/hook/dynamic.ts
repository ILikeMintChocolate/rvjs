import { isFunction } from '@type/guard.ts'

export type Dynamic<Result = unknown> = () => () => Result

export const dynamic = <Result>(resultFn: () => Result) => {
  return function dynamicRender() {
    return resultFn()
  } as Dynamic
}

export const isDynamic = (value: unknown): value is Dynamic => {
  return isFunction(value) && value.name === 'dynamicRender'
}
