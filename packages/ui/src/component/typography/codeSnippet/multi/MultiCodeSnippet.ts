import { ChevronDownIcon, CopyIcon } from '@content/icon/Icons.ts'
import Button from '@form/button/Button.ts'
import Flex from '@layout/flex/Flex.ts'
import Tooltip from '@overlay/tooltip/Tooltip.ts'
import { code, dynamic, pre, prop, useState } from '@rvjs/core'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import { copyToClipboard } from '@typography/codeSnippet/CodeSnippet.util.ts'
import {
  multiCodeSnippet_codeWrapper_style,
  multiCodeSnippet_pre_style,
  multiCodeSnippet_showMoreIcon_recipe,
  multiCodeSnippet_wrapper_style,
} from '@typography/codeSnippet/multi/MultiCodeSnippet.css.ts'
import { calcHeight } from '@typography/codeSnippet/multi/MultiCodeSnippet.util.ts'
import { text_recipe } from '@typography/text/Text.css.ts'
import { ifIs } from '@util/array.ts'
import { highlight, languages } from 'prismjs'

type SingleCodeSnippetProps = CodeSnippetProps

const MultiCodeSnippet = (props: SingleCodeSnippetProps) => {
  const {
    codeText,
    copyButtonDescription = prop(() => 'Copied to clipboard!'),
    collapsedNumberOfRows = prop(() => 3),
    hideCopyButton = prop(() => false),
    language,
    onClick,
    width = prop(() => 'fit-content'),
    wrapText = prop(() => true),
    ariaLabel = prop(() => 'Copy to clipboard'),
    defaultShow = prop(() => false),
  } = props
  const highlightedCodeHTML = highlight(
    codeText(),
    languages[language],
    language,
  )
  const [showMore, setShowMore] = useState(defaultShow())
  const collapsedHeight = calcHeight(collapsedNumberOfRows())
  const [height, setHeight] = useState(defaultShow() ? 'auto' : collapsedHeight)

  const codeElement = wrapText()
    ? pre({
        classes: [dynamic(() => multiCodeSnippet_pre_style)],
        style: {
          height: dynamic(() => height()),
        },
        children: [
          code({
            innerHTML: highlightedCodeHTML,
            classes: [
              dynamic(() => text_recipe({ kind: 'code-01' }).split(' ')),
            ],
          }),
        ],
      })
    : code({
        innerHTML: highlightedCodeHTML,
        classes: [dynamic(() => text_recipe({ kind: 'code-01' }).split(' '))],
      })

  return Flex({
    classes: [prop(() => multiCodeSnippet_wrapper_style)],
    justifyContent: 'space-between',
    style: {
      // @ts-ignore
      width: dynamic(() => width()),
    },
    ariaLabel: dynamic(() => ariaLabel()),
    children: [
      Flex({
        classes: [prop(() => multiCodeSnippet_codeWrapper_style)],
        tabIndex: dynamic(() => 0),
        children: [codeElement],
      }),
      Flex({
        direction: 'column',
        justifyContent: 'space-between',
        children: [
          ...ifIs(!hideCopyButton(), () => {
            return Tooltip({
              description: copyButtonDescription,
              trigger: Button({
                size: prop(() => 'md'),
                kind: prop(() => 'ghost'),
                hasIconOnly: prop(() => true),
                renderIcon: CopyIcon(),
                onClick: async (event: MouseEvent) => {
                  await copyToClipboard(codeText())
                  if (onClick) {
                    onClick(event)
                  }
                },
              }),
              showOnHoverOrClick: 'click',
            })
          }),
          Button({
            size: prop(() => 'md'),
            kind: prop(() => 'ghost'),
            hasIconOnly: prop(() => true),
            renderIcon: ChevronDownIcon({
              classes: [
                dynamic(() =>
                  multiCodeSnippet_showMoreIcon_recipe({
                    showMore: showMore(),
                  }).split(' '),
                ),
              ],
            }),
            onClick: () => {
              if (showMore()) {
                setHeight(collapsedHeight)
              } else {
                setHeight('auto')
              }
              setShowMore(!showMore())
            },
          }),
        ],
      }),
    ],
  })
}

export default MultiCodeSnippet
