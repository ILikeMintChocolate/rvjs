import { svgList } from '@content/icon/Icon.ts'
import { isString } from '@rvjs/is'

export interface IconProps {
  type: keyof typeof svgList
}

export const IconPropsType = {
  type: isString,
}

export const IconRenderProps = {
  type: (p: keyof typeof svgList) => p,
}
