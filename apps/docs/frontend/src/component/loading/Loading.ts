import { loading_wrapper_style } from '@component/loading/Loading.css.ts'
import { prop } from '@rvjs/core'
import { Flex, Spinner } from '@rvjs/ui'

const Loading = () => {
  return Flex({
    classes: [prop(() => loading_wrapper_style)],
    children: [
      Spinner({
        size: prop(() => 'md'),
      }),
    ],
  })
}

export default Loading
