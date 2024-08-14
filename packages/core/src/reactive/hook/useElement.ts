import { isComponent } from '@component/componentBlock.ts'
import { isElement } from '@element/elementBlock.ts'
import { Block } from '@type/type.ts'

export const useElement = (block: Block) => {
  if (isElement(block)) {
    return block.element
  } else if (isComponent(block)) {
    return block.childElement
  }
}
