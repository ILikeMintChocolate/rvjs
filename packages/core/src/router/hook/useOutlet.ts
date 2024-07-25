import { Block } from '@block/block.ts'
import { componentContext } from '@context/executionContext.ts'
import { Switch } from '@flow/switch.ts'
import { useState } from '@hook/useState.ts'

const useOutlet = () => {
  const [outlet, setOutlet] = useState<Block | null>(null)
  const component = componentContext.get()!
  component.setOutlet = setOutlet

  return Switch(outlet, () => {
    return outlet()
  })
}

export default useOutlet
