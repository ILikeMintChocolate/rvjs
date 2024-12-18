import { Children } from '@rvjs/core'
import { EventHandlers } from '@type/event.ts'

export interface HeaderGlobalActionProps {
  children: Children
  onClick: EventHandlers['onClick']
  className?: string
  isActive?: boolean
  tooltip?: string
  tooltipAlignment?: 'start' | 'center' | 'end'
}

export const headerGlobalActionRenderProps = {
  children: (p: HeaderGlobalActionProps['children']) => p,
  className: (p: HeaderGlobalActionProps['className']) => p,
  isActive: (p: HeaderGlobalActionProps['isActive']) => p,
  onClick: (p: HeaderGlobalActionProps['onClick']) => p,
  tooltip: (p: HeaderGlobalActionProps['tooltip']) => p,
  tooltipAlignment: (p: HeaderGlobalActionProps['tooltipAlignment']) => p,
}
