import { Element } from './elementBlock.ts'
import { applyPropsToElement } from './property.ts'
import { AllElementProps } from './type.ts'

export const overrideElement = (
  block: Element,
  props: Partial<AllElementProps>,
) => {
  applyPropsToElement(block, props)
  return block
}
