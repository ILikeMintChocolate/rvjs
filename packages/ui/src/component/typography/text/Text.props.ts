import { TextStyleProps } from '@typography/text/Text.css.ts'

export interface TextProps extends TextStyleProps {
  as?: keyof HTMLElementTagNameMap
  className?: string
  text?: string
  children?: JSX.Element
}

export const textRenderProps = {
  as: (p: TextProps['as']) => p,
  kind: (p: TextProps['kind']) => p,
  color: (p: TextProps['color']) => p,
  className: (p: TextProps['className']) => p,
  text: (p: TextProps['text']) => p,
  children: (p: TextProps['children']) => p,
}
