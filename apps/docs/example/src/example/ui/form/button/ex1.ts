import { div, prop } from '@rvjs/core'
import { Button } from '@rvjs/ui'

const ButtonKindExample = () => {
  return div({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      padding: '1rem',
    },
    children: [
      Button({
        text: prop(() => 'primary'),
        kind: prop(() => 'primary'),
      }),
      Button({
        text: prop(() => 'secondary'),
        kind: prop(() => 'secondary'),
      }),
      Button({
        text: prop(() => 'tertiary'),
        kind: prop(() => 'tertiary'),
      }),
      Button({
        text: prop(() => 'ghost'),
        kind: prop(() => 'ghost'),
      }),
      Button({
        text: prop(() => 'dangerPrimary'),
        kind: prop(() => 'dangerPrimary'),
      }),
      Button({
        text: prop(() => 'dangerGhost'),
        kind: prop(() => 'dangerGhost'),
      }),
      Button({
        text: prop(() => 'dangerTertiary'),
        kind: prop(() => 'dangerTertiary'),
      }),
    ],
  })
}

export default ButtonKindExample
