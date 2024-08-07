import { a, Prop, prop, useNavigate } from '@rvjs/core'
import { headerName_style } from '@shell/header/headerName/HeaderName.css.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

interface HeaderNameProps {
  title: Prop<string>
  href: Prop<string>
  prefix?: Prop<string>
}

const HeaderName = (props: HeaderNameProps) => {
  const { title, href, prefix } = props
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
