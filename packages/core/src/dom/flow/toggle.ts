import { ToggleBlock, ToggleProps } from '@block/toggle.ts'

export const Toggle = <Bool>(
  dependency: ToggleProps<Bool>['dependency'],
  render: ToggleProps<Bool>['render'],
) => {
  return new ToggleBlock<Bool>({
    dependency,
    render,
  })
}
