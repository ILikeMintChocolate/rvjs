import Box from '@layout/box/Box.ts'
import { prop } from '@rvjs/core'
import { headerHr_style } from '@shell/header/headerHr/HeaderHr.css.ts'

const HeaderHr = () => {
  return Box({
    classes: [prop(() => headerHr_style)],
  })
}

export default HeaderHr
