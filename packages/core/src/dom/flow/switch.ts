import { Block } from '@block/block.ts'
import { SwitchBlock } from '@block/switch.ts'
import { GetState } from '@hook/useState.ts'

export const Switch = <Dep>(
  dependency: Dep | GetState<Dep>,
  render: () => Block | null,
) => {
  return new SwitchBlock<Dep>({
    dependency,
    render,
  })
}
