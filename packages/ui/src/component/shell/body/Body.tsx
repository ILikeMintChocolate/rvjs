import { Tag } from '@rvjs/core'
import { body_style } from '@shell/body/Body.css.ts'
import { useBodyProps } from '@shell/body/Body.hook.ts'
import { BodyProps } from '@shell/body/Body.props.ts'

const Body = (_props: BodyProps) => {
  const props = useBodyProps(_props)

  return (
    <Tag as={props.as} className={body_style}>
      {props.children}
    </Tag>
  )
}

export default Body
