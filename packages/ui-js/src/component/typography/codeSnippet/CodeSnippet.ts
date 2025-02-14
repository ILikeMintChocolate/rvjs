import { checkProps } from '@rvjs/is'
import {
  CodeSnippetProps,
  codeSnippetPropsType,
} from '@typography/codeSnippet/CodeSnippet.props.ts'
import InlineCodeSnippet from '@typography/codeSnippet/inline/InlineCodeSnippet.ts'
import LinkCodeSnippet from '@typography/codeSnippet/link/LinkCodeSnippet.ts'
import MultiCodeSnippet from '@typography/codeSnippet/multi/MultiCodeSnippet.ts'
import SingleCodeSnippet from '@typography/codeSnippet/single/SingleCodeSnippet.ts'
import 'prismjs/themes/prism-coy.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'

const CodeSnippet = (props: CodeSnippetProps) => {
  const {
    codeText,
    copyButtonDescription,
    collapsedNumberOfRows,
    hideCopyButton,
    language,
    ariaLabel,
    type = 'single',
    onClick,
    width,
    wrapText,
    defaultShow,
    href,
  } = checkProps<CodeSnippetProps>(props, codeSnippetPropsType, {
    errorOnNoValidator: false,
  })

  if (type === 'single') {
    return SingleCodeSnippet({
      codeText,
      copyButtonDescription,
      collapsedNumberOfRows,
      hideCopyButton,
      language,
      onClick,
      width,
      ariaLabel,
    })
  } else if (type === 'inline') {
    return InlineCodeSnippet({
      codeText,
      language,
      onClick,
      ariaLabel,
    })
  } else if (type === 'multi') {
    return MultiCodeSnippet({
      codeText,
      copyButtonDescription,
      collapsedNumberOfRows,
      hideCopyButton,
      language,
      onClick,
      width,
      wrapText,
      ariaLabel,
      defaultShow,
    })
  } else if (type === 'link') {
    return LinkCodeSnippet({
      codeText,
      language,
      ariaLabel,
      href,
    })
  }

  return SingleCodeSnippet({
    codeText,
    copyButtonDescription,
    collapsedNumberOfRows,
    hideCopyButton,
    language,
    onClick,
    width,
    ariaLabel,
  })
}

export default CodeSnippet
