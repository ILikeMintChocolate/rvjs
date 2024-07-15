import { Element } from '@element/elementBlock.ts'
import { applyPropsToElement } from '@element/property.ts'
import { ElementProps, SvgProps } from '@element/type.ts'

export const createElement = <TagName extends keyof HTMLElementTagNameMap>(
  tagName: TagName,
  props: Partial<ElementProps<TagName>> = {},
) => {
  const block = new Element({ element: document.createElement(tagName) })
  applyPropsToElement(block, props)
  return block
}

export const createSvgElement = (
  svgElement: SVGElement,
  props: Partial<SvgProps> = {},
) => {
  // @ts-ignore
  const block = new Element({ element: svgElement.cloneNode(true) })
  applyPropsToElement(block, props)
  return block
}
