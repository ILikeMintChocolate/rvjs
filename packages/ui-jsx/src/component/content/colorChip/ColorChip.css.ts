import vars from '@theme/variable/vars.css.ts'
import { recipe } from '@vanilla-extract/recipes'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export const colorChip_recipe = recipe({
  base: {
    display: 'inline-block',
    border: `0.0625rem solid ${vars.color.borderSubtle01}`,
    borderRadius: '50%',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  variants: {
    size: {
      sm: {
        width: vars.font.size['12'],
        height: vars.font.size['12'],
        marginLeft: vars.spacing['02'],
        marginRight: vars.spacing['02'],
      },
      md: {
        width: vars.font.size['14'],
        height: vars.font.size['14'],
        marginLeft: vars.spacing['02'],
        marginRight: vars.spacing['02'],
      },
      lg: {
        width: vars.font.size['16'],
        height: vars.font.size['16'],
        marginLeft: vars.spacing['02'],
        marginRight: vars.spacing['02'],
      },
    },
  },
})

export const colorChipDefineProps = defineProperties({
  properties: {
    backgroundColor: vars.color,
  },
})

export const colorChipSprinkles = createSprinkles(colorChipDefineProps)
