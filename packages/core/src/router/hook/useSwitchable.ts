import { Switch, SwitchRender } from '@children/switch.ts'
import { Block } from '@dom/type'
import { useState } from '@hook/useState.ts'

const useSwitchable = (
  initialBlock: Block | null,
): [() => SwitchRender, (newBlock: Block | null) => void] => {
  const [block, setBlock] = useState(initialBlock)

  const switchable = () => {
    return Switch(block, () => {
      return block()
    })
  }

  const setSwitchable = (newBlock: Block | null) => {
    setBlock(newBlock)
  }

  return [switchable, setSwitchable]
}

export default useSwitchable
