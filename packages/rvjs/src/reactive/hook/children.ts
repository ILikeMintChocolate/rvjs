import { AnyBlock } from '../../type/dom.ts'

export type ChildrenRender = () => AnyBlock[]

export const children = (resultFn: () => AnyBlock[]) => {
  return function childrenRender() {
    return resultFn()
  } as ChildrenRender
}
