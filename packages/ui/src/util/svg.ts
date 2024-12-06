import { spread } from '@rvjs/core'
import { SvgProperties } from 'csstype'

export const setSvgProperties = (svg: SVGElement, props: SvgProperties) => {
  if (props) {
    // @ts-ignore
    spread(svg, props)
  }
  return svg
}
