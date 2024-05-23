import { boxDefineProps } from '@layout/box/Box.css.ts'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export type FlexStyleProps = Parameters<typeof flexSprinkles>[0]

export const flexDefineProps = defineProperties({
  properties: {
    alignItems: [
      'center',
      'start',
      'end',
      'flex-start',
      'flex-end',
      'self-start',
      'self-end',
    ],
    justifyContent: [
      'start',
      'flex-start',
      'center',
      'end',
      'flex-end',
      'space-around',
      'space-between',
      'space-evenly',
    ],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexWrap: ['wrap', 'nowrap'],
  },
  shorthands: {
    align: ['alignItems'],
    justify: ['justifyContent'],
    wrap: ['flexWrap'],
    direction: ['flexDirection'],
  },
})

export const flexSprinkles = createSprinkles(boxDefineProps, flexDefineProps)
