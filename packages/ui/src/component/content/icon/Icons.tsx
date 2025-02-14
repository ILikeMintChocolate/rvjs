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
import { setSvgProperties } from '@util/svg.ts'

export const ArrowRightIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(arrowRightSvg(), props ?? {})
}

export const ChevronDownIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(chevronDownSvg(), props ?? {})
}

export const CloseIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(closeSvg(), props ?? {})
}

export const CopyIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(copySvg(), props ?? {})
}

export const DocumentIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(documentSvg(), props ?? {})
}

export const LogoGithubIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(logoGithubSvg(), props ?? {})
}

export const LogoNpmIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(logoNpmSvg(), props ?? {})
}

export const MenuIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(menuSvg(), props ?? {})
}

export const SearchIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(searchSvg(), props ?? {})
}

export const TooltipArrowIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(tooltipArrowSvg(), props ?? {})
}

export const WarningAltFilledIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(warningAltFilledSvg(), props ?? {})
}

export const WarningFilledIcon = (props?: Partial<SVGElement>) => {
  return setSvgProperties(warningFilledSvg(), props ?? {})
}
