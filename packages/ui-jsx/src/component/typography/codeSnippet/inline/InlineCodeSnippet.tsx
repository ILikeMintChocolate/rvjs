import {
  inlineCodeSnippet_button_style,
  inlineCodeSnippet_code_style,
} from '@typography/codeSnippet/inline/InlineCodeSnippet.css.ts'
import {
  useInlineCodeSnippetClipboard,
  useInlineCodeSnippetHighlight,
  useInlineCodeSnippetProps,
} from '@typography/codeSnippet/inline/InlineCodeSnippet.hook.ts'
import { InlineCodeSnippetProps } from '@typography/codeSnippet/inline/InlineCodeSnippet.props.ts'
import { text_recipe } from '@typography/text/Text.css.ts'

const InlineCodeSnippet = (_props: InlineCodeSnippetProps) => {
  const props = useInlineCodeSnippetProps(_props)
  const highlightedCodeHTML = useInlineCodeSnippetHighlight(props)
  const onClickHandler = useInlineCodeSnippetClipboard(props)

  return (
    <button
      className={inlineCodeSnippet_button_style}
      aria-label={props.ariaLabel}
      onClick={onClickHandler}
    >
      <code
        innerHTML={highlightedCodeHTML}
        className={[
          text_recipe({ kind: 'code-01' }),
          inlineCodeSnippet_code_style,
        ].join(' ')}
      />
    </button>
  )
}

export default InlineCodeSnippet
