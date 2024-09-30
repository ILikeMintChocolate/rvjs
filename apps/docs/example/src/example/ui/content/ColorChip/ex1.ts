import { div, prop } from '@rvjs/core'
import { ColorChip } from '@rvjs/ui'

const ColorChipExample = () => {
  return div({
    children: [
      ColorChip({
        color: prop(() => 'buttonPrimary'),
        size: prop(() => 'sm'),
      }),
      ColorChip({
        color: prop(() => 'buttonPrimary'),
        size: prop(() => 'md'),
      }),
      ColorChip({
        color: prop(() => 'buttonPrimary'),
        size: prop(() => 'lg'),
      }),
    ],
  })
}

export default ColorChipExample
