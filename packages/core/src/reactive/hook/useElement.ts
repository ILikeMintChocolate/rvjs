import { Block } from '@block/block.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'

export const useElement = (block: Block) => {
  if (isElementBlock(block) || isTextNodeBlock(block)) {
    return [block.element]
  } else {
    return block.getChildNodes()
  }
}
