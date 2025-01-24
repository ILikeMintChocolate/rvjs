import {
  content_inner_recipe,
  content_outer_recipe,
} from '@component/content/Content.css.ts'
import { getDeviceType } from '@util/device.ts'

interface ContentProps {
  children: JSX.Element
}

const Content = (props: ContentProps) => {
  return (
    <div
      className={content_outer_recipe({
        deviceType: getDeviceType(),
      })}
    >
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
