import { IconRenderProps } from '@content/icon/Icon.props.ts'
import Icon from '@content/icon/Icon.ts'
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
import { codeSnippetRenderProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import CodeSnippet from '@typography/codeSnippet/CodeSnippet.ts'
import { highlightRenderProps } from '@typography/highlight/Highlight.props.ts'
import { linkRenderProps } from '@typography/link/Link.props.ts'
import Link from '@typography/link/Link.ts'
import { textRenderProps } from '@typography/text/Text.props.ts'
import Text from '@typography/text/Text.ts'

export const componentFnMap = {
  Icon: Icon,
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
}

export const componentRenderPropsMap = {
  Icon: IconRenderProps,
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
}

export const textNodeFn = textNode

export const elementRenderProps = {
  children: (p: Children) => p,
  ref: (p: RefObject<HTMLElement>) => p,
}
