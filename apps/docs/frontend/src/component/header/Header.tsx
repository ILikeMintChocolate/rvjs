import { header_icon_style } from '@component/header/Header.css.ts'
import { useNavigate, usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
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
import { getDeviceType } from '@util/device.ts'
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
  const { language } = useLocale()

  if (getDeviceType() === 'desktop') {
    return (
      <ShellHeader>
        <HeaderMenuButton menuIcon={(<MenuIcon />) as SVGElement} />
        <HeaderName
          title={t('header.title')}
          href={`/${language()}/core-jsx/overview/gettingStarted`}
          prefix={t('header.prefix')}
          deviceType={getDeviceType()}
        />
        <HeaderHr />
        <HeaderNavigation>
          <HeaderMenuItem
            text="core-jsx"
            href={`/${language()}/core-jsx/overview/gettingStarted`}
            isActive={isInCoreJSXPage(pathname())}
          />
          <HeaderMenuItem
            text="ui-jsx"
            href={`/${language()}/ui-jsx/overview/gettingStarted`}
            isActive={isInUIJSXPage(pathname())}
          />
          <SubMenu menuName={t('header.items.legacy')}>
            <SubMenuItem
              text="core-js"
              href={`/${language()}/core-js/overview/gettingStarted`}
              isActive={isInCoreJSPage(pathname())}
            />
            <SubMenuItem
              text="ui-js"
              href={`/${language()}/ui-js/overview/gettingStarted`}
              isActive={isInUIJSPage(pathname())}
            />
            <SubMenuItem
              text="is-js"
              href={`/${language()}/is-js/overview/gettingStarted`}
              isActive={isInIsJSPage(pathname())}
            />
          </SubMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <SubMenu menuName={t('header.items.language')}>
            <SubMenuItem
              text="한국어"
              href={`/ko/${pathname().slice(4)}`}
              isActive={language() === 'ko'}
            />
          </SubMenu>
          <HeaderGlobalAction
            tooltip="Github"
            onClick={() =>
              navigate('https://github.com/ILikeMintChocolate/rvjs', true)
            }
          >
            <LogoGithubIcon className={header_icon_style} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            tooltip="npm"
            onClick={() =>
              navigate('https://npmjs.com/package/@rvjs/core', true)
            }
          >
            <LogoNpmIcon className={header_icon_style} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </ShellHeader>
    )
  } else if (getDeviceType() === 'mobile') {
    return (
      <ShellHeader>
        <HeaderMenuButton menuIcon={(<MenuIcon />) as SVGElement} />
        <HeaderName
          title={t('header.title')}
          href={`/${language()}/core-jsx/overview/gettingStarted`}
          prefix={t('header.prefix')}
          deviceType={getDeviceType()}
        />
        <div style={{ flex: 1 }} />
        <HeaderGlobalBar>
          <HeaderGlobalAction
            onClick={() =>
              navigate('https://github.com/ILikeMintChocolate/rvjs', true)
            }
          >
            <LogoGithubIcon className={header_icon_style} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            onClick={() =>
              navigate('https://npmjs.com/package/@rvjs/core', true)
            }
          >
            <LogoNpmIcon className={header_icon_style} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </ShellHeader>
    )
  }
}

export default Header
