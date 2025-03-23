import {
  image_image_recipe,
  image_wrapper_style,
} from '@content/image/Image.css.ts'
import { useImageLoad, useImageProps } from '@content/image/image.hook.ts'
import { ImageProps } from '@content/image/Image.props.ts'

const Image = (_props: ImageProps) => {
  const props = useImageProps(_props)
  const { isLoaded, onLoadHandler } = useImageLoad()

  return (
    <div
      className={image_wrapper_style}
      style={{
        width: props.width ?? 'auto',
        height: props.height ?? 'auto',
        'aspect-ratio': props.aspectRatio ?? 'auto',
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        className={image_image_recipe({
          isLoaded: isLoaded(),
        })}
        onLoad={onLoadHandler}
      />
    </div>
  )
}

export default Image
