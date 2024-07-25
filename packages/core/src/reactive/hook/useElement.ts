import { Block } from '@block/block.ts'
import { isComponent, isElement } from '@type/rvjs.ts'

export const useElement = (block: Block) => {
  if (isElement(block) || isComponent(block)) {
    return block.element
  }
}
