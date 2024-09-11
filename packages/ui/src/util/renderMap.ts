import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  CopyIcon,
  DocumentIcon,
  LogoGithubIcon,
  LogoNpmIcon,
  MenuIcon,
  SearchIcon,
  TooltipArrowIcon,
  WarningAltFilledIcon,
  WarningFilledIcon,
} from '@content/icon/Icons.ts'
import { iframeRenderProps } from '@content/iframe/Iframe.props.ts'
import Iframe from '@content/iframe/Iframe.ts'
import { listItemRenderProps } from '@content/list/listItem/ListItem.props.ts'
import ListItem from '@content/list/listItem/ListItem.ts'
import { orderedListRenderProps } from '@content/list/orderedList/OrderedList.props.ts'
import OrderedList from '@content/list/orderedList/OrderedList.ts'
import { unorderedListRenderProps } from '@content/list/unorderedList/UnorderedList.props.ts'
import UnorderedList from '@content/list/unorderedList/UnorderedList.ts'
import { buttonRenderProps } from '@form/button/Button.props.ts'
import Button from '@form/button/Button.ts'
import { textInputRenderProps } from '@form/textInput/TextInput.props.ts'
import TextInput from '@form/textInput/TextInput.ts'
import { sectionRenderProps } from '@layout/section/Section.props.ts'
import Section from '@layout/section/Section.ts'
import { tooltipRenderProps } from '@overlay/tooltip/Tooltip.props.ts'
import Tooltip from '@overlay/tooltip/Tooltip.ts'
import { Children, RefObject, textNode } from '@rvjs/core'
import { bodyRenderProps } from '@shell/body/Body.props.ts'
import Body from '@shell/body/Body.ts'
import { headerRenderProps } from '@shell/header/header/Header.props.ts'
import Header from '@shell/header/header/Header.ts'
import { headerGlobalActionRenderProps } from '@shell/header/headerGlobalAction/HeaderGlobalAction.props.ts'
import HeaderGlobalAction from '@shell/header/headerGlobalAction/HeaderGlobalAction.ts'
import { headerGlobalRenderProps } from '@shell/header/headerGlobalBar/HeaderGlobalBar.props.ts'
import HeaderGlobalBar from '@shell/header/headerGlobalBar/HeaderGlobalBar.ts'
import HeaderHr from '@shell/header/headerHr/HeaderHr.ts'
import { headerMenuButtonRenderProps } from '@shell/header/headerMenuButton/HeaderMenuButton.props.ts'
import HeaderMenuButton from '@shell/header/headerMenuButton/HeaderMenuButton.ts'
import { headerMenuItemRenderProps } from '@shell/header/headerMenuItem/HeaderMenuItem.props.ts'
import HeaderMenuItem from '@shell/header/headerMenuItem/HeaderMenuItem.ts'
import { headerNameRenderProps } from '@shell/header/headerName/HeaderName.props.ts'
import HeaderName from '@shell/header/headerName/HeaderName.ts'
import { headerNavigationRenderProps } from '@shell/header/headerNavigation/HeaderNavigation.props.ts'
import HeaderNavigation from '@shell/header/headerNavigation/HeaderNavigation.ts'
import { subMenuRenderProps } from '@shell/header/subMenu/SubMenu.props.ts'
import SubMenu from '@shell/header/subMenu/SubMenu.ts'
import { subMenuItemRenderProps } from '@shell/header/subMenuItem/SubMenuItem.props.ts'
import SubMenuItem from '@shell/header/subMenuItem/SubMenuItem.ts'
import { shellRenderProps } from '@shell/shell/Shell.props.ts'
import Shell from '@shell/shell/Shell.ts'
import { sideNavProps } from '@shell/sideNav/sideNav/SideNav.props.ts'
import SideNav from '@shell/sideNav/sideNav/SideNav.ts'
import { sideNavItemsProps } from '@shell/sideNav/sideNavItems/SideNavItems.props.ts'
import SideNavItems from '@shell/sideNav/sideNavItems/SideNavItems.ts'
import { sideNavLinkRenderProps } from '@shell/sideNav/sideNavLink/SideNavLink.props.ts'
import SideNavLink from '@shell/sideNav/sideNavLink/SideNavLink.ts'
import { sideNavMenuRenderProps } from '@shell/sideNav/sideNavMenu/SideNavMenu.props.ts'
import SideNavMenu from '@shell/sideNav/sideNavMenu/SideNavMenu.ts'
import { sideNavMenuItemRenderProps } from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.props.ts'
import SideNavMenuItem from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.ts'
import { codeSnippetRenderProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import CodeSnippet from '@typography/codeSnippet/CodeSnippet.ts'
import { highlightRenderProps } from '@typography/highlight/Highlight.props.ts'
import { linkRenderProps } from '@typography/link/Link.props.ts'
import Link from '@typography/link/Link.ts'
import { textRenderProps } from '@typography/text/Text.props.ts'
import Text from '@typography/text/Text.ts'

export const componentFnMap = {
  Iframe: Iframe,
  OrderedList: OrderedList,
  UnorderedList: UnorderedList,
  ListItem: ListItem,
  Button: Button,
  TextInput: TextInput,
  Section: Section,
  Tooltip: Tooltip,
  CodeSnippet: CodeSnippet,
  Highlight: Highlight,
  Link: Link,
  Text: Text,
  Body: Body,
  Header: Header,
  HeaderGlobalAction: HeaderGlobalAction,
  HeaderGlobalBar: HeaderGlobalBar,
  HeaderHr: HeaderHr,
  HeaderMenuButton: HeaderMenuButton,
  HeaderMenuItem: HeaderMenuItem,
  HeaderName: HeaderName,
  HeaderNavigation: HeaderNavigation,
  SubMenu: SubMenu,
  SubMenuItem: SubMenuItem,
  Shell: Shell,
  SideNav: SideNav,
  SideNavItems: SideNavItems,
  SideNavLink: SideNavLink,
  SideNavMenu: SideNavMenu,
  SideNavMenuItem: SideNavMenuItem,
  ArrowRightIcon: ArrowRightIcon,
  ChevronDownIcon: ChevronDownIcon,
  CloseIcon: CloseIcon,
  CopyIcon: CopyIcon,
  DocumentIcon: DocumentIcon,
  LogoGithubIcon: LogoGithubIcon,
  LogoNpmIcon: LogoNpmIcon,
  MenuIcon: MenuIcon,
  SearchIcon: SearchIcon,
  TooltipArrowIcon: TooltipArrowIcon,
  WarningAltFilledIcon: WarningAltFilledIcon,
  WarningFilledIcon: WarningFilledIcon,
} as any

export const componentRenderPropsMap = {
  Iframe: iframeRenderProps,
  OrderedList: orderedListRenderProps,
  UnorderedList: unorderedListRenderProps,
  ListItem: listItemRenderProps,
  Button: buttonRenderProps,
  TextInput: textInputRenderProps,
  Section: sectionRenderProps,
  Tooltip: tooltipRenderProps,
  CodeSnippet: codeSnippetRenderProps,
  Highlight: highlightRenderProps,
  Link: linkRenderProps,
  Text: textRenderProps,
  Body: bodyRenderProps,
  Header: headerRenderProps,
  HeaderGlobalAction: headerGlobalActionRenderProps,
  HeaderGlobalBar: headerGlobalRenderProps,
  HeaderMenuButton: headerMenuButtonRenderProps,
  HeaderMenuItem: headerMenuItemRenderProps,
  HeaderName: headerNameRenderProps,
  HeaderNavigation: headerNavigationRenderProps,
  SubMenu: subMenuRenderProps,
  SubMenuItem: subMenuItemRenderProps,
  Shell: shellRenderProps,
  SideNav: sideNavProps,
  SideNavItems: sideNavItemsProps,
  SideNavLink: sideNavLinkRenderProps,
  SideNavMenu: sideNavMenuRenderProps,
  SideNavMenuItem: sideNavMenuItemRenderProps,
  ArrowRightIcon: {},
  ChevronDownIcon: {},
  CloseIcon: {},
  CopyIcon: {},
  DocumentIcon: {},
  LogoGithubIcon: {},
  LogoNpmIcon: {},
  MenuIcon: {},
  SearchIcon: {},
  TooltipArrowIcon: {},
  WarningAltFilledIcon: {},
  WarningFilledIcon: {},
} as any

export const textNodeFn = textNode

export const elementRenderProps = {
  children: (p: Children) => p,
  ref: (p: RefObject<HTMLElement>) => p,
}
