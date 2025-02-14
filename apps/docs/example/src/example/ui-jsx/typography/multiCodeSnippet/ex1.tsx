import { CodeSnippet } from '@rvjs/ui'

const MultiCodeSnippetExample = () => {
  return (
    <CodeSnippet
      type="multi"
      language="javascript"
      defaultShow={true}
      codeText={`
  import { button, div, dynamic, h1, useState } from '@rvjs/core'
  
  const Counter = () => {
    const [getCount, setCount] = useState(0)
    
    return div({
      children: [
        h1({
          textContent: dynamic(() => \`Count: \${getCount()}\`),
        }),
        button({
          textContent: '-1',
          onclick: () => setCount(getCount() - 1),
        }),
        button({
          textContent: '+1',
          onclick: () => setCount(getCount() + 1),
        }),
      ],
    })
  }

  export default Counter
`}
    />
  )
}

export default MultiCodeSnippetExample
