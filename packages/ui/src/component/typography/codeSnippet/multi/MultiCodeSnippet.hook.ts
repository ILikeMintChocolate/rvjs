import { defineProps, useState } from '@rvjs/core'
import { MultiCodeSnippetProps } from '@typography/codeSnippet/multi/MultiCodeSnippet.props.ts'
import { calcHeight } from '@typography/codeSnippet/multi/MultiCodeSnippet.util.ts'
import { copyToClipboard } from '@util/clipboard.ts'
import { highlight, languages } from 'prismjs'

export const useMultiCodeSnippetProps = (props: MultiCodeSnippetProps) => {
  const newProps = defineProps(props, {
    get copyButtonDescription() {
      return props.copyButtonDescription ?? 'Copied to clipboard!'
    },
    get collapsedNumberOfRows() {
      return props.collapsedNumberOfRows ?? 3
    },
    get hideCopyButton() {
      return props.hideCopyButton ?? false
    },
    get width() {
      return props.width ?? 'fit-content'
    },
    get wrapText() {
      return props.wrapText ?? true
    },
    get ariaLabel() {
      return props.ariaLabel ?? 'Copy to clipboard'
    },
    get defaultShow() {
      return props.defaultShow ?? false
    },
  })

  return newProps
}

export const useMultiCodeSnippetHighlight = (props: MultiCodeSnippetProps) => {
  const highlightedCodeHTML = highlight(
    props.codeText,
    languages[props.language],
    props.language,
  )

  return highlightedCodeHTML
}

export const useMultiCodeSnippetToggle = (props: MultiCodeSnippetProps) => {
  const [showMore, setShowMore] = useState(props.defaultShow)
  const collapsedHeight = calcHeight(props.collapsedNumberOfRows)
  const [height, setHeight] = useState(
    props.defaultShow ? 'auto' : collapsedHeight,
  )

  const onClickHandler = () => {
    if (showMore()) {
      setHeight(collapsedHeight)
    } else {
      setHeight('auto')
    }
    setShowMore(!showMore())
  }

  return { height, showMore, onClickHandler }
}

export const useMultiCodeSnippetClipboard = (props: MultiCodeSnippetProps) => {
  const onCopyButtonClickHandler = async (event: MouseEvent) => {
    await copyToClipboard(props.codeText)
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return onCopyButtonClickHandler
}
