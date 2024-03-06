import { isFunction } from '../../type/guard.ts'

export type DynamicRender<Result = unknown> = () => () => Result

export const dynamic = <Result>(resultFn: () => Result) => {
  return function dynamicRender() {
    return resultFn()
  } as DynamicRender
}

export const isDynamicRender = (value: unknown): value is DynamicRender => {
  return isFunction(value) && value.name === 'dynamicRender'
}
