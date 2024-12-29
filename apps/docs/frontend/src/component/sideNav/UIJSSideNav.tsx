import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const UIJSSideNav = () => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.uiJS.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.uiJS.overview.items.gettingStarted')}
            href={`/${language()}/ui-js/overview/gettingStarted`}
            isActive={pathname() === '/ui-js/overview/gettingStarted'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.cssVars.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="color"
            href={`/${language()}/ui-js/vars/color`}
            isActive={pathname() === '/ui-js/vars/color'}
          />
          <SideNavMenuItem
            text="font"
            href={`/${language()}/ui-js/vars/font`}
            isActive={pathname() === '/ui-js/vars/font'}
          />
          <SideNavMenuItem
            text="opacity"
            href={`/${language()}/ui-js/vars/opacity`}
            isActive={pathname() === '/ui-js/vars/opacity'}
          />
          <SideNavMenuItem
            text="spacing"
            href={`/${language()}/ui-js/vars/spacing`}
            isActive={pathname() === '/ui-js/vars/spacing'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.layout.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Box"
            href={`/${language()}/ui-js/layout/box`}
            isActive={pathname() === '/ui-js/layout/box'}
          />
          <SideNavMenuItem
            text="Flex"
            href={`/${language()}/ui-js/layout/flex`}
            isActive={pathname() === '/ui-js/layout/flex'}
          />
          <SideNavMenuItem
            text="Grid"
            href={`/${language()}/ui-js/layout/grid`}
            isActive={pathname() === '/ui-js/layout/grid'}
          />
          <SideNavMenuItem
            text="Section"
            href={`/${language()}/ui-js/layout/section`}
            isActive={pathname() === '/ui-js/layout/section'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.form.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Button"
            href={`/${language()}/ui-js/form/button`}
            isActive={pathname() === '/ui-js/form/button'}
          />
          <SideNavMenuItem
            text="TextInput"
            href={`/${language()}/ui-js/form/textInput`}
            isActive={pathname() === '/ui-js/form/textInput'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.typography.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Text"
            href={`/${language()}/ui-js/typography/text`}
            isActive={pathname() === '/ui-js/typography/text'}
          />
          <SideNavMenuItem
            text="Highlight"
            href={`/${language()}/ui-js/typography/highlight`}
            isActive={pathname() === '/ui-js/typography/highlight'}
          />
          <SideNavMenuItem
            text="Link"
            href={`/${language()}/ui-js/typography/link`}
            isActive={pathname() === '/ui-js/typography/link'}
          />
          <SideNavMenuItem
            text="InlineCodeSnippet"
            href={`/${language()}/ui-js/typography/inlineCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/inlineCodeSnippet'}
          />
          <SideNavMenuItem
            text="LinkCodeSnippet"
            href={`/${language()}/ui-js/typography/linkCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/linkCodeSnippet'}
          />
          <SideNavMenuItem
            text="SingleCodeSnippet"
            href={`/${language()}/ui-js/typography/singleCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/singleCodeSnippet'}
          />
          <SideNavMenuItem
            text="MultiCodeSnippet"
            href={`/${language()}/ui-js/typography/multiCodeSnippet`}
            isActive={pathname() === '/ui-js/typography/multiCodeSnippet'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.content.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="ColorChip"
            href={`/${language()}/ui-js/content/colorChip`}
            isActive={pathname() === '/ui-js/content/colorChip'}
          />
          <SideNavMenuItem
            text="Icon"
            href={`/${language()}/ui-js/content/icon`}
            isActive={pathname() === '/ui-js/content/icon'}
          />
          <SideNavMenuItem
            text="Iframe"
            href={`/${language()}/ui-js/content/iframe`}
            isActive={pathname() === '/ui-js/content/iframe'}
          />
          <SideNavMenuItem
            text="OrderedList"
            href={`/${language()}/ui-js/content/orderedList`}
            isActive={pathname() === '/ui-js/content/orderedList'}
          />
          <SideNavMenuItem
            text="UnorderedList"
            href={`/${language()}/ui-js/content/unorderedList`}
            isActive={pathname() === '/ui-js/content/unorderedList'}
          />
          <SideNavMenuItem
            text="ListItem"
            href={`/${language()}/ui-js/content/listItem`}
            isActive={pathname() === '/ui-js/content/listItem'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.shell.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Body"
            href={`/${language()}/ui-js/shell/body`}
            isActive={pathname() === '/ui-js/shell/body'}
          />
          <SideNavMenuItem
            text="Header"
            href={`/${language()}/ui-js/shell/header`}
            isActive={pathname() === '/ui-js/shell/header'}
          />
          <SideNavMenuItem
            text="HeaderGlobalAction"
            href={`/${language()}/ui-js/shell/headerGlobalAction`}
            isActive={pathname() === '/ui-js/shell/headerGlobalAction'}
          />
          <SideNavMenuItem
            text="HeaderGlobalBar"
            href={`/${language()}/ui-js/shell/headerGlobalBar`}
            isActive={pathname() === '/ui-js/shell/headerGlobalBar'}
          />
          <SideNavMenuItem
            text="HeaderHr"
            href={`/${language()}/ui-js/shell/headerHr`}
            isActive={pathname() === '/ui-js/shell/headerHr'}
          />
          <SideNavMenuItem
            text="HeaderMenuButton"
            href={`/${language()}/ui-js/shell/headerMenuButton`}
            isActive={pathname() === '/ui-js/shell/headerMenuButton'}
          />
          <SideNavMenuItem
            text="HeaderMenuItem"
            href={`/${language()}/ui-js/shell/headerMenuItem`}
            isActive={pathname() === '/ui-js/shell/headerMenuItem'}
          />
          <SideNavMenuItem
            text="HeaderName"
            href={`/${language()}/ui-js/shell/headerName`}
            isActive={pathname() === '/ui-js/shell/headerName'}
          />
          <SideNavMenuItem
            text="HeaderNavigation"
            href={`/${language()}/ui-js/shell/headerNavigation`}
            isActive={pathname() === '/ui-js/shell/headerNavigation'}
          />
          <SideNavMenuItem
            text="SubMenu"
            href={`/${language()}/ui-js/shell/subMenu`}
            isActive={pathname() === '/ui-js/shell/subMenu'}
          />
          <SideNavMenuItem
            text="SubMenuItem"
            href={`/${language()}/ui-js/shell/subMenuItem`}
            isActive={pathname() === '/ui-js/shell/subMenuItem'}
          />
          <SideNavMenuItem
            text="SideNav"
            href={`/${language()}/ui-js/shell/sideNav`}
            isActive={pathname() === '/ui-js/shell/sideNav'}
          />
          <SideNavMenuItem
            text="SideNavItems"
            href={`/${language()}/ui-js/shell/sideNavItems`}
            isActive={pathname() === '/ui-js/shell/sideNavItems'}
          />
          <SideNavMenuItem
            text="SideNavLink"
            href={`/${language()}/ui-js/shell/sideNavLink`}
            isActive={pathname() === '/ui-js/shell/sideNavLink'}
          />
          <SideNavMenuItem
            text="SideNavMenu"
            href={`/${language()}/ui-js/shell/sideNavMenu`}
            isActive={pathname() === '/ui-js/shell/sideNavMenu'}
          />
          <SideNavMenuItem
            text="SideNavMenuItem"
            href={`/${language()}/ui-js/shell/sideNavMenuItem`}
            isActive={pathname() === '/ui-js/shell/sideNavMenuItem'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.overlay.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Tooltip"
            href={`/${language()}/ui-js/overlay/tooltip`}
            isActive={pathname() === '/ui-js/overlay/tooltip'}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.util.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="renderComponentFromJSON"
            href={`/${language()}/ui-js/util/renderComponentFromJSON`}
            isActive={pathname() === '/ui-js/util/renderComponentFromJSON'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default UIJSSideNav
