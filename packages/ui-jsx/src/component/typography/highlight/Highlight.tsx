import { highlight_style } from '@typography/highlight/Highlight.css.ts'
import { HighlightProps } from '@typography/highlight/Highlight.props.ts'

const Highlight = (props: HighlightProps) => {
  return <mark className={highlight_style}>{props.children}</mark>
}

export default Highlight
