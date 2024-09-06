import Button from '@form/button/Button.ts'
import copySvg from '@icon/copy.svg?element'
import Flex from '@layout/flex/Flex.ts'
import Tooltip from '@overlay/tooltip/Tooltip.ts'
import { dynamic, prop, span, svg } from '@rvjs/core'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import { copyToClipboard } from '@typography/codeSnippet/CodeSnippet.util.ts'
import {
  singleCodeSnippet_codeWrapper_style,
  singleCodeSnippet_wrapper_style,
} from '@typography/codeSnippet/single/SingleCodeSnippet.css.ts'
import { text_recipe } from '@typography/text/Text.css.ts'
import { ifIs } from '@util/array.ts'
import { highlight, languages } from 'prismjs'

type SingleCodeSnippetProps = CodeSnippetProps

const SingleCodeSnippet = (props: SingleCodeSnippetProps) => {
  const {
    codeText,
    copyButtonDescription = prop(() => 'Copied to clipboard!'),
    hideCopyButton = prop(() => false),
    language,
    onClick,
    width = prop(() => 'fit-content'),
    ariaLabel = prop(() => 'Copy to clipboard'),
  } = props
  const highlightedCodeHTML = highlight(
    codeText(),
    languages[language],
    language,
  )

  return Flex({
    classes: [prop(() => singleCodeSnippet_wrapper_style)],
    justifyContent: 'space-between',
    style: {
      // @ts-ignore
      width: dynamic(() => width()),
    },
    ariaLabel: dynamic(() => ariaLabel()),
    children: [
      Flex({
        classes: [prop(() => singleCodeSnippet_codeWrapper_style)],
        tabIndex: dynamic(() => 0),
        children: [
          span({
            innerHTML: highlightedCodeHTML,
            classes: [dynamic(() => text_recipe({ kind: 'code-01' }))],
          }),
        ],
      }),
      ...ifIs(!hideCopyButton(), () => {
        return Tooltip({
          description: copyButtonDescription,
          trigger: Button({
            size: prop(() => 'md'),
            kind: prop(() => 'ghost'),
            hasIconOnly: prop(() => true),
            renderIcon: svg(copySvg),
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
    ],
  })
}

export default SingleCodeSnippet
