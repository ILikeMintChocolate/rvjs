import { ElementProps } from '@rvjs/core/dom'
import { Prop, prop } from '@rvjs/core/reactive'
import { isOptional, isProp, isString } from '@rvjs/is'
import { Properties } from 'csstype'

export interface IframeProps extends HTMLIframeType {
  src: Prop<string>
  width?: Prop<Properties['width']>
  height?: Prop<Properties['height']>
}

type HTMLIframeType = Partial<
  Omit<ElementProps<'iframe'>, 'src' | 'width' | 'height'>
>

export const iframePropsType = {
  src: isProp(isString),
  width: isOptional(isProp(isString)),
  height: isOptional(isProp(isString)),
}

export const iframeRenderProps = {
  src: (p: string) => prop(() => p),
  width: (p: string) => prop(() => p),
  height: (p: string) => prop(() => p),
}
