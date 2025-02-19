import { button, code, dynamic, prop } from '@rvjs/core'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import {
  inlineCodeSnippet_button_style,
  inlineCodeSnippet_code_style,
} from '@typography/codeSnippet/inline/InlineCodeSnippet.css.ts'
import { text_recipe } from '@typography/text/Text.css.ts'
import { copyToClipboard } from '@util/clipboard.ts'
import { highlight, languages } from 'prismjs'

type InlineCodeSnippetProps = Pick<
  CodeSnippetProps,
  'codeText' | 'language' | 'onClick' | 'ariaLabel'
>

const InlineCodeSnippet = (props: InlineCodeSnippetProps) => {
  const {
    codeText,
    language,
    onClick,
    ariaLabel = prop(() => 'Copy to clipboard'),
  } = props
  const highlightedCodeHTML = highlight(
    codeText(),
    languages[language],
    language,
  )

  return button({
    classes: [dynamic(() => inlineCodeSnippet_button_style)],
    ariaLabel: dynamic(() => ariaLabel()),
    onclick: async (event: MouseEvent) => {
      await copyToClipboard(codeText())
      if (onClick) {
        onClick(event)
      }
    },
    children: [
      code({
        innerHTML: highlightedCodeHTML,
        classes: [
          dynamic(() => text_recipe({ kind: 'code-01' }).split(' ')),
          dynamic(() => inlineCodeSnippet_code_style),
        ],
      }),
    ],
  })
}

export default InlineCodeSnippet
