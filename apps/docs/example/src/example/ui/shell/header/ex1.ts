import { div, prop } from '@rvjs/core'
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderHr,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  LogoGithubIcon,
  SubMenu,
  SubMenuItem,
} from '@rvjs/ui'

const HeaderExample = () => {
  return div({
    style: {
      position: 'relative',
      width: '100%',
      height: '200px',
      overflow: 'scroll',
    },
    children: [
      Header({
        children: [
          HeaderName({
            title: prop(() => 'Example'),
            prefix: prop(() => '@rvjs/ui'),
            href: prop(() => '/'),
          }),
          HeaderHr(),
          HeaderNavigation({
            children: [
              HeaderMenuItem({
                text: prop(() => '@rvjs/core'),
                href: prop(() => '/'),
              }),
              HeaderMenuItem({
                text: prop(() => '@rvjs/ui'),
                href: prop(() => '/'),
              }),
              SubMenu({
                menuName: prop(() => 'hook'),
                children: [
                  SubMenuItem({
                    href: prop(() => '/'),
                    text: prop(() => '/useState'),
                  }),
                  SubMenuItem({
                    href: prop(() => '/'),
                    text: prop(() => '/useEffect'),
                  }),
                ],
              }),
            ],
          }),
          HeaderGlobalBar({
            children: [
              HeaderGlobalAction({
                children: [
                  LogoGithubIcon({
                    style: { width: '16px' },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export default HeaderExample
