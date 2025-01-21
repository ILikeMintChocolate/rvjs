import {
  content_inner_recipe,
  content_outer_recipe,
} from '@component/content/Content.css.ts'
import { Component } from '@rvjs/core'
import { getDeviceType } from '@util/device.ts'

interface ContentProps {
  children: (Component | Node)[]
}

const Content = (props: ContentProps) => {
  return (
    <div className={content_outer_recipe()}>
      <div
        className={content_inner_recipe({
          deviceType: getDeviceType(),
        })}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Content
