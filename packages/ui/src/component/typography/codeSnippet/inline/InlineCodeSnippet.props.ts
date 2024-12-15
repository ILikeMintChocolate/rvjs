import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'

export interface InlineCodeSnippetProps
  extends Pick<
    CodeSnippetProps,
    'codeText' | 'language' | 'onClick' | 'ariaLabel'
  > {}
