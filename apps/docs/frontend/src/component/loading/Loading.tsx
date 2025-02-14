import { loading_wrapper_style } from '@component/loading/Loading.css.ts'
import { Spinner } from '@rvjs/ui'

const Loading = () => {
  return (
    <div className={loading_wrapper_style}>
      <Spinner size="md" />
    </div>
  )
}

export default Loading
