import {
  linkCodeSnippet_anchor_style,
  linkCodeSnippet_code_style,
} from '@typography/codeSnippet/link/LinkCodeSnippet.css.ts'
import {
  useLinkCodeSnippetHighlight,
  useLinkCodeSnippetNavigation,
  useLinkCodeSnippetProps,
} from '@typography/codeSnippet/link/LinkCodeSnippet.hook.ts'
import { LinkCodeSnippetProps } from '@typography/codeSnippet/link/LinkCodeSnippet.props.ts'
import { link_text_recipe } from '@typography/link/Link.css.ts'
import { text_recipe } from '@typography/text/Text.css.ts'

const LinkCodeSnippet = (_props: LinkCodeSnippetProps) => {
  const props = useLinkCodeSnippetProps(_props)
  const highlightedCodeHTML = useLinkCodeSnippetHighlight(props)
  const { visited, onAnchorClickHandler } = useLinkCodeSnippetNavigation(props)

  return (
    <a
      className={linkCodeSnippet_anchor_style}
      tabIndex={0}
      aria-label={props.ariaLabel}
      onClick={onAnchorClickHandler}
    >
      <code
        innerHTML={highlightedCodeHTML}
        className={[
          linkCodeSnippet_code_style,
          link_text_recipe({ disabled: false, visited: visited() }),
          text_recipe({ kind: 'code-01' }),
        ].join(' ')}
      />
    </a>
  )
}

export default LinkCodeSnippet
