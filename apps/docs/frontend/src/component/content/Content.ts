import {
  content_inner_style,
  content_outer_style,
} from '@component/content/Content.css.ts'
import { Children, prop } from '@rvjs/core'
import { Flex } from '@rvjs/ui'

interface ContentProps {
  children: Children
}

const Content = (props: ContentProps) => {
  const { children } = props

  return Flex({
    classes: [prop(() => content_outer_style)],
    children: [
      Flex({
        classes: [prop(() => content_inner_style)],
        children,
      }),
    ],
  })
}

export default Content
