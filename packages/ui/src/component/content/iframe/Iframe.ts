import {
  iframe_style,
  iframe_wrapper_style,
} from '@content/iframe/Iframe.css.ts'
import { IframeProps, iframePropsType } from '@content/iframe/Iframe.props.ts'
import { div, iframe } from '@rvjs/core/dom'
import { dynamic, prop } from '@rvjs/core/reactive'
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
    classes: [dynamic(() => iframe_wrapper_style)],
    style: {
      width: dynamic(() => width()),
      height: dynamic(() => height()),
    },
    children: [
      // @ts-ignore
      iframe({
        classes: [dynamic(() => iframe_style)],
        src: dynamic(() => src()),
        ...restProps,
      }),
    ],
  })
}

export default Iframe
