import Button from '@form/button/Button.ts'
import copySvg from '@icon/copy.svg?element'
import Flex from '@layout/flex/Flex.ts'
import Tooltip from '@overlay/tooltip/Tooltip.js'
import { span } from '@rvjs/core/dom'
import { dynamic, prop } from '@rvjs/core/reactive'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.js'
import { copyToClipboard } from '@typography/codeSnippet/CodeSnippet.util.js'
import {
  singleCodeSnippet_codeWrapper_style,
  singleCodeSnippet_wrapper_style,
} from '@typography/codeSnippet/single/SingleCodeSnippet.css.ts'
import { text_recipe } from '@typography/text/Text.css.js'
import { ifIs } from '@util/array.js'
import { highlight, languages } from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-bash'

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
    ],
  })
}

export default SingleCodeSnippet
