import { Children } from '../../type/dom.ts'

export type ChildrenRender = () => Children

export const children = (resultFn: () => Children) => {
  return function childrenRender() {
    return resultFn()
  } as ChildrenRender
}
