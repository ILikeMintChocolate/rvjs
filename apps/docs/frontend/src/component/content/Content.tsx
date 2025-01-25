import {
  content_inner_recipe,
  content_outer_recipe,
} from '@component/content/Content.css.ts'
import NoContentError from '@component/error/NoContentError.tsx'
import Loading from '@component/loading/Loading.tsx'
import { Case, GetState, Switch } from '@rvjs/core'
import { getDeviceType } from '@util/device.ts'

interface ContentProps {
  status: GetState<'LOADING' | 'LOADED' | 'ERROR'>
  children: JSX.Element
}

const Content = (props: ContentProps) => {
  return (
    <Switch>
      <Case is={props.status() === 'LOADING'}>
        <Loading />
      </Case>
      <Case is={props.status() === 'LOADED'}>
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
      </Case>
      <Case is={props.status() === 'ERROR'}>
        <NoContentError />
      </Case>
    </Switch>
  )
}

export default Content
