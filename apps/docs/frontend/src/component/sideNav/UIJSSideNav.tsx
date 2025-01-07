import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

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
            isActive={isPathIncluded(
              '/ui-js/overview/gettingStarted',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.cssVars.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="color"
            href={`/${language()}/ui-js/vars/color`}
            isActive={isPathIncluded('/ui-js/vars/color', pathname())}
          />
          <SideNavMenuItem
            text="font"
            href={`/${language()}/ui-js/vars/font`}
            isActive={isPathIncluded('/ui-js/vars/font', pathname())}
          />
          <SideNavMenuItem
            text="opacity"
            href={`/${language()}/ui-js/vars/opacity`}
            isActive={isPathIncluded('/ui-js/vars/opacity', pathname())}
          />
          <SideNavMenuItem
            text="spacing"
            href={`/${language()}/ui-js/vars/spacing`}
            isActive={isPathIncluded('/ui-js/vars/spacing', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.layout.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Box"
            href={`/${language()}/ui-js/layout/box`}
            isActive={isPathIncluded('/ui-js/layout/box', pathname())}
          />
          <SideNavMenuItem
            text="Flex"
            href={`/${language()}/ui-js/layout/flex`}
            isActive={isPathIncluded('/ui-js/layout/flex', pathname())}
          />
          <SideNavMenuItem
            text="Grid"
            href={`/${language()}/ui-js/layout/grid`}
            isActive={isPathIncluded('/ui-js/layout/grid', pathname())}
          />
          <SideNavMenuItem
            text="Section"
            href={`/${language()}/ui-js/layout/section`}
            isActive={isPathIncluded('/ui-js/layout/section', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.form.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Button"
            href={`/${language()}/ui-js/form/button`}
            isActive={isPathIncluded('/ui-js/form/button', pathname())}
          />
          <SideNavMenuItem
            text="TextInput"
            href={`/${language()}/ui-js/form/textInput`}
            isActive={isPathIncluded('/ui-js/form/textInput', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.typography.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Text"
            href={`/${language()}/ui-js/typography/text`}
            isActive={isPathIncluded('/ui-js/typography/text', pathname())}
          />
          <SideNavMenuItem
            text="Highlight"
            href={`/${language()}/ui-js/typography/highlight`}
            isActive={isPathIncluded('/ui-js/typography/highlight', pathname())}
          />
          <SideNavMenuItem
            text="Link"
            href={`/${language()}/ui-js/typography/link`}
            isActive={isPathIncluded('/ui-js/typography/link', pathname())}
          />
          <SideNavMenuItem
            text="InlineCodeSnippet"
            href={`/${language()}/ui-js/typography/inlineCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-js/typography/inlineCodeSnippet',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="LinkCodeSnippet"
            href={`/${language()}/ui-js/typography/linkCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-js/typography/linkCodeSnippet',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="SingleCodeSnippet"
            href={`/${language()}/ui-js/typography/singleCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-js/typography/singleCodeSnippet',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="MultiCodeSnippet"
            href={`/${language()}/ui-js/typography/multiCodeSnippet`}
            isActive={isPathIncluded(
              '/ui-js/typography/multiCodeSnippet',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.content.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="ColorChip"
            href={`/${language()}/ui-js/content/colorChip`}
            isActive={isPathIncluded('/ui-js/content/colorChip', pathname())}
          />
          <SideNavMenuItem
            text="Icon"
            href={`/${language()}/ui-js/content/icon`}
            isActive={isPathIncluded('/ui-js/content/icon', pathname())}
          />
          <SideNavMenuItem
            text="Iframe"
            href={`/${language()}/ui-js/content/iframe`}
            isActive={isPathIncluded('/ui-js/content/iframe', pathname())}
          />
          <SideNavMenuItem
            text="OrderedList"
            href={`/${language()}/ui-js/content/orderedList`}
            isActive={isPathIncluded('/ui-js/content/orderedList', pathname())}
          />
          <SideNavMenuItem
            text="UnorderedList"
            href={`/${language()}/ui-js/content/unorderedList`}
            isActive={isPathIncluded(
              '/ui-js/content/unorderedList',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="ListItem"
            href={`/${language()}/ui-js/content/listItem`}
            isActive={isPathIncluded('/ui-js/content/listItem', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.shell.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Body"
            href={`/${language()}/ui-js/shell/body`}
            isActive={isPathIncluded('/ui-js/shell/body', pathname())}
          />
          <SideNavMenuItem
            text="Header"
            href={`/${language()}/ui-js/shell/header`}
            isActive={isPathIncluded('/ui-js/shell/header', pathname())}
          />
          <SideNavMenuItem
            text="HeaderGlobalAction"
            href={`/${language()}/ui-js/shell/headerGlobalAction`}
            isActive={isPathIncluded(
              '/ui-js/shell/headerGlobalAction',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderGlobalBar"
            href={`/${language()}/ui-js/shell/headerGlobalBar`}
            isActive={isPathIncluded(
              '/ui-js/shell/headerGlobalBar',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderHr"
            href={`/${language()}/ui-js/shell/headerHr`}
            isActive={isPathIncluded('/ui-js/shell/headerHr', pathname())}
          />
          <SideNavMenuItem
            text="HeaderMenuButton"
            href={`/${language()}/ui-js/shell/headerMenuButton`}
            isActive={isPathIncluded(
              '/ui-js/shell/headerMenuButton',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="HeaderMenuItem"
            href={`/${language()}/ui-js/shell/headerMenuItem`}
            isActive={isPathIncluded('/ui-js/shell/headerMenuItem', pathname())}
          />
          <SideNavMenuItem
            text="HeaderName"
            href={`/${language()}/ui-js/shell/headerName`}
            isActive={isPathIncluded('/ui-js/shell/headerName', pathname())}
          />
          <SideNavMenuItem
            text="HeaderNavigation"
            href={`/${language()}/ui-js/shell/headerNavigation`}
            isActive={isPathIncluded(
              '/ui-js/shell/headerNavigation',
              pathname(),
            )}
          />
          <SideNavMenuItem
            text="SubMenu"
            href={`/${language()}/ui-js/shell/subMenu`}
            isActive={isPathIncluded('/ui-js/shell/subMenu', pathname())}
          />
          <SideNavMenuItem
            text="SubMenuItem"
            href={`/${language()}/ui-js/shell/subMenuItem`}
            isActive={isPathIncluded('/ui-js/shell/subMenuItem', pathname())}
          />
          <SideNavMenuItem
            text="SideNav"
            href={`/${language()}/ui-js/shell/sideNav`}
            isActive={isPathIncluded('/ui-js/shell/sideNav', pathname())}
          />
          <SideNavMenuItem
            text="SideNavItems"
            href={`/${language()}/ui-js/shell/sideNavItems`}
            isActive={isPathIncluded('/ui-js/shell/sideNavItems', pathname())}
          />
          <SideNavMenuItem
            text="SideNavLink"
            href={`/${language()}/ui-js/shell/sideNavLink`}
            isActive={isPathIncluded('/ui-js/shell/sideNavLink', pathname())}
          />
          <SideNavMenuItem
            text="SideNavMenu"
            href={`/${language()}/ui-js/shell/sideNavMenu`}
            isActive={isPathIncluded('/ui-js/shell/sideNavMenu', pathname())}
          />
          <SideNavMenuItem
            text="SideNavMenuItem"
            href={`/${language()}/ui-js/shell/sideNavMenuItem`}
            isActive={isPathIncluded(
              '/ui-js/shell/sideNavMenuItem',
              pathname(),
            )}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.overlay.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="Tooltip"
            href={`/${language()}/ui-js/overlay/tooltip`}
            isActive={isPathIncluded('/ui-js/overlay/tooltip', pathname())}
          />
        </SideNavMenu>
        <SideNavMenu
          menuName={t('sideNav.uiJS.util.menuName')}
          defaultShow={true}
        >
          <SideNavMenuItem
            text="renderComponentFromJSON"
            href={`/${language()}/ui-js/util/renderComponentFromJSON`}
            isActive={isPathIncluded(
              '/ui-js/util/renderComponentFromJSON',
              pathname(),
            )}
          />
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  )
}

export default UIJSSideNav
