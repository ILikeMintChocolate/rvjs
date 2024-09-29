import githubSvg from '@icon/logo--github.svg?element'
import npmSvg from '@icon/logo--npm.svg?element'
import menuSvg from '@icon/menu.svg?element'
import { component, prop, svg, useNavigate, usePathname } from '@rvjs/core'
import {
  Header as ShellHeader,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderHr,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
} from '@rvjs/ui'
import { isInCorePage, isInIsPage, isInUIPage } from '@util/path.ts'

const Header = component(() => {
  const navigate = useNavigate()
  const pathname = usePathname()

  return ShellHeader({
    children: [
      HeaderMenuButton({
        menuIcon: menuSvg,
      }),
      HeaderName({
        title: prop(() => 'Documentation'),
        href: prop(() => '/core/gettingStarted'),
        prefix: prop(() => 'rvjs'),
      }),
      HeaderHr(),
      HeaderNavigation({
        children: [
          HeaderMenuItem({
            text: prop(() => 'Core'),
            href: prop(() => '/core/gettingStarted'),
            isActive: prop(() => isInCorePage(pathname())),
          }),
          HeaderMenuItem({
            text: prop(() => 'UI'),
            href: prop(() => '/ui/gettingStarted'),
            isActive: prop(() => isInUIPage(pathname())),
          }),
          HeaderMenuItem({
            text: prop(() => 'Is'),
            href: prop(() => '/is/gettingStarted'),
            isActive: prop(() => isInIsPage(pathname())),
          }),
        ],
      }),
      HeaderGlobalBar({
        children: [
          HeaderGlobalAction({
            tooltip: prop(() => 'Github'),
            onClick: () => {
              navigate('https://github.com/ILikeMintChocolate/rvjs')
            },
            children: [
              svg(githubSvg, {
                style: {
                  width: '20',
                  height: '20',
                },
              }),
            ],
          }),
          HeaderGlobalAction({
            tooltip: prop(() => 'npm'),
            onClick: () => {
              navigate('https://npmjs.com/package/@rvjs/core')
            },
            children: [
              svg(npmSvg, {
                style: {
                  width: '20',
                  height: '20',
                },
              }),
            ],
          }),
        ],
      }),
    ],
  })
})

export default Header
