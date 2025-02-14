import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'

export interface LinkCodeSnippetProps
  extends Pick<
    CodeSnippetProps,
    'codeText' | 'language' | 'ariaLabel' | 'href' | 'isExternal'
  > {}
