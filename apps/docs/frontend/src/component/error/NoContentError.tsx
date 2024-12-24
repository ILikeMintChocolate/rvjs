import searchingCat from '@asset/gif/searching-cat.webp'
import { Text } from '@rvjs/ui'
import {
  noContentError_image_style,
  noContentError_style,
  noContentError_text_style,
} from './NoContentError.css.ts'

const NoContentError = () => {
  return (
    <div className={noContentError_style}>
      <img alt="" src={searchingCat} className={noContentError_image_style} />
      <Text kind="heading-04" className={noContentError_text_style}>
        404 error...
      </Text>
    </div>
  )
}

export default NoContentError
