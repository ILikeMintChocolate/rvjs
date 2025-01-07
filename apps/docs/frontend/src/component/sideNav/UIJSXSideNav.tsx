import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

const UIJSXSideNav = () => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <SideNav>
      <SideNavItems>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.overview.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text={t('sideNav.uiJSX.overview.items.gettingStarted')}
            href={`/${language()}/ui-jsx/overview/gettingStarted`}
            isActive={isPathIncluded(
              '/ui-jsx/overview/gettingStarted',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.cssVars.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="color"
            href={`/${language()}/ui-jsx/vars/color`}
            isActive={isPathIncluded('/ui-jsx/vars/color', pathname())}
          />
          <SideNavMenuItem
            text="font"
            href={`/${language()}/ui-jsx/vars/font`}
            isActive={isPathIncluded('/ui-jsx/vars/font', pathname())}
          />
          <SideNavMenuItem
            text="opacity"
            href={`/${language()}/ui-jsx/vars/opacity`}
            isActive={isPathIncluded('/ui-jsx/vars/opacity', pathname())}
          />
          <SideNavMenuItem
            text="spacing"
            href={`/${language()}/ui-jsx/vars/spacing`}
            isActive={isPathIncluded('/ui-jsx/vars/spacing', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.layout.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Section"
            href={`/${language()}/ui-jsx/layout/section`}
            isActive={isPathIncluded('/ui-jsx/layout/section', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.form.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Button"
            href={`/${language()}/ui-jsx/form/button`}
            isActive={isPathIncluded('/ui-jsx/form/button', pathname())}
          />
          <SideNavMenuItem
            text="TextInput"
            href={`/${language()}/ui-jsx/form/textInput`}
            isActive={isPathIncluded('/ui-jsx/form/textInput', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.typography.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Text"
            href={`/${language()}/ui-jsx/typography/text`}
            isActive={isPathIncluded('/ui-jsx/typography/text', pathname())}
          />
          <SideNavMenuItem
            text="Highlight"
            href={`/${language()}/ui-jsx/typography/highlight`}
            isActive={isPathIncluded(
              '/ui-jsx/typography/highlight',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="Link"
            href={`/${language()}/ui-jsx/typography/link`}
            isActive={isPathIncluded('/ui-jsx/typography/link', pathname())}
          />
          <SideNavMenuItem
            text="InlineCodeSnippet"
            href={`/${language()}/ui-jsx/typography/inlineCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-jsx/typography/inlineCodeSnippet',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="LinkCodeSnippet"
            href={`/${language()}/ui-jsx/typography/linkCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-jsx/typography/linkCodeSnippet',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="SingleCodeSnippet"
            href={`/${language()}/ui-jsx/typography/singleCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-jsx/typography/singleCodeSnippet',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="MultiCodeSnippet"
            href={`/${language()}/ui-jsx/typography/multiCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-jsx/typography/multiCodeSnippet',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.content.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="ColorChip"
            href={`/${language()}/ui-jsx/content/colorChip`}
            isActive={isPathIncluded('/ui-jsx/content/colorChip', pathname())}
          />
          <SideNavMenuItem
            text="Icon"
            href={`/${language()}/ui-jsx/content/icon`}
            isActive={isPathIncluded('/ui-jsx/content/icon', pathname())}
          />
          <SideNavMenuItem
            text="Iframe"
            href={`/${language()}/ui-jsx/content/iframe`}
            isActive={isPathIncluded('/ui-jsx/content/iframe', pathname())}
          />
          <SideNavMenuItem
            text="OrderedList"
            href={`/${language()}/ui-jsx/content/orderedList`}
            isActive={isPathIncluded('/ui-jsx/content/orderedList', pathname())}
          />
          <SideNavMenuItem
            text="UnorderedList"
            href={`/${language()}/ui-jsx/content/unorderedList`}
            isActive={isPathIncluded(
              '/ui-jsx/content/unorderedList',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="ListItem"
            href={`/${language()}/ui-jsx/content/listItem`}
            isActive={isPathIncluded('/ui-jsx/content/listItem', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.shell.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Shell"
            href={`/${language()}/ui-jsx/shell/shell`}
            isActive={isPathIncluded('/ui-jsx/shell/shell', pathname())}
          />
          <SideNavMenuItem
            text="Body"
            href={`/${language()}/ui-jsx/shell/body`}
            isActive={isPathIncluded('/ui-jsx/shell/body', pathname())}
          />
          <SideNavMenuItem
            text="Header"
            href={`/${language()}/ui-jsx/shell/header`}
            isActive={isPathIncluded('/ui-jsx/shell/header', pathname())}
          />
          <SideNavMenuItem
            text="HeaderGlobalAction"
            href={`/${language()}/ui-jsx/shell/headerGlobalAction`}
            isActive={isPathIncluded(
              '/ui-jsx/shell/headerGlobalAction',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderGlobalBar"
            href={`/${language()}/ui-jsx/shell/headerGlobalBar`}
            isActive={isPathIncluded(
              '/ui-jsx/shell/headerGlobalBar',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderHr"
            href={`/${language()}/ui-jsx/shell/headerHr`}
            isActive={isPathIncluded('/ui-jsx/shell/headerHr', pathname())}
          />
          <SideNavMenuItem
            text="HeaderMenuButton"
            href={`/${language()}/ui-jsx/shell/headerMenuButton`}
            isActive={isPathIncluded(
              '/ui-jsx/shell/headerMenuButton',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderMenuItem"
            href={`/${language()}/ui-jsx/shell/headerMenuItem`}
            isActive={isPathIncluded(
              '/ui-jsx/shell/headerMenuItem',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderName"
            href={`/${language()}/ui-jsx/shell/headerName`}
            isActive={isPathIncluded('/ui-jsx/shell/headerName', pathname())}
          />
          <SideNavMenuItem
            text="HeaderNavigation"
            href={`/${language()}/ui-jsx/shell/headerNavigation`}
            isActive={isPathIncluded(
              '/ui-jsx/shell/headerNavigation',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="SubMenu"
            href={`/${language()}/ui-jsx/shell/subMenu`}
            isActive={isPathIncluded('/ui-jsx/shell/subMenu', pathname())}
          />
          <SideNavMenuItem
            text="SubMenuItem"
            href={`/${language()}/ui-jsx/shell/subMenuItem`}
            isActive={isPathIncluded('/ui-jsx/shell/subMenuItem', pathname())}
          />
          <SideNavMenuItem
            text="SideNav"
            href={`/${language()}/ui-jsx/shell/sideNav`}
            isActive={isPathIncluded('/ui-jsx/shell/sideNav', pathname())}
          />
          <SideNavMenuItem
            text="SideNavItems"
            href={`/${language()}/ui-jsx/shell/sideNavItems`}
            isActive={isPathIncluded('/ui-jsx/shell/sideNavItems', pathname())}
          />
          <SideNavMenuItem
            text="SideNavLink"
            href={`/${language()}/ui-jsx/shell/sideNavLink`}
            isActive={isPathIncluded('/ui-jsx/shell/sideNavLink', pathname())}
          />
          <SideNavMenuItem
            text="SideNavMenu"
            href={`/${language()}/ui-jsx/shell/sideNavMenu`}
            isActive={isPathIncluded('/ui-jsx/shell/sideNavMenu', pathname())}
          />
          <SideNavMenuItem
            text="SideNavMenuItem"
            href={`/${language()}/ui-jsx/shell/sideNavMenuItem`}
            isActive={isPathIncluded(
              '/ui-jsx/shell/sideNavMenuItem',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJSX.overlay.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Tooltip"
            href={`/${language()}/ui-jsx/overlay/tooltip`}
            isActive={isPathIncluded('/ui-jsx/overlay/tooltip', pathname())}
          />
          <SideNavMenuItem
            text="Spinner"
            href={`/${language()}/ui-jsx/overlay/spinner`}
            isActive={isPathIncluded('/ui-jsx/overlay/spinner', pathname())}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default UIJSXSideNav
