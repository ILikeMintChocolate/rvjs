import {
  iframe_style,
  iframe_wrapper_style,
} from '@content/iframe/Iframe.css.ts'
import { IframeProps } from '@content/iframe/Iframe.props.ts'

const Iframe = (props: IframeProps) => {
  return (
    <div className={iframe_wrapper_style} tabIndex={0}>
      <iframe className={iframe_style} {...props} />
    </div>
  )
}

export default Iframe
