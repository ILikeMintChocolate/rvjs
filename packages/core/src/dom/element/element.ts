import { ElementBlock } from '@block/element.ts'
import { applyPropsToElement } from './property.ts'
import { ElementProps, SvgProps } from './type.ts'

export const createElement = <TagName extends keyof HTMLElementTagNameMap>(
  tagName: TagName,
  props: Partial<ElementProps<TagName>> = {},
) => {
  const block = new ElementBlock({ element: document.createElement(tagName) })
  applyPropsToElement(block, props)
  return block
}

export const createSvgElement = (
  svgElement: SVGElement,
  props: Partial<SvgProps> = {},
) => {
  // @ts-ignore
  const block = new ElementBlock({ element: svgElement.cloneNode(true) })
  applyPropsToElement(block, props)
  return block
}
