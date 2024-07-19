import { IconRenderProps } from '@content/icon/Icon.props.ts'
import { iframeRenderProps } from '@content/iframe/Iframe.props.ts'
import {
  Icon,
  Iframe,
  ListItem,
  OrderedList,
  UnorderedList,
} from '@content/index.ts'
import { listItemRenderProps } from '@content/list/listItem/ListItem.props.ts'
import { orderedListRenderProps } from '@content/list/orderedList/OrderedList.props.ts'
import { unorderedListRenderProps } from '@content/list/unorderedList/UnorderedList.props.ts'
import { buttonRenderProps } from '@form/button/Button.props.ts'
import { Button, TextInput } from '@form/index.ts'
import { textInputRenderProps } from '@form/textInput/TextInput.props.ts'
import { Section } from '@layout/index.ts'
import { sectionRenderProps } from '@layout/section/Section.props.ts'
import { Tooltip } from '@overlay/index.ts'
import { tooltipRenderProps } from '@overlay/tooltip/Tooltip.props.ts'
import { Children, text } from '@rvjs/core/dom'
import { RefObject } from '@rvjs/core/reactive'
import { codeSnippetRenderProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import { highlightRenderProps } from '@typography/highlight/Highlight.props.ts'
import { CodeSnippet, Highlight, Link, Text } from '@typography/index.ts'
import { linkRenderProps } from '@typography/link/Link.props.ts'
import { textRenderProps } from '@typography/text/Text.props.ts'

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

export const textNodeFn = text

export const elementRenderProps = {
  children: (p: Children) => p,
  ref: (p: RefObject<HTMLElement>) => p,
}
