import {
  colorChip_recipe,
  colorChipSprinkles,
} from '@content/colorChip/ColorChip.css.ts'
import { useColorChipClipboard } from '@content/colorChip/ColorChip.hook.ts'
import { ColorChipProps } from '@content/colorChip/ColorChip.props.ts'

const ColorChip = (props: ColorChipProps) => {
  const { colorChipElement, colorChipOnClickHandler } = useColorChipClipboard()

  return (
    <button
      element={colorChipElement}
      className={[
        colorChip_recipe({ size: props.size }),
        colorChipSprinkles({ backgroundColor: props.color }),
      ].join(' ')}
      onClick={colorChipOnClickHandler}
    />
  )
}

export default ColorChip
