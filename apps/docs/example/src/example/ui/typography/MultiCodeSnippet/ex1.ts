import { prop } from '@rvjs/core'
import { CodeSnippet } from '@rvjs/ui'

const MultiCodeSnippetExample = () => {
  return CodeSnippet({
    type: 'multi',
    language: 'javascript',
    codeText: prop(
      () =>
        "import { div, h1 } from '@rvjs/core'\n" +
        '\n' +
        'const App = () => {\n' +
        '  return div({\n' +
        '    children: [\n' +
        '      h1({\n' +
        "        textContent: 'Hello World!',\n" +
        '      }),\n' +
        '    ],\n' +
        '  })\n' +
        '}\n' +
        '',
    ),
    defaultShow: prop(() => true),
    width: prop(() => '80%'),
  })
}

export default MultiCodeSnippetExample
