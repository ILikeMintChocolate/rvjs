import {
  content_inner_style,
  content_wrapper_style,
} from '@layout/content/Content.css.ts'
import { Children } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { Flex } from '@rvjs/ui/layout'

interface ContentProps {
  children: Children
}

const Content = (props: ContentProps) => {
  const { children } = props

  return Flex({
    classes: [prop(() => content_wrapper_style)],
    children: [
      Flex({
        classes: [prop(() => content_inner_style)],
        children,
      }),
    ],
  })
}

export default Content
