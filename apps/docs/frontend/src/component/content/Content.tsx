import {
  content_inner_style,
  content_outer_style,
} from '@component/content/Content.css.ts'
import { Component } from '@rvjs/core'

interface ContentProps {
  children: (Component | Node)[]
}

const Content = (props: ContentProps) => {
  return (
    <div className={content_outer_style}>
      <div className={content_inner_style}>{props.children}</div>
    </div>
  )
}

export default Content
