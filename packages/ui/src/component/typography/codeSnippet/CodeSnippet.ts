import { Prop } from '@rvjs/core/reactive'
import InlineCodeSnippet from '@typography/codeSnippet/inline/InlineCodeSnippet.js'
import MultiCodeSnippet from '@typography/codeSnippet/multi/MultiCodeSnippet.js'
import SingleCodeSnippet from '@typography/codeSnippet/single/SingleCodeSnippet.js'
import { CSSProperties } from '@vanilla-extract/css'

export interface CodeSnippetProps {
  codeText: Prop<string>
  language: 'javascript' | 'typescript' | 'html' | 'css' | 'bash' | 'json'
  type?: 'single' | 'inline' | 'multi'
  collapsedNumberOfRows?: Prop<number>
  copyButtonDescription?: Prop<string>
  hideCopyButton?: Prop<boolean>
  onClick?: GlobalEventHandlers['onclick']
  width?: Prop<CSSProperties['width']>
  wrapText?: Prop<boolean>
  ariaLabel?: Prop<string>
}

const CodeSnippet = (props: CodeSnippetProps) => {
  const {
    codeText,
    copyButtonDescription,
    collapsedNumberOfRows,
    hideCopyButton,
    language,
    ariaLabel,
    type = 'single',
    onClick,
    width,
    wrapText,
  } = props

  if (type === 'single') {
    return SingleCodeSnippet({
      codeText,
      copyButtonDescription,
      collapsedNumberOfRows,
      hideCopyButton,
      language,
      onClick,
      width,
      ariaLabel,
    })
  } else if (type === 'inline') {
    return InlineCodeSnippet({
      codeText,
      language,
      onClick,
      ariaLabel,
    })
  } else if (type === 'multi') {
    return MultiCodeSnippet({
      codeText,
      copyButtonDescription,
      collapsedNumberOfRows,
      hideCopyButton,
      language,
      onClick,
      width,
      wrapText,
      ariaLabel,
    })
  }

  return SingleCodeSnippet({
    codeText,
    copyButtonDescription,
    collapsedNumberOfRows,
    hideCopyButton,
    language,
    onClick,
    width,
    ariaLabel,
  })
}

export default CodeSnippet
