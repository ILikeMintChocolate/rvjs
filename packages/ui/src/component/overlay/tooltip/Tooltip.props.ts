import { Component } from '@rvjs/core'

export interface TooltipProps {
  description: string
  children: (Component | Node)[]
  kind?: 'standard' | 'iconButton' | 'definition'
  showOnHoverOrClick?: 'hover' | 'click'
}

export const tooltipRenderProps = {
  description: (p: TooltipProps['description']) => p,
  kind: (p: TooltipProps['kind']) => p,
  showOnHoverOrClick: (p: TooltipProps['showOnHoverOrClick']) => p,
  children: (p: TooltipProps['children']) => p,
}
