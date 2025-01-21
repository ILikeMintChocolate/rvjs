import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const tooltip_wrapper_style = style({
  width: 'fit-content',
  height: 'fit-content',
})

export const tooltip_backdrop_recipe = recipe({
  base: {
    position: 'absolute',
    height: 'fit-content',
  },
  variants: {
    kind: {
      standard: {
        paddingTop: vars.spacing['03'],
      },
      iconButton: {},
      definition: {},
    },
  },
})

export const tooltip_arrow_style = style({
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',
  top: '0px',
  fill: vars.color.backgroundInverse,
})

export const tooltip_descriptionWrapper_recipe = recipe({
  base: {
    position: 'relative',
    backgroundColor: vars.color.backgroundInverse,
    zIndex: 200,
  },
  variants: {
    kind: {
      standard: {
        maxWidth: '18rem',
        padding: vars.spacing['05'],
      },
      iconButton: {
        maxWidth: '13rem',
        paddingLeft: vars.spacing['05'],
        paddingRight: vars.spacing['05'],
        paddingTop: vars.spacing['03'],
        paddingBottom: vars.spacing['03'],
      },
      definition: {
        maxWidth: '11rem',
        padding: vars.spacing['04'],
        marginTop: vars.spacing['02'],
      },
    },
  },
})

export const tooltip_descriptionText_style = style({
  margin: '0',
})
