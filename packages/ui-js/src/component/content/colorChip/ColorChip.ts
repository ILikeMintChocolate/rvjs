import {
  colorChip_recipe,
  colorChipSprinkles,
} from '@content/colorChip/ColorChip.css.ts'
import {
  ColorChipProps,
  colorChipPropsType,
} from '@content/colorChip/ColorChip.props.ts'
import { div, dynamic, prop, useRef } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { copyToClipboard } from '@util/clipboard.ts'
import { colorToHex } from '@util/color.ts'

const ColorChip = (props: ColorChipProps) => {
  const { color, size = prop(() => 'md') } = checkProps<ColorChipProps>(
    props,
    colorChipPropsType,
  )
  const colorChipRef = useRef<HTMLButtonElement>()

  return div({
    ref: colorChipRef,
    classes: [
      dynamic(() => colorChip_recipe({ size: size() }).split(' ')),
      dynamic(() =>
        colorChipSprinkles({ backgroundColor: color() }).split(' '),
      ),
    ],
    onclick: async () => {
      const style = getComputedStyle(colorChipRef.current)
      const color = style.getPropertyValue('background-color')
      const hex = colorToHex(color)
      await copyToClipboard(hex)
    },
  })
}

export default ColorChip
