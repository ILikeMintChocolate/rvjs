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

export const ArrowRightIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(arrowRightSvg(), props ?? {})
}

export const ChevronDownIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(chevronDownSvg(), props ?? {})
}

export const CloseIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(closeSvg(), props ?? {})
}

export const CopyIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(copySvg(), props ?? {})
}

export const DocumentIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(documentSvg(), props ?? {})
}

export const LogoGithubIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(logoGithubSvg(), props ?? {})
}

export const LogoNpmIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(logoNpmSvg(), props ?? {})
}

export const MenuIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(menuSvg(), props ?? {})
}

export const SearchIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(searchSvg(), props ?? {})
}

export const TooltipArrowIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(tooltipArrowSvg(), props ?? {})
}

export const WarningAltFilledIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(warningAltFilledSvg(), props ?? {})
}

export const WarningFilledIcon = (props?: Parameters<typeof svg>[1]) => {
  return svg(warningFilledSvg(), props ?? {})
}
