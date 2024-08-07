import spacingVars from '@theme/variable/spacing.css.ts'
import { createGlobalTheme } from '@vanilla-extract/css'

const componentVars = createGlobalTheme(':root', {
  header: {
    height: spacingVars.spacing['09'],
  },
  sideNav: {
    width: '16rem',
  },
})

export default componentVars
