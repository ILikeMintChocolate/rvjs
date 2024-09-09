import { iframeWrapper_style } from '@example/ui/content/Iframe/ex1.css.ts'
import { div, prop } from '@rvjs/core'
import { Iframe } from '@rvjs/ui'

const IframeExample = () => {
  return div({
    classes: [iframeWrapper_style],
    children: [
      Iframe({
        src: prop(() => 'https://rvjs.xyz'),
        width: prop(() => '100%'),
        height: prop(() => '100%'),
      }),
    ],
  })
}

export default IframeExample
