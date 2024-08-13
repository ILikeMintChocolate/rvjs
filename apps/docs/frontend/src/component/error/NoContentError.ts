import searchingCat from '@asset/gif/searching-cat.webp'
import { img, prop } from '@rvjs/core'
import { Flex, Text } from '@rvjs/ui'
import {
  noContentError_image_style,
  noContentError_style,
  noContentError_text_style,
} from './NoContentError.css.ts'

const NoContentError = () => {
  return Flex({
    direction: 'column',
    align: 'center',
    justifyContent: 'center',
    classes: [prop(() => noContentError_style)],
    children: [
      img({
        src: searchingCat,
        classes: [noContentError_image_style],
      }),
      Text({
        text: prop(() => '404 error...'),
        kind: prop(() => 'heading-04'),
        classes: [prop(() => noContentError_text_style)],
      }),
    ],
  })
}

export default NoContentError
