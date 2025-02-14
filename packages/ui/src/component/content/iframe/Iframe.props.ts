import { DOMAttributes } from '@rvjs/core'

export interface IframeProps extends DOMAttributes<HTMLIFrameElement> {}

export const iframeRenderProps = {
  src: (p: IframeProps['src']) => p,
  width: (p: IframeProps['width']) => p,
  height: (p: IframeProps['height']) => p,
}
