import { Block } from '@block/block.ts'
import { isElementBlock, isForFlowBlock, isTextNodeBlock } from '@type/rvjs.ts'

export const useElement = (block: Block) => {
  if (isElementBlock(block) || isTextNodeBlock(block)) {
    return block.element
  } else if (isForFlowBlock(block)) {
    return block.children
  } else {
    return block.child
  }
}
