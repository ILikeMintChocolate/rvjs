import { isComponent } from '@component/componentBlock.ts'
import { Block } from '@dom/type.ts'
import { isElement } from '@element/elementBlock.ts'

export const useElement = (block: Block) => {
  if (isElement(block)) {
    return block.element
  } else if (isComponent(block)) {
    return block.childElement
  }
}
