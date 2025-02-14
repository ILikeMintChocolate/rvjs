import { createGlobalTheme } from '@vanilla-extract/css'

const OpacityVars = createGlobalTheme(':root', {
  opacity: {
    12: '12%',
    20: '20%',
    25: '25%',
    32: '32%',
    50: '50%',
    hex12: '1F',
    hex20: '33',
    hex25: '40',
    hex32: '52',
    hex50: '80',
  },
})

export default OpacityVars
