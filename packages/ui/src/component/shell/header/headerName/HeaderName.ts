import { a, prop, useNavigate } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { headerName_style } from '@shell/header/headerName/HeaderName.css.ts'
import {
  HeaderNameProps,
  headerNamePropsType,
} from '@shell/header/headerName/HeaderName.props.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

const HeaderName = (props: HeaderNameProps) => {
  const { title, href, prefix } = checkProps(props, headerNamePropsType)
  const navigate = useNavigate()

  return a({
    classes: [headerName_style],
    href,
    onclick: (event: Event) => {
      event.preventDefault()
      navigate(href())
    },
    children: [
      ...ifIs(prefix !== undefined, () =>
        Text({
          text: prefix!,
          kind: prop(() => 'body-compact-01'),
          color: prop(() => 'textPrimary'),
        }),
      ),
      Text({
        text: title,
        kind: prop(() => 'heading-compact-01'),
        color: prop(() => 'textPrimary'),
      }),
    ],
  })
}

export default HeaderName
