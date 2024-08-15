import { IconProps, IconPropsType } from '@content/icon/Icon.props.ts'
import arrowRightSvg from '@icon/arrow--right.svg?element'
import chevronDownSvg from '@icon/chevron--down.svg?element'
import closeSvg from '@icon/close.svg?element'
import copySvg from '@icon/copy.svg?element'
import documentSvg from '@icon/document.svg?element'
import logoGithubSvg from '@icon/logo--github.svg?element'
import logoNpmSvg from '@icon/logo--npm.svg?element'
import menuSvg from '@icon/menu.svg?element'
import searchSvg from '@icon/search.svg?element'
import tooltipArrowSvg from '@icon/tooltip--arrow.svg?element'
import warningAltFilledSvg from '@icon/warning--alt--filled.svg?element'
import warningFilledSvg from '@icon/warning--filled.svg?element'
import { svg } from '@rvjs/core'
import { checkProps } from '@rvjs/is'

export const svgList = {
  'arrow-right': arrowRightSvg,
  'chevron-down': chevronDownSvg,
  close: closeSvg,
  copy: copySvg,
  document: documentSvg,
  'logo-github': logoGithubSvg,
  'logo-npm': logoNpmSvg,
  menu: menuSvg,
  search: searchSvg,
  'tooltip-arrow': tooltipArrowSvg,
  'warning-alt-filled': warningAltFilledSvg,
  'warning-filled': warningFilledSvg,
}

const Icon = (props: IconProps) => {
  const { type, ...restProps } = checkProps(props, IconPropsType, {
    errorOnNoValidator: false,
  })

  return svg(svgList[type], restProps)
}

export default Icon
