import { defineProps } from '@rvjs/core'
import { SingleCodeSnippetProps } from '@typography/codeSnippet/single/SingleCodeSnippet.props.ts'
import { copyToClipboard } from '@util/clipboard.ts'
import { highlight, languages } from 'prismjs'

export const useSingleCodeSnippetProps = (
  props: SingleCodeSnippetProps,
): SingleCodeSnippetProps => {
  const newProps = defineProps(props, {
    get copyButtonDescription() {
      return props.copyButtonDescription ?? 'Copied to clipboard!'
    },
    get hideCopyButton() {
      return props.hideCopyButton ?? false
    },
    get width() {
      return props.width ?? 'fit-content'
    },
    get ariaLabel() {
      return props.ariaLabel ?? 'Copy to clipboard'
    },
  })

  return newProps
}

export const useSingleCodeSnippetEvent = (props: SingleCodeSnippetProps) => {
  const onClickHandler = async (event: MouseEvent) => {
    await copyToClipboard(props.codeText)
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return onClickHandler
}

export const useSingleCodeSnippetHighlight = (
  props: SingleCodeSnippetProps,
) => {
  const highlightedCodeHTML = highlight(
    props.codeText,
    languages[props.language],
    props.language,
  )

  return highlightedCodeHTML
}
