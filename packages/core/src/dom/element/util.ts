import { ElementBlock } from '@block/element.ts'
import { applyPropsToElement } from './property.ts'
import { AllElementProps } from './type.ts'

export const overrideElement = (
  block: ElementBlock,
  props: Partial<AllElementProps>,
) => {
  applyPropsToElement(block, props)
  return block
}
