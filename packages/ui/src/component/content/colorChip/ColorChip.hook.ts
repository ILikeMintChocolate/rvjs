import { useElement } from '@rvjs/core'
import { copyToClipboard } from '@util/clipboard.ts'
import { colorToHex } from '@util/color.ts'

export const useColorChipClipboard = () => {
  const colorChipElement = useElement<HTMLButtonElement>()

  const colorChipOnClickHandler = async () => {
    const style = getComputedStyle(colorChipElement.current)
    const color = style.getPropertyValue('background-color')
    const hex = colorToHex(color)
    await copyToClipboard(hex)
  }

  return {
    colorChipElement,
    colorChipOnClickHandler,
  }
}
