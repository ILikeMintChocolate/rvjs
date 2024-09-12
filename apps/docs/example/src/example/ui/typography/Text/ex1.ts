import { div, prop } from '@rvjs/core'
import { Text } from '@rvjs/ui'

const TextExample = () => {
  return div({
    children: [
      Text({
        text: prop(() => 'body-01'),
        kind: prop(() => 'body-01'),
      }),
      Text({
        text: prop(() => 'body-02'),
        kind: prop(() => 'body-02'),
      }),
      Text({
        text: prop(() => 'body-compact-01'),
        kind: prop(() => 'body-compact-01'),
      }),
      Text({
        text: prop(() => 'body-compact-02'),
        kind: prop(() => 'body-compact-02'),
      }),
      Text({
        text: prop(() => 'code-01'),
        kind: prop(() => 'code-01'),
      }),
      Text({
        text: prop(() => 'code-02'),
        kind: prop(() => 'code-02'),
      }),
      Text({
        text: prop(() => 'label-01'),
        kind: prop(() => 'label-01'),
      }),
      Text({
        text: prop(() => 'label-02'),
        kind: prop(() => 'label-02'),
      }),
      Text({
        text: prop(() => 'helper-text-01'),
        kind: prop(() => 'helper-text-01'),
      }),
      Text({
        text: prop(() => 'helper-text-02'),
        kind: prop(() => 'helper-text-02'),
      }),
      Text({
        text: prop(() => 'legal-01'),
        kind: prop(() => 'legal-01'),
      }),
      Text({
        text: prop(() => 'legal-02'),
        kind: prop(() => 'legal-02'),
      }),
      Text({
        text: prop(() => 'heading-compact-01'),
        kind: prop(() => 'heading-compact-01'),
      }),
      Text({
        text: prop(() => 'heading-compact-02'),
        kind: prop(() => 'heading-compact-02'),
      }),
      Text({
        text: prop(() => 'heading-01'),
        kind: prop(() => 'heading-01'),
      }),
      Text({
        text: prop(() => 'heading-02'),
        kind: prop(() => 'heading-02'),
      }),
      Text({
        text: prop(() => 'heading-03'),
        kind: prop(() => 'heading-03'),
      }),
      Text({
        text: prop(() => 'heading-04'),
        kind: prop(() => 'heading-04'),
      }),
      Text({
        text: prop(() => 'heading-05'),
        kind: prop(() => 'heading-05'),
      }),
      Text({
        text: prop(() => 'heading-06'),
        kind: prop(() => 'heading-06'),
      }),
      Text({
        text: prop(() => 'heading-07'),
        kind: prop(() => 'heading-07'),
      }),
    ],
  })
}

export default TextExample
