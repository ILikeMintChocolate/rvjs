import { div, h4, prop } from '@rvjs/core'
import { Tooltip } from '@rvjs/ui'

const TooltipExample = () => {
  return div({
    children: [
      Tooltip({
        trigger: h4({
          style: {
            color: '#0c8ce9',
            cursor: 'help',
          },
          textContent: 'Hover Me',
        }),
        description: prop(() => 'Hello!'),
      }),
    ],
  })
}

export default TooltipExample
