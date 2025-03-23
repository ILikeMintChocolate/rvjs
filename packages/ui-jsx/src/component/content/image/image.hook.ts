import { ImageProps } from '@content/image/Image.props.ts'
import { defineProps, useState } from '@rvjs/core'

export const useImageProps = (props: ImageProps): ImageProps => {
  const newProps = defineProps(props, {
    get alt() {
      return props.alt ?? ''
    },
  })

  return newProps
}

export const useImageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const onLoadHandler = () => {
    setIsLoaded(true)
  }

  return { isLoaded, onLoadHandler }
}
