import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

interface UIJSXSideNavProps {
  depth: number
}

const UIJSXSideNav = (props: UIJSXSideNavProps) => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.overview.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.uiJSX.overview.items.gettingStarted')}
          href={`/${language()}/ui-jsx/overview/gettingStarted`}
          isActive={isPathIncluded(
            '/ui-jsx/overview/gettingStarted',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.cssVars.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="color"
          href={`/${language()}/ui-jsx/vars/color`}
          isActive={isPathIncluded('/ui-jsx/vars/color', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="font"
          href={`/${language()}/ui-jsx/vars/font`}
          isActive={isPathIncluded('/ui-jsx/vars/font', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="opacity"
          href={`/${language()}/ui-jsx/vars/opacity`}
          isActive={isPathIncluded('/ui-jsx/vars/opacity', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="spacing"
          href={`/${language()}/ui-jsx/vars/spacing`}
          isActive={isPathIncluded('/ui-jsx/vars/spacing', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.layout.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Section"
          href={`/${language()}/ui-jsx/layout/section`}
          isActive={isPathIncluded('/ui-jsx/layout/section', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.form.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Button"
          href={`/${language()}/ui-jsx/form/button`}
          isActive={isPathIncluded('/ui-jsx/form/button', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="TextInput"
          href={`/${language()}/ui-jsx/form/textInput`}
          isActive={isPathIncluded('/ui-jsx/form/textInput', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.typography.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Text"
          href={`/${language()}/ui-jsx/typography/text`}
          isActive={isPathIncluded('/ui-jsx/typography/text', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Highlight"
          href={`/${language()}/ui-jsx/typography/highlight`}
          isActive={isPathIncluded('/ui-jsx/typography/highlight', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Link"
          href={`/${language()}/ui-jsx/typography/link`}
          isActive={isPathIncluded('/ui-jsx/typography/link', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="InlineCodeSnippet"
          href={`/${language()}/ui-jsx/typography/inlineCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-jsx/typography/inlineCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="LinkCodeSnippet"
          href={`/${language()}/ui-jsx/typography/linkCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-jsx/typography/linkCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SingleCodeSnippet"
          href={`/${language()}/ui-jsx/typography/singleCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-jsx/typography/singleCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="MultiCodeSnippet"
          href={`/${language()}/ui-jsx/typography/multiCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-jsx/typography/multiCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.content.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="ColorChip"
          href={`/${language()}/ui-jsx/content/colorChip`}
          isActive={isPathIncluded('/ui-jsx/content/colorChip', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Icon"
          href={`/${language()}/ui-jsx/content/icon`}
          isActive={isPathIncluded('/ui-jsx/content/icon', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Iframe"
          href={`/${language()}/ui-jsx/content/iframe`}
          isActive={isPathIncluded('/ui-jsx/content/iframe', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="OrderedList"
          href={`/${language()}/ui-jsx/content/orderedList`}
          isActive={isPathIncluded('/ui-jsx/content/orderedList', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="UnorderedList"
          href={`/${language()}/ui-jsx/content/unorderedList`}
          isActive={isPathIncluded('/ui-jsx/content/unorderedList', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="ListItem"
          href={`/${language()}/ui-jsx/content/listItem`}
          isActive={isPathIncluded('/ui-jsx/content/listItem', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.shell.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Shell"
          href={`/${language()}/ui-jsx/shell/shell`}
          isActive={isPathIncluded('/ui-jsx/shell/shell', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Body"
          href={`/${language()}/ui-jsx/shell/body`}
          isActive={isPathIncluded('/ui-jsx/shell/body', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Header"
          href={`/${language()}/ui-jsx/shell/header`}
          isActive={isPathIncluded('/ui-jsx/shell/header', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderGlobalAction"
          href={`/${language()}/ui-jsx/shell/headerGlobalAction`}
          isActive={isPathIncluded(
            '/ui-jsx/shell/headerGlobalAction',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderGlobalBar"
          href={`/${language()}/ui-jsx/shell/headerGlobalBar`}
          isActive={isPathIncluded('/ui-jsx/shell/headerGlobalBar', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderHr"
          href={`/${language()}/ui-jsx/shell/headerHr`}
          isActive={isPathIncluded('/ui-jsx/shell/headerHr', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderMenuButton"
          href={`/${language()}/ui-jsx/shell/headerMenuButton`}
          isActive={isPathIncluded(
            '/ui-jsx/shell/headerMenuButton',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderMenuItem"
          href={`/${language()}/ui-jsx/shell/headerMenuItem`}
          isActive={isPathIncluded('/ui-jsx/shell/headerMenuItem', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderName"
          href={`/${language()}/ui-jsx/shell/headerName`}
          isActive={isPathIncluded('/ui-jsx/shell/headerName', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderNavigation"
          href={`/${language()}/ui-jsx/shell/headerNavigation`}
          isActive={isPathIncluded(
            '/ui-jsx/shell/headerNavigation',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SubMenu"
          href={`/${language()}/ui-jsx/shell/subMenu`}
          isActive={isPathIncluded('/ui-jsx/shell/subMenu', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SubMenuItem"
          href={`/${language()}/ui-jsx/shell/subMenuItem`}
          isActive={isPathIncluded('/ui-jsx/shell/subMenuItem', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNav"
          href={`/${language()}/ui-jsx/shell/sideNav`}
          isActive={isPathIncluded('/ui-jsx/shell/sideNav', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavItems"
          href={`/${language()}/ui-jsx/shell/sideNavItems`}
          isActive={isPathIncluded('/ui-jsx/shell/sideNavItems', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavLink"
          href={`/${language()}/ui-jsx/shell/sideNavLink`}
          isActive={isPathIncluded('/ui-jsx/shell/sideNavLink', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavMenu"
          href={`/${language()}/ui-jsx/shell/sideNavMenu`}
          isActive={isPathIncluded('/ui-jsx/shell/sideNavMenu', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavMenuItem"
          href={`/${language()}/ui-jsx/shell/sideNavMenuItem`}
          isActive={isPathIncluded('/ui-jsx/shell/sideNavMenuItem', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJSX.overlay.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Tooltip"
          href={`/${language()}/ui-jsx/overlay/tooltip`}
          isActive={isPathIncluded('/ui-jsx/overlay/tooltip', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Spinner"
          href={`/${language()}/ui-jsx/overlay/spinner`}
          isActive={isPathIncluded('/ui-jsx/overlay/spinner', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
    </>
  )
}

export default UIJSXSideNav
