import {
  iframe_style,
  iframe_wrapper_style,
} from '@content/iframe/Iframe.css.ts'
import { IframeProps, iframePropsType } from '@content/iframe/Iframe.props.ts'
import { div, dynamic, iframe, prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'

const Iframe = (props: IframeProps) => {
  const {
    src,
    width = prop(() => 'auto'),
    height = prop(() => 'auto'),
    ...restProps
  } = checkProps(props, iframePropsType, {
    errorOnNoValidator: false,
  })

  return div({
    tabIndex: 0,
    classes: [iframe_wrapper_style],
    style: {
      width: dynamic(() => width()),
      height: dynamic(() => height()),
    },
    children: [
      iframe({
        classes: [iframe_style],
        src: dynamic(() => src()),
        ...restProps,
      }),
    ],
  })
}

export default Iframe
