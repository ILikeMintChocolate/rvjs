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
  return (
    <Header>
      <HeaderName title="Example" prefix="@rvjs/ui" href="/" />
      <HeaderHr />
      <HeaderNavigation>
        <HeaderMenuItem text="@rvjs/core" href="/" />
        <HeaderMenuItem text="@rvjs/ui" href="/" />
        <SubMenu menuName="hook">
          <SubMenuItem text="useState" href="/useState" />
          <SubMenuItem text="useEffect" href="/useEffect" />
        </SubMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction>
          <LogoGithubIcon style={{ width: '1rem' }} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}

export default HeaderExample
