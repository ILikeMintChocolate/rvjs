export interface BodyProps {
  as?: keyof HTMLElementTagNameMap
  children: JSX.Element
}

export const bodyRenderProps = {
  as: (p: BodyProps['as']) => p,
  children: (p: BodyProps['children']) => p,
}
