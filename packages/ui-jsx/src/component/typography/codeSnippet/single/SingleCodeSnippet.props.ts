import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'

export interface SingleCodeSnippetProps
  extends Pick<
    CodeSnippetProps,
    | 'codeText'
    | 'language'
    | 'copyButtonDescription'
    | 'hideCopyButton'
    | 'onClick'
    | 'width'
    | 'ariaLabel'
  > {}
