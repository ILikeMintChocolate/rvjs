import { defineProps, useNavigate, useState } from '@rvjs/core'
import { LinkCodeSnippetProps } from '@typography/codeSnippet/link/LinkCodeSnippet.props.ts'
import { highlight, languages } from 'prismjs'

export const useLinkCodeSnippetProps = (
  props: LinkCodeSnippetProps,
): LinkCodeSnippetProps => {
  const definedProps = defineProps(props, {
    get ariaLabel() {
      return props.ariaLabel ?? 'Copy to clipboard'
    },
    get href() {
      return props.href ?? '/'
    },
  })

  return definedProps
}

export const useLinkCodeSnippetHighlight = (props: LinkCodeSnippetProps) => {
  const highlightedCodeHTML = highlight(
    props.codeText,
    languages[props.language],
    props.language,
  )

  return highlightedCodeHTML
}

export const useLinkCodeSnippetNavigation = (props: LinkCodeSnippetProps) => {
  const [visited, setVisited] = useState(false)
  const navigate = useNavigate()

  const onAnchorClickHandler = (event: MouseEvent) => {
    event.preventDefault()
    navigate(props.href)
    setVisited(true)
  }

  return { visited, onAnchorClickHandler }
}
