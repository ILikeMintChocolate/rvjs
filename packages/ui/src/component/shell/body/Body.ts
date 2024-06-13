import Box from '@layout/box/Box.ts'
import { Children, ElementType } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { body_style } from '@shell/body/Body.css.ts'

interface BodyProps {
  as?: ElementType
  children: Children
}

const Body = (props: BodyProps) => {
  const { as = 'div', children = [] } = props

  return Box({
    as,
    classes: [prop(() => body_style)],
    children,
  })
}

export default Body
