import { div, prop } from '@rvjs/core'
import { ArrowRightIcon, Button } from '@rvjs/ui'

const ButtonSizeExample = () => {
  return div({
    style: {
      display: 'flex',
      gap: '1rem',
    },
    children: [
      Button({
        text: prop(() => 'SM'),
        kind: prop(() => 'primary'),
        size: prop(() => 'sm'),
        renderIcon: ArrowRightIcon(),
      }),
      Button({
        text: prop(() => 'MD'),
        kind: prop(() => 'primary'),
        size: prop(() => 'md'),
        renderIcon: ArrowRightIcon(),
      }),
      Button({
        text: prop(() => 'LG'),
        kind: prop(() => 'primary'),
        size: prop(() => 'lg'),
        renderIcon: ArrowRightIcon(),
      }),
      Button({
        text: prop(() => 'XL'),
        kind: prop(() => 'primary'),
        size: prop(() => 'xl'),
        renderIcon: ArrowRightIcon(),
      }),
      Button({
        text: prop(() => '2XL'),
        kind: prop(() => 'primary'),
        size: prop(() => '2xl'),
        renderIcon: ArrowRightIcon(),
      }),
    ],
  })
}

export default ButtonSizeExample
