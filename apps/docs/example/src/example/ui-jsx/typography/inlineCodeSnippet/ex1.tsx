import { CodeSnippet } from '@rvjs/ui'

const InlineCodeSnippetExample = () => {
  return (
    <p>
      반응성을 사용하려면
      <CodeSnippet type="inline" language="javascript" codeText="useState" />
      함수를 사용해보세요.
    </p>
  )
}

export default InlineCodeSnippetExample
