import { CodeSnippet } from '@rvjs/ui'

const LinkCodeSnippetExample = () => {
  return (
    <p>
      반응성을 사용하려면
      <CodeSnippet
        type="link"
        language="javascript"
        codeText="useState"
        href="/"
      />
      함수를 사용해보세요.
    </p>
  )
}

export default LinkCodeSnippetExample
