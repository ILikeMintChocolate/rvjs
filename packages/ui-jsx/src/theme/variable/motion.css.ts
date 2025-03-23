import { createGlobalTheme } from '@vanilla-extract/css'

const motionVars = createGlobalTheme(':root', {
  motion: {
    productive: '70ms cubic-bezier(0.2, 0, 1, 0.9)',
    slow: '300ms ease-in-out',
  },
})

export default motionVars
