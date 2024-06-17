import Button from '@form/button/Button.ts'
import chevronDownSvg from '@icon/chevron--down.svg?element'
import copySvg from '@icon/copy.svg?element'
import Flex from '@layout/flex/Flex.ts'
import Tooltip from '@overlay/tooltip/Tooltip.ts'
import { code, pre } from '@rvjs/core/dom'
import { dynamic, prop, useState } from '@rvjs/core/reactive'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.ts'
import { copyToClipboard } from '@typography/codeSnippet/CodeSnippet.util.js'
import {
  multiCodeSnippet_codeWrapper_style,
  multiCodeSnippet_pre_style,
  multiCodeSnippet_showMoreIcon_recipe,
  multiCodeSnippet_wrapper_style,
} from '@typography/codeSnippet/multi/MultiCodeSnippet.css.ts'
import { calcHeight } from '@typography/codeSnippet/multi/MultiCodeSnippet.util.js'
import { text_recipe } from '@typography/text/Text.css.ts'
import { ifIs } from '@util/array.ts'
import { highlight, languages } from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash'

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
  } = props
  const highlightedCodeHTML = highlight(
    codeText(),
    languages[language],
    language,
  )
  const [showMore, setShowMore] = useState(false)
  const collapsedHeight = calcHeight(collapsedNumberOfRows())
  const [height, setHeight] = useState(collapsedHeight)

  const codeElement = wrapText()
    ? pre({
        classes: [dynamic(() => multiCodeSnippet_pre_style)],
        style: {
          height: dynamic(() => height()),
        },
        children: [
          code({
            innerHTML: highlightedCodeHTML,
            classes: [dynamic(() => text_recipe({ kind: 'code-01' }))],
          }),
        ],
      })
    : code({
        innerHTML: highlightedCodeHTML,
        classes: [dynamic(() => text_recipe({ kind: 'code-01' }))],
      })

  return Flex({
    classes: [prop(() => multiCodeSnippet_wrapper_style)],
    justifyContent: 'space-between',
    style: {
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
                renderIcon: copySvg,
                onClick: async (event: MouseEvent) => {
                  await copyToClipboard(codeText())
                  if (onClick) {
                    // @ts-ignore
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
            renderIcon: chevronDownSvg,
            classes: [
              prop(() =>
                multiCodeSnippet_showMoreIcon_recipe({
                  showMore: String(showMore()),
                }),
              ),
            ],
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
