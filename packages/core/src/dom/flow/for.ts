import { ForBlock, ForProps } from '@block/for.ts'

export const For = <Item>(
  dependency: ForProps<Item>['dependency'],
  render: ForProps<Item>['render'],
) => {
  return new ForBlock<Item>({
    dependency,
    render,
  })
}
