import { usePathname } from '@rvjs/core'
import { getLocale, t } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const UIJSSideNav = () => {
  const pathname = usePathname()
  const locale = getLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.uiJS.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.uiJS.overview.items.gettingStarted')}
            href={`/${locale()}/ui-js/overview/gettingStarted`}
            isActive={pathname() === '/ui-js/overview/gettingStarted'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.cssVars.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="color"
            href={`/${locale()}/ui-js/vars/color`}
            isActive={pathname() === '/ui-js/vars/color'}
          />
          <SideNavMenuItem
            text="font"
            href={`/${locale()}/ui-js/vars/font`}
            isActive={pathname() === '/ui-js/vars/font'}
          />
          <SideNavMenuItem
            text="opacity"
            href={`/${locale()}/ui-js/vars/opacity`}
            isActive={pathname() === '/ui-js/vars/opacity'}
          />
          <SideNavMenuItem
            text="spacing"
            href={`/${locale()}/ui-js/vars/spacing`}
            isActive={pathname() === '/ui-js/vars/spacing'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.layout.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Box"
            href={`/${locale()}/ui-js/layout/box`}
            isActive={pathname() === '/ui-js/layout/box'}
          />
          <SideNavMenuItem
            text="Flex"
            href={`/${locale()}/ui-js/layout/flex`}
            isActive={pathname() === '/ui-js/layout/flex'}
          />
          <SideNavMenuItem
            text="Grid"
            href={`/${locale()}/ui-js/layout/grid`}
            isActive={pathname() === '/ui-js/layout/grid'}
          />
          <SideNavMenuItem
            text="Section"
            href={`/${locale()}/ui-js/layout/section`}
            isActive={pathname() === '/ui-js/layout/section'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.form.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Button"
            href={`/${locale()}/ui-js/form/button`}
            isActive={pathname() === '/ui-js/form/button'}
          />
          <SideNavMenuItem
            text="TextInput"
            href={`/${locale()}/ui-js/form/textInput`}
            isActive={pathname() === '/ui-js/form/textInput'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.typography.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Text"
            href={`/${locale()}/ui-js/typography/text`}
            isActive={pathname() === '/ui-js/typography/text'}
          />
          <SideNavMenuItem
            text="Highlight"
            href={`/${locale()}/ui-js/typography/highlight`}
            isActive={pathname() === '/ui-js/typography/highlight'}
          />
          <SideNavMenuItem
            text="Link"
            href={`/${locale()}/ui-js/typography/link`}
            isActive={pathname() === '/ui-js/typography/link'}
          />
          <SideNavMenuItem
            text="InlineCodeSnippet"
            href={`/${locale()}/ui-js/typography/inlineCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/inlineCodeSnippet'}
          />
          <SideNavMenuItem
            text="LinkCodeSnippet"
            href={`/${locale()}/ui-js/typography/linkCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/linkCodeSnippet'}
          />
          <SideNavMenuItem
            text="SingleCodeSnippet"
            href={`/${locale()}/ui-js/typography/singleCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/singleCodeSnippet'}
          />
          <SideNavMenuItem
            text="MultiCodeSnippet"
            href={`/${locale()}/ui-js/typography/multiCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/multiCodeSnippet'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.content.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="ColorChip"
            href={`/${locale()}/ui-js/content/colorChip`}
            isActive={pathname() === '/ui-js/content/colorChip'}
          />
          <SideNavMenuItem
            text="Icon"
            href={`/${locale()}/ui-js/content/icon`}
            isActive={pathname() === '/ui-js/content/icon'}
          />
          <SideNavMenuItem
            text="Iframe"
            href={`/${locale()}/ui-js/content/iframe`}
            isActive={pathname() === '/ui-js/content/iframe'}
          />
          <SideNavMenuItem
            text="OrderedList"
            href={`/${locale()}/ui-js/content/orderedList`}
            isActive={pathname() === '/ui-js/content/orderedList'}
          />
          <SideNavMenuItem
            text="UnorderedList"
            href={`/${locale()}/ui-js/content/unorderedList`}
            isActive={pathname() === '/ui-js/content/unorderedList'}
          />
          <SideNavMenuItem
            text="ListItem"
            href={`/${locale()}/ui-js/content/listItem`}
            isActive={pathname() === '/ui-js/content/listItem'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.shell.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Body"
            href={`/${locale()}/ui-js/shell/body`}
            isActive={pathname() === '/ui-js/shell/body'}
          />
          <SideNavMenuItem
            text="Header"
            href={`/${locale()}/ui-js/shell/header`}
            isActive={pathname() === '/ui-js/shell/header'}
          />
          <SideNavMenuItem
            text="HeaderGlobalAction"
            href={`/${locale()}/ui-js/shell/headerGlobalAction`}
            isActive={pathname() === '/ui-js/shell/headerGlobalAction'}
          />
          <SideNavMenuItem
            text="HeaderGlobalBar"
            href={`/${locale()}/ui-js/shell/headerGlobalBar`}
            isActive={pathname() === '/ui-js/shell/headerGlobalBar'}
          />
          <SideNavMenuItem
            text="HeaderHr"
            href={`/${locale()}/ui-js/shell/headerHr`}
            isActive={pathname() === '/ui-js/shell/headerHr'}
          />
          <SideNavMenuItem
            text="HeaderMenuButton"
            href={`/${locale()}/ui-js/shell/headerMenuButton`}
            isActive={pathname() === '/ui-js/shell/headerMenuButton'}
          />
          <SideNavMenuItem
            text="HeaderMenuItem"
            href={`/${locale()}/ui-js/shell/headerMenuItem`}
            isActive={pathname() === '/ui-js/shell/headerMenuItem'}
          />
          <SideNavMenuItem
            text="HeaderName"
            href={`/${locale()}/ui-js/shell/headerName`}
            isActive={pathname() === '/ui-js/shell/headerName'}
          />
          <SideNavMenuItem
            text="HeaderNavigation"
            href={`/${locale()}/ui-js/shell/headerNavigation`}
            isActive={pathname() === '/ui-js/shell/headerNavigation'}
          />
          <SideNavMenuItem
            text="SubMenu"
            href={`/${locale()}/ui-js/shell/subMenu`}
            isActive={pathname() === '/ui-js/shell/subMenu'}
          />
          <SideNavMenuItem
            text="SubMenuItem"
            href={`/${locale()}/ui-js/shell/subMenuItem`}
            isActive={pathname() === '/ui-js/shell/subMenuItem'}
          />
          <SideNavMenuItem
            text="SideNav"
            href={`/${locale()}/ui-js/shell/sideNav`}
            isActive={pathname() === '/ui-js/shell/sideNav'}
          />
          <SideNavMenuItem
            text="SideNavItems"
            href={`/${locale()}/ui-js/shell/sideNavItems`}
            isActive={pathname() === '/ui-js/shell/sideNavItems'}
          />
          <SideNavMenuItem
            text="SideNavLink"
            href={`/${locale()}/ui-js/shell/sideNavLink`}
            isActive={pathname() === '/ui-js/shell/sideNavLink'}
          />
          <SideNavMenuItem
            text="SideNavMenu"
            href={`/${locale()}/ui-js/shell/sideNavMenu`}
            isActive={pathname() === '/ui-js/shell/sideNavMenu'}
          />
          <SideNavMenuItem
            text="SideNavMenuItem"
            href={`/${locale()}/ui-js/shell/sideNavMenuItem`}
            isActive={pathname() === '/ui-js/shell/sideNavMenuItem'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.overlay.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Tooltip"
            href={`/${locale()}/ui-js/overlay/tooltip`}
            isActive={pathname() === '/ui-js/overlay/tooltip'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.util.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="renderComponentFromJSON"
            href={`/${locale()}/ui-js/util/renderComponentFromJSON`}
            isActive={pathname() === '/ui-js/util/renderComponentFromJSON'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default UIJSSideNav
