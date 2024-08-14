import { Block } from '@block/block.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'

export const useElement = (block: Block) => {
  if (isElement(block) || isTextNode(block)) {
    return block.element
  } else {
    return block.nodes[0]
  }
}
