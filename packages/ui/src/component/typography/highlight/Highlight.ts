import { dynamic, mark } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { highlight_style } from '@typography/highlight/Highlight.css.ts'
import {
  HighlightProps,
  highlightPropsType,
} from '@typography/highlight/Highlight.props.ts'

const Highlight = (props: HighlightProps) => {
  const { children } = checkProps(props, highlightPropsType)

  return mark({
    classes: [dynamic(() => highlight_style)],
    children,
  })
}

export default Highlight
