import { Block } from '@block/block.ts'
import { ToggleBlock } from '@block/toggle.ts'
import { GetState } from '@hook/useState.ts'

export const Toggle = <Dep>(
  dependency: Dep | GetState<Dep>,
  render: () => Block | null,
) => {
  return new ToggleBlock<Dep>({
    dependency,
    render,
  })
}
