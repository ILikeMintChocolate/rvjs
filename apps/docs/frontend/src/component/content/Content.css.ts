import { recipe } from '@vanilla-extract/recipes'

export const content_outer_recipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: '1',
  },
  variants: {
    deviceType: {
      desktop: {
        paddingBottom: '10rem',
        paddingTop: '2rem',
      },
      mobile: {},
    },
  },
})

export const content_inner_recipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  variants: {
    deviceType: {
      desktop: {
        width: '42rem',
      },
      mobile: {
        width: '100vw',
        padding: '1rem',
        boxSizing: 'border-box',
      },
    },
  },
})
