import { Block } from '@block/block.ts'
import { ForBlock } from '@block/for.ts'
import { GetState } from '@hook/useState.ts'

export const For = <Item>(
  dependency: Item[] | GetState<Item[]>,
  render: (item: Item, index: number) => Block | null,
) => {
  return new ForBlock<Item>({
    dependency,
    render,
  })
}
