import { p, prop, textNode } from '@rvjs/core'
import { CodeSnippet } from '@rvjs/ui'

const InlineCodeSnippetExample = () => {
  return p({
    children: [
      textNode('반응성을 사용하려면 '),
      CodeSnippet({
        type: 'inline',
        language: 'javascript',
        codeText: prop(() => 'useState'),
      }),
      textNode(' 함수를 사용해보세요.'),
    ],
  })
}

export default InlineCodeSnippetExample
