import { div } from '@rvjs/core'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  CopyIcon,
  DocumentIcon,
  LogoGithubIcon,
  LogoNpmIcon,
  MenuIcon,
  SearchIcon,
  TooltipArrowIcon,
  WarningAltFilledIcon,
  WarningFilledIcon,
} from '@rvjs/ui'

const IconsExample = () => {
  const iconStyle = {
    width: '32px',
    height: '32px',
  }

  return div({
    children: [
      ArrowRightIcon({ style: iconStyle }),
      ChevronDownIcon({ style: iconStyle }),
      CloseIcon({ style: iconStyle }),
      CopyIcon({ style: iconStyle }),
      DocumentIcon({ style: iconStyle }),
      LogoGithubIcon({ style: iconStyle }),
      LogoNpmIcon({ style: iconStyle }),
      MenuIcon({ style: iconStyle }),
      SearchIcon({ style: iconStyle }),
      TooltipArrowIcon({ style: iconStyle }),
      WarningAltFilledIcon({ style: iconStyle }),
      WarningFilledIcon({ style: iconStyle }),
    ],
  })
}

export default IconsExample
