import Box from '@layout/box/Box.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { body_style } from '@shell/body/Body.css.ts'
import { BodyProps, bodyPropsType } from '@shell/body/Body.props.ts'

const Body = (props: BodyProps) => {
  const { as = 'div', children = [] } = checkProps(props, bodyPropsType)

  return Box({
    as,
    classes: [prop(() => body_style)],
    children,
  })
}

export default Body
