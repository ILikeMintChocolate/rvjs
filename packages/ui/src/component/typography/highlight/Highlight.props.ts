export interface HighlightProps {
  children: JSX.Element
}

export const highlightRenderProps = {
  children: (p: HighlightProps['children']) => p,
}
