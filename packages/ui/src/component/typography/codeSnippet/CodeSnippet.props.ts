import { EventHandlers } from '@type/event.ts'
import { Properties } from 'csstype'

export interface CodeSnippetProps {
  codeText: string
  language:
    | 'javascript'
    | 'typescript'
    | 'html'
    | 'css'
    | 'bash'
    | 'json'
    | 'plain'
    | 'jsx'
    | 'tsx'
  type?: 'single' | 'inline' | 'multi' | 'link'
  collapsedNumberOfRows?: number
  copyButtonDescription?: string
  hideCopyButton?: boolean
  onClick?: EventHandlers['onClick']
  width?: Properties['width']
  wrapText?: boolean
  ariaLabel?: string
  defaultShow?: boolean
  href?: string
  isExternal?: boolean
}

export const codeSnippetRenderProps = {
  codeText: (p: CodeSnippetProps['codeText']) => p,
  language: (p: CodeSnippetProps['language']) => p,
  type: (p: CodeSnippetProps['type']) => p,
  collapsedNumberOfRows: (p: CodeSnippetProps['collapsedNumberOfRows']) => p,
  copyButtonDescription: (p: CodeSnippetProps['copyButtonDescription']) => p,
  hideCopyButton: (p: CodeSnippetProps['hideCopyButton']) => p,
  onClick: (p: CodeSnippetProps['onClick']) => p,
  width: (p: CodeSnippetProps['width']) => p,
  wrapText: (p: CodeSnippetProps['wrapText']) => p,
  ariaLabel: (p: CodeSnippetProps['ariaLabel']) => p,
  defaultShow: (p: CodeSnippetProps['defaultShow']) => p,
  href: (p: CodeSnippetProps['href']) => p,
  isExternal: (p: CodeSnippetProps['isExternal']) => p,
}
