import { Block } from '@block/block.ts'
import { SwitchBlock } from '@block/switch.ts'
import { componentContext } from '@context/executionContext.ts'
import { Switch } from '@flow/switch.ts'
import { useState } from '@hook/useState.ts'
import { throwError } from '@util/error.ts'

const useOutlet = (): SwitchBlock<unknown> => {
  const [outlet, setOutlet] = useState<Block | null>(null)
  const component = componentContext.get()
  if (!component) {
    throwError('USE_OUTLET_NOT_IN_COMPONENT_ERROR')
  }
  component.setOutlet = setOutlet
  return Switch(outlet, () => {
    return outlet()
  })
}

export default useOutlet
