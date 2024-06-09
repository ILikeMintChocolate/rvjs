import { Switch } from '@children/switch.ts'
import { componentContext } from '@context/executionContext.ts'
import { Block } from '@dom/type.ts'
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
