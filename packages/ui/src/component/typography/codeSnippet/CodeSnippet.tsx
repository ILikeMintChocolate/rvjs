import { useCodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.hook.ts'
import { CodeSnippetProps } from '@typography/codeSnippet/CodeSnippet.props.ts'
import InlineCodeSnippet from '@typography/codeSnippet/inline/InlineCodeSnippet.tsx'
import LinkCodeSnippet from '@typography/codeSnippet/link/LinkCodeSnippet.tsx'
import MultiCodeSnippet from '@typography/codeSnippet/multi/MultiCodeSnippet.tsx'
import SingleCodeSnippet from '@typography/codeSnippet/single/SingleCodeSnippet.tsx'
import 'prismjs/themes/prism-coy.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'

const CodeSnippet = (_props: CodeSnippetProps) => {
  const props = useCodeSnippetProps(_props)

  if (props.type === 'single') {
    return (
      <SingleCodeSnippet
        codeText={props.codeText}
        copyButtonDescription={props.copyButtonDescription}
        hideCopyButton={props.hideCopyButton}
        language={props.language}
        onClick={props.onClick}
        width={props.width}
        ariaLabel={props.ariaLabel}
      />
    )
  } else if (props.type === 'inline') {
    return (
      <InlineCodeSnippet
        codeText={props.codeText}
        language={props.language}
        onClick={props.onClick}
        ariaLabel={props.ariaLabel}
      />
    )
  } else if (props.type === 'multi') {
    return (
      <MultiCodeSnippet
        codeText={props.codeText}
        copyButtonDescription={props.copyButtonDescription}
        collapsedNumberOfRows={props.collapsedNumberOfRows}
        hideCopyButton={props.hideCopyButton}
        language={props.language}
        onClick={props.onClick}
        width={props.width}
        wrapText={props.wrapText}
        ariaLabel={props.ariaLabel}
        defaultShow={props.defaultShow}
      />
    )
  } else if (props.type === 'link') {
    return (
      <LinkCodeSnippet
        codeText={props.codeText}
        language={props.language}
        ariaLabel={props.ariaLabel}
        href={props.href}
      />
    )
  }
}

export default CodeSnippet
