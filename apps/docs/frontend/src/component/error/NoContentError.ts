import searchingCat from '@asset/gif/searching-cat.webp'
import { img } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { Flex } from '@rvjs/ui/layout'
import { Text } from '@rvjs/ui/typography'
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
