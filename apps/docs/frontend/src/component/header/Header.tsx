import { header_icon_style } from '@component/header/Header.css.ts'
import { useNavigate, usePathname } from '@rvjs/core'
import { getLocale, t } from '@rvjs/localizer'
import {
  Header as ShellHeader,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderHr,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  LogoGithubIcon,
  LogoNpmIcon,
  MenuIcon,
  SubMenu,
  SubMenuItem,
} from '@rvjs/ui'
import {
  isInCoreJSPage,
  isInCoreJSXPage,
  isInIsJSPage,
  isInUIJSPage,
  isInUIJSXPage,
} from '@util/path.ts'

const Header = () => {
  const navigate = useNavigate()
  const pathname = usePathname()
  const locale = getLocale()

  return (
    <ShellHeader>
      <HeaderMenuButton menuIcon={(<MenuIcon />) as SVGElement} />
      <HeaderName
        title={t('header.title')}
        href={`/${locale()}/core-jsx/overview/gettingStarted`}
        prefix={t('header.prefix')}
      />
      <HeaderHr />
      <HeaderNavigation>
        <HeaderMenuItem
          text="core-jsx"
          href={`/${locale()}/core-jsx/overview/gettingStarted`}
          isActive={isInCoreJSXPage(pathname())}
        />
        <HeaderMenuItem
          text="ui-jsx"
          href={`/${locale()}/ui-jsx/overview/gettingStarted`}
          isActive={isInUIJSXPage(pathname())}
        />
        <SubMenu menuName={t('header.items.legacy')}>
          <SubMenuItem
            text="core-js"
            href={`/${locale()}/core-js/overview/gettingStarted`}
            isActive={isInCoreJSPage(pathname())}
          />
          <SubMenuItem
            text="ui-js"
            href={`/${locale()}/ui-js/overview/gettingStarted`}
            isActive={isInUIJSPage(pathname())}
          />
          <SubMenuItem
            text="is-js"
            href={`/${locale()}/is-js/overview/gettingStarted`}
            isActive={isInIsJSPage(pathname())}
          />
        </SubMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <SubMenu menuName={t('header.items.language')}>
          <SubMenuItem
            text="한국어"
            href={`/ko/${pathname().slice(4)}`}
            isActive={locale() === 'ko'}
          />
        </SubMenu>
        <HeaderGlobalAction
          tooltip="Github"
          onClick={() => navigate('https://github.com/ILikeMintChocolate/rvjs')}
        >
          <LogoGithubIcon className={header_icon_style} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          tooltip="npm"
          onClick={() => navigate('https://npmjs.com/package/@rvjs/core')}
        >
          <LogoNpmIcon className={header_icon_style} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </ShellHeader>
  )
}

export default Header
