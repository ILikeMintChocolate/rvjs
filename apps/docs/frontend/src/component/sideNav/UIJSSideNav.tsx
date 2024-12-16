import { usePathname } from '@rvjs/core'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'

const UIJSSideNav = () => {
  const pathname = usePathname()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu menuName="Overview" defaultShow={true}>
          <SideNavMenuItem
            text="Getting Started"
            href="/ui-js/overview/gettingStarted"
            isActive={pathname() === '/ui-js/overview/gettingStarted'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="CSS Variables" defaultShow={true}>
          <SideNavMenuItem
            text="color"
            href="/ui-js/vars/color"
            isActive={pathname() === '/ui-js/vars/color'}
          />
          <SideNavMenuItem
            text="font"
            href="/ui-js/vars/font"
            isActive={pathname() === '/ui-js/vars/font'}
          />
          <SideNavMenuItem
            text="opacity"
            href="/ui-js/vars/opacity"
            isActive={pathname() === '/ui-js/vars/opacity'}
          />
          <SideNavMenuItem
            text="spacing"
            href="/ui-js/vars/spacing"
            isActive={pathname() === '/ui-js/vars/spacing'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Layout" defaultShow={true}>
          <SideNavMenuItem
            text="Box"
            href="/ui-js/layout/box"
            isActive={pathname() === '/ui-js/layout/box'}
          />
          <SideNavMenuItem
            text="Flex"
            href="/ui-js/layout/flex"
            isActive={pathname() === '/ui-js/layout/flex'}
          />
          <SideNavMenuItem
            text="Grid"
            href="/ui-js/layout/grid"
            isActive={pathname() === '/ui-js/layout/grid'}
          />
          <SideNavMenuItem
            text="Section"
            href="/ui-js/layout/section"
            isActive={pathname() === '/ui-js/layout/section'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Form" defaultShow={true}>
          <SideNavMenuItem
            text="Button"
            href="/ui-js/form/button"
            isActive={pathname() === '/ui-js/form/button'}
          />
          <SideNavMenuItem
            text="TextInput"
            href="/ui-js/form/textInput"
            isActive={pathname() === '/ui-js/form/textInput'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Typography" defaultShow={true}>
          <SideNavMenuItem
            text="Text"
            href="/ui-js/typography/text"
            isActive={pathname() === '/ui-js/typography/text'}
          />
          <SideNavMenuItem
            text="Highlight"
            href="/ui-js/typography/highlight"
            isActive={pathname() === '/ui-js/typography/highlight'}
          />
          <SideNavMenuItem
            text="Link"
            href="/ui-js/typography/link"
            isActive={pathname() === '/ui-js/typography/link'}
          />
          <SideNavMenuItem
            text="InlineCodeSnippet"
            href="/ui-js/typography/inlineCodeSnippet"
            isActive={pathname() === '/ui-js/typography/inlineCodeSnippet'}
          />
          <SideNavMenuItem
            text="LinkCodeSnippet"
            href="/ui-js/typography/linkCodeSnippet"
            isActive={pathname() === '/ui-js/typography/linkCodeSnippet'}
          />
          <SideNavMenuItem
            text="SingleCodeSnippet"
            href="/ui-js/typography/singleCodeSnippet"
            isActive={pathname() === '/ui-js/typography/singleCodeSnippet'}
          />
          <SideNavMenuItem
            text="MultiCodeSnippet"
            href="/ui-js/typography/multiCodeSnippet"
            isActive={pathname() === '/ui-js/typography/multiCodeSnippet'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Content" defaultShow={true}>
          <SideNavMenuItem
            text="ColorChip"
            href="/ui-js/content/colorChip"
            isActive={pathname() === '/ui-js/content/colorChip'}
          />
          <SideNavMenuItem
            text="Icon"
            href="/ui-js/content/icon"
            isActive={pathname() === '/ui-js/content/icon'}
          />
          <SideNavMenuItem
            text="Iframe"
            href="/ui-js/content/iframe"
            isActive={pathname() === '/ui-js/content/iframe'}
          />
          <SideNavMenuItem
            text="OrderedList"
            href="/ui-js/content/orderedList"
            isActive={pathname() === '/ui-js/content/orderedList'}
          />
          <SideNavMenuItem
            text="UnorderedList"
            href="/ui-js/content/unorderedList"
            isActive={pathname() === '/ui-js/content/unorderedList'}
          />
          <SideNavMenuItem
            text="ListItem"
            href="/ui-js/content/listItem"
            isActive={pathname() === '/ui-js/content/listItem'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Shell" defaultShow={true}>
          <SideNavMenuItem
            text="Body"
            href="/ui-js/shell/body"
            isActive={pathname() === '/ui-js/shell/body'}
          />
          <SideNavMenuItem
            text="Header"
            href="/ui-js/shell/header"
            isActive={pathname() === '/ui-js/shell/header'}
          />
          <SideNavMenuItem
            text="HeaderGlobalAction"
            href="/ui-js/shell/headerGlobalAction"
            isActive={pathname() === '/ui-js/shell/headerGlobalAction'}
          />
          <SideNavMenuItem
            text="HeaderGlobalBar"
            href="/ui-js/shell/headerGlobalBar"
            isActive={pathname() === '/ui-js/shell/headerGlobalBar'}
          />
          <SideNavMenuItem
            text="HeaderHr"
            href="/ui-js/shell/headerHr"
            isActive={pathname() === '/ui-js/shell/headerHr'}
          />
          <SideNavMenuItem
            text="HeaderMenuButton"
            href="/ui-js/shell/headerMenuButton"
            isActive={pathname() === '/ui-js/shell/headerMenuButton'}
          />
          <SideNavMenuItem
            text="HeaderMenuItem"
            href="/ui-js/shell/headerMenuItem"
            isActive={pathname() === '/ui-js/shell/headerMenuItem'}
          />
          <SideNavMenuItem
            text="HeaderName"
            href="/ui-js/shell/headerName"
            isActive={pathname() === '/ui-js/shell/headerName'}
          />
          <SideNavMenuItem
            text="HeaderNavigation"
            href="/ui-js/shell/headerNavigation"
            isActive={pathname() === '/ui-js/shell/headerNavigation'}
          />
          <SideNavMenuItem
            text="SubMenu"
            href="/ui-js/shell/subMenu"
            isActive={pathname() === '/ui-js/shell/subMenu'}
          />
          <SideNavMenuItem
            text="SubMenuItem"
            href="/ui-js/shell/subMenuItem"
            isActive={pathname() === '/ui-js/shell/subMenuItem'}
          />
          <SideNavMenuItem
            text="SideNav"
            href="/ui-js/shell/sideNav"
            isActive={pathname() === '/ui-js/shell/sideNav'}
          />
          <SideNavMenuItem
            text="SideNavItems"
            href="/ui-js/shell/sideNavItems"
            isActive={pathname() === '/ui-js/shell/sideNavItems'}
          />
          <SideNavMenuItem
            text="SideNavLink"
            href="/ui-js/shell/sideNavLink"
            isActive={pathname() === '/ui-js/shell/sideNavLink'}
          />
          <SideNavMenuItem
            text="SideNavMenu"
            href="/ui-js/shell/sideNavMenu"
            isActive={pathname() === '/ui-js/shell/sideNavMenu'}
          />
          <SideNavMenuItem
            text="SideNavMenuItem"
            href="/ui-js/shell/sideNavMenuItem"
            isActive={pathname() === '/ui-js/shell/sideNavMenuItem'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Overlay" defaultShow={true}>
          <SideNavMenuItem
            text="Tooltip"
            href="/ui-js/overlay/tooltip"
            isActive={pathname() === '/ui-js/overlay/tooltip'}
          />
        </SideNavMenu>
        <SideNavMenu menuName="Util" defaultShow={true}>
          <SideNavMenuItem
            text="renderComponentFromJSON"
            href="/ui-js/util/renderComponentFromJSON"
            isActive={pathname() === '/ui-js/util/renderComponentFromJSON'}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default UIJSSideNav
