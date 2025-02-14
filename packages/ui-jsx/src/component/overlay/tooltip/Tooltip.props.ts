export interface TooltipProps {
  description: string
  children: JSX.Element
  kind?: 'standard' | 'iconButton' | 'definition'
  showOnHoverOrClick?: 'hover' | 'click'
}

export const tooltipRenderProps = {
  description: (p: TooltipProps['description']) => p,
  kind: (p: TooltipProps['kind']) => p,
  showOnHoverOrClick: (p: TooltipProps['showOnHoverOrClick']) => p,
  children: (p: TooltipProps['children']) => p,
}
