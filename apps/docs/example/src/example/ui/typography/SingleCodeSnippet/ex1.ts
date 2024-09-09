import { prop } from '@rvjs/core'
import { CodeSnippet } from '@rvjs/ui'

const SingleCodeSnippetExample = () => {
  return CodeSnippet({
    type: 'single',
    language: 'bash',
    codeText: prop(() => 'npm install @rvjs/core'),
  })
}

export default SingleCodeSnippetExample
