import { defineProps } from '@rvjs/core'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'

export const useCodeSnippetProps = (props: CodeSnippetProps) => {
  const newProps = defineProps(props, {
    get type() {
      return props.type ?? 'single'
    },
  })

  return newProps
}
