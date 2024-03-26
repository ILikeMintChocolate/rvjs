import { Children } from '@dom/type.ts'

export type ChildrenRender = () => Children

export const children = (resultFn: () => Children) => {
  return function childrenRender() {
    return resultFn()
  } as ChildrenRender
}
