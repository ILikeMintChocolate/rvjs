import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const image_wrapper_style = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
})

export const image_image_recipe = recipe({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    transition: `opacity ${vars.motion.slow}`,
  },
  variants: {
    isLoaded: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
})
