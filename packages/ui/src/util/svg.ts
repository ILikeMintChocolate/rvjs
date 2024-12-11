import { spread } from '@rvjs/core'
import { SvgProperties } from 'csstype'

export const createSvg = (html: string) => {
  const tempElement = document.createElement('div')
  tempElement.innerHTML = html
  return tempElement.childNodes[0]
}

export const setSvgProperties = (svg: SVGElement, props: SvgProperties) => {
  if (props) {
    // @ts-ignore
    spread(svg, props)
  }
  return svg
}
