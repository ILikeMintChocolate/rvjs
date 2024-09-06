import { a, code, dynamic, prop, useNavigate, useState } from '@rvjs/core'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import {
  linkCodeSnippet_anchor_style,
  linkCodeSnippet_code_style,
} from '@typography/codeSnippet/link/LinkCodeSnippet.css.ts'
import { link_text_recipe } from '@typography/link/Link.css.ts'
import { text_recipe } from '@typography/text/Text.css.ts'
import { highlight, languages } from 'prismjs'

type LineCodeSnippetProps = Pick<
  CodeSnippetProps,
  'codeText' | 'language' | 'ariaLabel' | 'href'
>

const LinkCodeSnippet = (props: LineCodeSnippetProps) => {
  const {
    codeText,
    language,
    ariaLabel = prop(() => 'Copy to clipboard'),
    href = prop(() => '/'),
  } = props
  const highlightedCodeHTML = highlight(
    codeText(),
    languages[language],
    language,
  )
  const navigate = useNavigate()
  const [visited, setVisited] = useState(false)

  return a({
    classes: [dynamic(() => linkCodeSnippet_anchor_style)],
    tabIndex: 0,
    ariaLabel: dynamic(() => ariaLabel()),
    onclick: (event: MouseEvent) => {
      event.preventDefault()
      navigate(href())
      setVisited(true)
    },
    children: [
      code({
        innerHTML: highlightedCodeHTML,
        classes: [
          dynamic(() => text_recipe({ kind: 'code-01' })),
          dynamic(() => linkCodeSnippet_code_style),
          dynamic(() =>
            link_text_recipe({
              disabled: false,
              visited: visited(),
            }),
          ),
        ],
      }),
    ],
  })
}

export default LinkCodeSnippet
