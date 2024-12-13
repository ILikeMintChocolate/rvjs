import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'

export interface MultiCodeSnippetProps
  extends Pick<
    CodeSnippetProps,
    | 'codeText'
    | 'language'
    | 'collapsedNumberOfRows'
    | 'copyButtonDescription'
    | 'hideCopyButton'
    | 'onClick'
    | 'width'
    | 'wrapText'
    | 'ariaLabel'
    | 'defaultShow'
  > {}
