export type ChildrenRender<Result = unknown> = () => () => Result

export const children = <Result>(resultFn: () => Result) => {
  return function childrenRender() {
    return resultFn()
  } as ChildrenRender
}
