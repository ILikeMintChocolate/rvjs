import { p, prop, textNode } from '@rvjs/core'
import { CodeSnippet } from '@rvjs/ui'

const LinkCodeSnippetExample = () => {
  return p({
    children: [
      textNode('반응성을 사용하려면 '),
      CodeSnippet({
        type: 'link',
        language: 'javascript',
        codeText: prop(() => 'useState'),
        href: prop(() => 'https://rvjs.xyz/#/core/reactive/useState'),
      }),
      textNode(' 함수를 사용해보세요.'),
    ],
  })
}

export default LinkCodeSnippetExample
