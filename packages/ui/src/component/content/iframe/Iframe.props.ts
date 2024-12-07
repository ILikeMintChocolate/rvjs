import { HTMLElementProperties } from '@type/element.ts'

export interface IframeProps extends HTMLElementProperties<HTMLIFrameElement> {}

export const iframeRenderProps = {
  src: (p: IframeProps['src']) => p,
  width: (p: IframeProps['width']) => p,
  height: (p: IframeProps['height']) => p,
}
