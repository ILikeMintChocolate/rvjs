import { Element } from '@element/elementBlock.ts'
import { applyPropsToElement } from '@element/property.ts'
import { AllElementProps } from '@element/type.ts'

export const overrideElement = (
  block: Element,
  props: Partial<AllElementProps>,
) => {
  applyPropsToElement(block, props)
  return block
}
