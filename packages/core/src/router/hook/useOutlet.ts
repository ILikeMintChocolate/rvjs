import { Switch } from '@children/switch.ts'
import { componentContext } from '@context/executionContext.ts'
import { useState } from '@hook/useState.ts'
import { Block } from '@type/type.ts'

const useOutlet = () => {
  const [outlet, setOutlet] = useState<Block | null>(null)
  const component = componentContext.get()!
  component.setOutlet = setOutlet

  return Switch(outlet, () => {
    return outlet()
  })
}

export default useOutlet
