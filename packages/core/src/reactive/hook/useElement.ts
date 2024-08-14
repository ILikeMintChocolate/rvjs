import { Block } from '@block/block.ts'
import { isElement } from '@type/rvjs.ts'

export const useElement = (block: Block) => {
  if (isElement(block)) {
    return block.element
  }
}
