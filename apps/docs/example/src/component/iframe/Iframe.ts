import {
  iframe_style,
  iframe_wrapper_style,
} from '@component/iframe/Iframe.css.ts'
import { Child, div } from '@rvjs/core'

interface IframeProps {
  content: Child
}

const Iframe = (props: IframeProps) => {
  const { content } = props

  return div({
    classes: [iframe_wrapper_style],
    children: [
      div({
        classes: [iframe_style],
        children: [content],
      }),
    ],
  })
}

export default Iframe
