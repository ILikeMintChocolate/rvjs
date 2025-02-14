import { spread } from '@rvjs/core'

export const createSvg = (html: string) => {
  const tempElement = document.createElement('div')
  tempElement.innerHTML = html
  return tempElement.childNodes[0]
}

export const setSvgProperties = (svg: SVGElement, props: Partial<SVGElement>) => {
  if(props) {
    // @ts-ignore
    spread(svg, props)
  }
  return svg
}
