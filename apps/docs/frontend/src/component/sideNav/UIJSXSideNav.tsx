import { usePathname } from '@rvjs/core'
import { getLocale, t } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const UIJSXSideNav = () => {
  const pathname = usePathname()
  const locale = getLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.uiJSX.overview.items.gettingStarted')}
            href={`/${locale()}/ui-jsx/overview/gettingStarted`}
            isActive={pathname() === '/ui-jsx/overview/gettingStarted'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.cssVars.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="color"
            href={`/${locale()}/ui-jsx/vars/color`}
            isActive={pathname() === '/ui-jsx/vars/color'}
          />
          <SideNavMenuItem
            text="font"
            href={`/${locale()}/ui-jsx/vars/font`}
            isActive={pathname() === '/ui-jsx/vars/font'}
          />
          <SideNavMenuItem
            text="opacity"
            href={`/${locale()}/ui-jsx/vars/opacity`}
            isActive={pathname() === '/ui-jsx/vars/opacity'}
          />
          <SideNavMenuItem
            text="spacing"
            href={`/${locale()}/ui-jsx/vars/spacing`}
            isActive={pathname() === '/ui-jsx/vars/spacing'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.layout.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Section"
            href={`/${locale()}/ui-jsx/layout/section`}
            isActive={pathname() === '/ui-jsx/layout/section'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.form.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Button"
            href={`/${locale()}/ui-jsx/form/button`}
            isActive={pathname() === '/ui-jsx/form/button'}
          />
          <SideNavMenuItem
            text="TextInput"
            href={`/${locale()}/ui-jsx/form/textInput`}
            isActive={pathname() === '/ui-jsx/form/textInput'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.typography.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Text"
            href={`/${locale()}/ui-jsx/typography/text`}
            isActive={pathname() === '/ui-jsx/typography/text'}
          />
          <SideNavMenuItem
            text="Highlight"
            href={`/${locale()}/ui-jsx/typography/highlight`}
            isActive={pathname() === '/ui-jsx/typography/highlight'}
          />
          <SideNavMenuItem
            text="Link"
            href={`/${locale()}/ui-jsx/typography/link`}
            isActive={pathname() === '/ui-jsx/typography/link'}
          />
          <SideNavMenuItem
            text="InlineCodeSnippet"
            href={`/${locale()}/ui-jsx/typography/inlineCodeSnippet`}
            isActive={pathname() === '/ui-jsx/typography/inlineCodeSnippet'}
          />
          <SideNavMenuItem
            text="LinkCodeSnippet"
            href={`/${locale()}/ui-jsx/typography/linkCodeSnippet`}
            isActive={pathname() === '/ui-jsx/typography/linkCodeSnippet'}
          />
          <SideNavMenuItem
            text="SingleCodeSnippet"
            href={`/${locale()}/ui-jsx/typography/singleCodeSnippet`}
            isActive={pathname() === '/ui-jsx/typography/singleCodeSnippet'}
          />
          <SideNavMenuItem
            text="MultiCodeSnippet"
            href={`/${locale()}/ui-jsx/typography/multiCodeSnippet`}
            isActive={pathname() === '/ui-jsx/typography/multiCodeSnippet'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.content.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="ColorChip"
            href={`/${locale()}/ui-jsx/content/colorChip`}
            isActive={pathname() === '/ui-jsx/content/colorChip'}
          />
          <SideNavMenuItem
            text="Icon"
            href={`/${locale()}/ui-jsx/content/icon`}
            isActive={pathname() === '/ui-jsx/content/icon'}
          />
          <SideNavMenuItem
            text="Iframe"
            href={`/${locale()}/ui-jsx/content/iframe`}
            isActive={pathname() === '/ui-jsx/content/iframe'}
          />
          <SideNavMenuItem
            text="OrderedList"
            href={`/${locale()}/ui-jsx/content/orderedList`}
            isActive={pathname() === '/ui-jsx/content/orderedList'}
          />
          <SideNavMenuItem
            text="UnorderedList"
            href={`/${locale()}/ui-jsx/content/unorderedList`}
            isActive={pathname() === '/ui-jsx/content/unorderedList'}
          />
          <SideNavMenuItem
            text="ListItem"
            href={`/${locale()}/ui-jsx/content/listItem`}
            isActive={pathname() === '/ui-jsx/content/listItem'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.shell.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Shell"
            href={`/${locale()}/ui-jsx/shell/shell`}
            isActive={pathname() === '/ui-jsx/shell/shell'}
          />
          <SideNavMenuItem
            text="Body"
            href={`/${locale()}/ui-jsx/shell/body`}
            isActive={pathname() === '/ui-jsx/shell/body'}
          />
          <SideNavMenuItem
            text="Header"
            href={`/${locale()}/ui-jsx/shell/header`}
            isActive={pathname() === '/ui-jsx/shell/header'}
          />
          <SideNavMenuItem
            text="HeaderGlobalAction"
            href={`/${locale()}/ui-jsx/shell/headerGlobalAction`}
            isActive={pathname() === '/ui-jsx/shell/headerGlobalAction'}
          />
          <SideNavMenuItem
            text="HeaderGlobalBar"
            href={`/${locale()}/ui-jsx/shell/headerGlobalBar`}
            isActive={pathname() === '/ui-jsx/shell/headerGlobalBar'}
          />
          <SideNavMenuItem
            text="HeaderHr"
            href={`/${locale()}/ui-jsx/shell/headerHr`}
            isActive={pathname() === '/ui-jsx/shell/headerHr'}
          />
          <SideNavMenuItem
            text="HeaderMenuButton"
            href={`/${locale()}/ui-jsx/shell/headerMenuButton`}
            isActive={pathname() === '/ui-jsx/shell/headerMenuButton'}
          />
          <SideNavMenuItem
            text="HeaderMenuItem"
            href={`/${locale()}/ui-jsx/shell/headerMenuItem`}
            isActive={pathname() === '/ui-jsx/shell/headerMenuItem'}
          />
          <SideNavMenuItem
            text="HeaderName"
            href={`/${locale()}/ui-jsx/shell/headerName`}
            isActive={pathname() === '/ui-jsx/shell/headerName'}
          />
          <SideNavMenuItem
            text="HeaderNavigation"
            href={`/${locale()}/ui-jsx/shell/headerNavigation`}
            isActive={pathname() === '/ui-jsx/shell/headerNavigation'}
          />
          <SideNavMenuItem
            text="SubMenu"
            href={`/${locale()}/ui-jsx/shell/subMenu`}
            isActive={pathname() === '/ui-jsx/shell/subMenu'}
          />
          <SideNavMenuItem
            text="SubMenuItem"
            href={`/${locale()}/ui-jsx/shell/subMenuItem`}
            isActive={pathname() === '/ui-jsx/shell/subMenuItem'}
          />
          <SideNavMenuItem
            text="SideNav"
            href={`/${locale()}/ui-jsx/shell/sideNav`}
            isActive={pathname() === '/ui-jsx/shell/sideNav'}
          />
          <SideNavMenuItem
            text="SideNavItems"
            href={`/${locale()}/ui-jsx/shell/sideNavItems`}
            isActive={pathname() === '/ui-jsx/shell/sideNavItems'}
          />
          <SideNavMenuItem
            text="SideNavLink"
            href={`/${locale()}/ui-jsx/shell/sideNavLink`}
            isActive={pathname() === '/ui-jsx/shell/sideNavLink'}
          />
          <SideNavMenuItem
            text="SideNavMenu"
            href={`/${locale()}/ui-jsx/shell/sideNavMenu`}
            isActive={pathname() === '/ui-jsx/shell/sideNavMenu'}
          />
          <SideNavMenuItem
            text="SideNavMenuItem"
            href={`/${locale()}/ui-jsx/shell/sideNavMenuItem`}
            isActive={pathname() === '/ui-jsx/shell/sideNavMenuItem'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.overlay.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Tooltip"
            href={`/${locale()}/ui-jsx/overlay/tooltip`}
            isActive={pathname() === '/ui-jsx/overlay/tooltip'}
          />
          <SideNavMenuItem
            text="Spinner"
            href={`/${locale()}/ui-jsx/overlay/spinner`}
            isActive={pathname() === '/ui-jsx/overlay/spinner'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default UIJSXSideNav
