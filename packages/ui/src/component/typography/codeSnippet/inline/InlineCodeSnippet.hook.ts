import { defineProps } from '@rvjs/core'
import { InlineCodeSnippetProps } from '@typography/codeSnippet/inline/InlineCodeSnippet.props.ts'
import { copyToClipboard } from '@util/clipboard.ts'
import { highlight, languages } from 'prismjs'

export const useInlineCodeSnippetProps = (props: InlineCodeSnippetProps) => {
  const newProps = defineProps(props, {
    get ariaLabel() {
      return props.ariaLabel ?? 'Copy to clipboard'
    },
  })

  return newProps
}

export const useInlineCodeSnippetHighlight = (
  props: InlineCodeSnippetProps,
) => {
  const highlightedCodeHTML = highlight(
    props.codeText,
    languages[props.language],
    props.language,
  )

  return highlightedCodeHTML
}

export const useInlineCodeSnippetClipboard = (
  props: InlineCodeSnippetProps,
) => {
  const onClickHandler = async (event: MouseEvent) => {
    await copyToClipboard(props.codeText)
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return onClickHandler
}
