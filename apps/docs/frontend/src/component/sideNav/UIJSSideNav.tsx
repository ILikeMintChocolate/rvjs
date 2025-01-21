import { usePathname } from '@rvjs/core'
import { t, useLocale } from '@rvjs/localizer'
import { SideNavMenu, SideNavMenuItem } from '@rvjs/ui'
import { isPathIncluded } from '@util/path.ts'

interface UIJSSideNavProps {
  depth: number
}

const UIJSSideNav = (props: UIJSSideNavProps) => {
  const pathname = usePathname()
  const { language } = useLocale()

  return (
    <>
      <SideNavMenu
        menuName={t('sideNav.uiJS.overview.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text={t('sideNav.uiJS.overview.items.gettingStarted')}
          href={`/${language()}/ui-js/overview/gettingStarted`}
          isActive={isPathIncluded(
            '/ui-js/overview/gettingStarted',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.cssVars.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="color"
          href={`/${language()}/ui-js/vars/color`}
          isActive={isPathIncluded('/ui-js/vars/color', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="font"
          href={`/${language()}/ui-js/vars/font`}
          isActive={isPathIncluded('/ui-js/vars/font', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="opacity"
          href={`/${language()}/ui-js/vars/opacity`}
          isActive={isPathIncluded('/ui-js/vars/opacity', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="spacing"
          href={`/${language()}/ui-js/vars/spacing`}
          isActive={isPathIncluded('/ui-js/vars/spacing', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.layout.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Box"
          href={`/${language()}/ui-js/layout/box`}
          isActive={isPathIncluded('/ui-js/layout/box', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Flex"
          href={`/${language()}/ui-js/layout/flex`}
          isActive={isPathIncluded('/ui-js/layout/flex', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Grid"
          href={`/${language()}/ui-js/layout/grid`}
          isActive={isPathIncluded('/ui-js/layout/grid', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Section"
          href={`/${language()}/ui-js/layout/section`}
          isActive={isPathIncluded('/ui-js/layout/section', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.form.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Button"
          href={`/${language()}/ui-js/form/button`}
          isActive={isPathIncluded('/ui-js/form/button', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="TextInput"
          href={`/${language()}/ui-js/form/textInput`}
          isActive={isPathIncluded('/ui-js/form/textInput', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.typography.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Text"
          href={`/${language()}/ui-js/typography/text`}
          isActive={isPathIncluded('/ui-js/typography/text', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Highlight"
          href={`/${language()}/ui-js/typography/highlight`}
          isActive={isPathIncluded('/ui-js/typography/highlight', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Link"
          href={`/${language()}/ui-js/typography/link`}
          isActive={isPathIncluded('/ui-js/typography/link', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="InlineCodeSnippet"
          href={`/${language()}/ui-js/typography/inlineCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-js/typography/inlineCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="LinkCodeSnippet"
          href={`/${language()}/ui-js/typography/linkCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-js/typography/linkCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SingleCodeSnippet"
          href={`/${language()}/ui-js/typography/singleCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-js/typography/singleCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="MultiCodeSnippet"
          href={`/${language()}/ui-js/typography/multiCodeSnippet`}
          isActive={isPathIncluded(
            '/ui-js/typography/multiCodeSnippet',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.content.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="ColorChip"
          href={`/${language()}/ui-js/content/colorChip`}
          isActive={isPathIncluded('/ui-js/content/colorChip', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Icon"
          href={`/${language()}/ui-js/content/icon`}
          isActive={isPathIncluded('/ui-js/content/icon', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Iframe"
          href={`/${language()}/ui-js/content/iframe`}
          isActive={isPathIncluded('/ui-js/content/iframe', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="OrderedList"
          href={`/${language()}/ui-js/content/orderedList`}
          isActive={isPathIncluded('/ui-js/content/orderedList', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="UnorderedList"
          href={`/${language()}/ui-js/content/unorderedList`}
          isActive={isPathIncluded('/ui-js/content/unorderedList', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="ListItem"
          href={`/${language()}/ui-js/content/listItem`}
          isActive={isPathIncluded('/ui-js/content/listItem', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.shell.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Body"
          href={`/${language()}/ui-js/shell/body`}
          isActive={isPathIncluded('/ui-js/shell/body', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="Header"
          href={`/${language()}/ui-js/shell/header`}
          isActive={isPathIncluded('/ui-js/shell/header', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderGlobalAction"
          href={`/${language()}/ui-js/shell/headerGlobalAction`}
          isActive={isPathIncluded(
            '/ui-js/shell/headerGlobalAction',
            pathname(),
          )}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderGlobalBar"
          href={`/${language()}/ui-js/shell/headerGlobalBar`}
          isActive={isPathIncluded('/ui-js/shell/headerGlobalBar', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderHr"
          href={`/${language()}/ui-js/shell/headerHr`}
          isActive={isPathIncluded('/ui-js/shell/headerHr', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderMenuButton"
          href={`/${language()}/ui-js/shell/headerMenuButton`}
          isActive={isPathIncluded('/ui-js/shell/headerMenuButton', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderMenuItem"
          href={`/${language()}/ui-js/shell/headerMenuItem`}
          isActive={isPathIncluded('/ui-js/shell/headerMenuItem', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderName"
          href={`/${language()}/ui-js/shell/headerName`}
          isActive={isPathIncluded('/ui-js/shell/headerName', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="HeaderNavigation"
          href={`/${language()}/ui-js/shell/headerNavigation`}
          isActive={isPathIncluded('/ui-js/shell/headerNavigation', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SubMenu"
          href={`/${language()}/ui-js/shell/subMenu`}
          isActive={isPathIncluded('/ui-js/shell/subMenu', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SubMenuItem"
          href={`/${language()}/ui-js/shell/subMenuItem`}
          isActive={isPathIncluded('/ui-js/shell/subMenuItem', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNav"
          href={`/${language()}/ui-js/shell/sideNav`}
          isActive={isPathIncluded('/ui-js/shell/sideNav', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavItems"
          href={`/${language()}/ui-js/shell/sideNavItems`}
          isActive={isPathIncluded('/ui-js/shell/sideNavItems', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavLink"
          href={`/${language()}/ui-js/shell/sideNavLink`}
          isActive={isPathIncluded('/ui-js/shell/sideNavLink', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavMenu"
          href={`/${language()}/ui-js/shell/sideNavMenu`}
          isActive={isPathIncluded('/ui-js/shell/sideNavMenu', pathname())}
          depth={props.depth + 1}
        />
        <SideNavMenuItem
          text="SideNavMenuItem"
          href={`/${language()}/ui-js/shell/sideNavMenuItem`}
          isActive={isPathIncluded('/ui-js/shell/sideNavMenuItem', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.overlay.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="Tooltip"
          href={`/${language()}/ui-js/overlay/tooltip`}
          isActive={isPathIncluded('/ui-js/overlay/tooltip', pathname())}
          depth={props.depth + 1}
        />
      </SideNavMenu>
      <SideNavMenu
        menuName={t('sideNav.uiJS.util.menuName')}
        defaultShow={true}
        depth={props.depth}
      >
        <SideNavMenuItem
          text="renderComponentFromJSON"
          href={`/${language()}/ui-js/util/renderComponentFromJSON`}
          isActive={isPathIncluded(
            '/ui-js/util/renderComponentFromJSON',
            pathname(),
          )}
          depth={props.depth + 1}
        />
      </SideNavMenu>
    </>
  )
}

export default UIJSSideNav
