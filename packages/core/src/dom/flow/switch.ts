import { SwitchBlock, SwitchProps } from '@block/switch.ts'

export const Switch = <Item>(
  dependency: SwitchProps<Item>['dependency'],
  render: SwitchProps<Item>['render'],
) => {
  return new SwitchBlock<Item>({
    dependency,
    render,
  })
}
