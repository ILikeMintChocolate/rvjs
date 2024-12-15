import { colorChipRenderProps } from '@content/colorChip/ColorChip.props.ts'
import ColorChip from '@content/colorChip/ColorChip.tsx'
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
} from '@content/icon/Icons.tsx'
import { iframeRenderProps } from '@content/iframe/Iframe.props.ts'
import Iframe from '@content/iframe/Iframe.tsx'
import { listItemRenderProps } from '@content/list/listItem/ListItem.props.ts'
import ListItem from '@content/list/listItem/ListItem.tsx'
import { orderedListRenderProps } from '@content/list/orderedList/OrderedList.props.ts'
import OrderedList from '@content/list/orderedList/OrderedList.tsx'
import { unorderedListRenderProps } from '@content/list/unorderedList/UnorderedList.props.ts'
import UnorderedList from '@content/list/unorderedList/UnorderedList.tsx'
import { buttonRenderProps } from '@form/button/Button.props.ts'
import Button from '@form/button/Button.tsx'
import { textInputRenderProps } from '@form/textInput/TextInput.props.ts'
import TextInput from '@form/textInput/TextInput.tsx'
import { sectionRenderProps } from '@layout/section/Section.props.ts'
import Section from '@layout/section/Section.tsx'
import { spinnerRenderProps } from '@overlay/spinner/Spinner.props.ts'
import Spinner from '@overlay/spinner/Spinner.tsx'
import { tooltipRenderProps } from '@overlay/tooltip/Tooltip.props.ts'
import Tooltip from '@overlay/tooltip/Tooltip.tsx'
import { bodyRenderProps } from '@shell/body/Body.props.ts'
import Body from '@shell/body/Body.tsx'
import { headerRenderProps } from '@shell/header/header/Header.props.ts'
import Header from '@shell/header/header/Header.tsx'
import { headerGlobalActionRenderProps } from '@shell/header/headerGlobalAction/HeaderGlobalAction.props.ts'
import HeaderGlobalAction from '@shell/header/headerGlobalAction/HeaderGlobalAction.tsx'
import { headerGlobalRenderProps } from '@shell/header/headerGlobalBar/HeaderGlobalBar.props.ts'
import HeaderGlobalBar from '@shell/header/headerGlobalBar/HeaderGlobalBar.tsx'
import HeaderHr from '@shell/header/headerHr/HeaderHr.tsx'
import { headerMenuButtonRenderProps } from '@shell/header/headerMenuButton/HeaderMenuButton.props.ts'
import HeaderMenuButton from '@shell/header/headerMenuButton/HeaderMenuButton.tsx'
import { headerMenuItemRenderProps } from '@shell/header/headerMenuItem/HeaderMenuItem.props.ts'
import HeaderMenuItem from '@shell/header/headerMenuItem/HeaderMenuItem.tsx'
import { headerNameRenderProps } from '@shell/header/headerName/HeaderName.props.ts'
import HeaderName from '@shell/header/headerName/HeaderName.tsx'
import { headerNavigationRenderProps } from '@shell/header/headerNavigation/HeaderNavigation.props.ts'
import HeaderNavigation from '@shell/header/headerNavigation/HeaderNavigation.tsx'
import { subMenuRenderProps } from '@shell/header/subMenu/SubMenu.props.ts'
import SubMenu from '@shell/header/subMenu/SubMenu.tsx'
import { subMenuItemRenderProps } from '@shell/header/subMenuItem/SubMenuItem.props.ts'
import SubMenuItem from '@shell/header/subMenuItem/SubMenuItem.tsx'
import { shellRenderProps } from '@shell/shell/Shell.props.ts'
import Shell from '@shell/shell/Shell.tsx'
import { sideNavProps } from '@shell/sideNav/sideNav/SideNav.props.ts'
import SideNav from '@shell/sideNav/sideNav/SideNav.tsx'
import { sideNavItemsProps } from '@shell/sideNav/sideNavItems/SideNavItems.props.ts'
import SideNavItems from '@shell/sideNav/sideNavItems/SideNavItems.tsx'
import { sideNavLinkRenderProps } from '@shell/sideNav/sideNavLink/SideNavLink.props.ts'
import SideNavLink from '@shell/sideNav/sideNavLink/SideNavLink.tsx'
import { sideNavMenuRenderProps } from '@shell/sideNav/sideNavMenu/SideNavMenu.props.ts'
import SideNavMenu from '@shell/sideNav/sideNavMenu/SideNavMenu.tsx'
import { sideNavMenuItemRenderProps } from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.props.ts'
import SideNavMenuItem from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.tsx'
import { codeSnippetRenderProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import CodeSnippet from '@typography/codeSnippet/CodeSnippet.tsx'
import { highlightRenderProps } from '@typography/highlight/Highlight.props.ts'
import Highlight from '@typography/highlight/Highlight.tsx'
import { linkRenderProps } from '@typography/link/Link.props.ts'
import Link from '@typography/link/Link.tsx'
import { textRenderProps } from '@typography/text/Text.props.ts'
import Text from '@typography/text/Text.tsx'

export const componentFnMap = {
  ColorChip: ColorChip,
  Iframe: Iframe,
  OrderedList: OrderedList,
  UnorderedList: UnorderedList,
  ListItem: ListItem,
  Button: Button,
  TextInput: TextInput,
  Section: Section,
  Spinner: Spinner,
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
  ColorChip: colorChipRenderProps,
  Iframe: iframeRenderProps,
  OrderedList: orderedListRenderProps,
  UnorderedList: unorderedListRenderProps,
  ListItem: listItemRenderProps,
  Button: buttonRenderProps,
  TextInput: textInputRenderProps,
  Section: sectionRenderProps,
  Spinner: spinnerRenderProps,
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
