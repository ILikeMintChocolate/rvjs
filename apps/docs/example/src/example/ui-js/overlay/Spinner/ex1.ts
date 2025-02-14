import { div, prop } from '@rvjs/core'
import { Spinner } from '@rvjs/ui'

const SpinnerExample = () => {
  return div({
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      padding: '2rem',
    },
    children: [
      Spinner({
        size: prop(() => 'sm'),
      }),
      Spinner({
        size: prop(() => 'md'),
      }),
      Spinner({
        size: prop(() => 'lg'),
      }),
    ],
  })
}

export default SpinnerExample
