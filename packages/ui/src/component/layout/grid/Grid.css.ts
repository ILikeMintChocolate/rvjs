import { boxDefineProps } from '@layout/box/Box.css.ts'
import vars from '@theme/variable/vars.css.ts'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export type GridStyleProps = Parameters<typeof gridSprinkles>[0]

export const gridDefineProps = defineProperties({
  properties: {
    gridRowGap: vars.spacing,
    gridColumnGap: vars.spacing,
  },
  shorthands: {
    rowGap: ['gridRowGap'],
    columnGap: ['gridColumnGap'],
  },
})

export const gridSprinkles = createSprinkles(boxDefineProps, gridDefineProps)
