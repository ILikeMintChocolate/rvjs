export interface ImageProps
  extends Omit<Partial<HTMLImageElement>, 'width' | 'height'> {
  src: string
  alt?: string
  width?: string
  height?: string
  aspectRatio?: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export const imageRenderProps = {
  src: (p: ImageProps['src']) => p,
  alt: (p: ImageProps['alt']) => p,
  width: (p: ImageProps['width']) => p,
  height: (p: ImageProps['height']) => p,
  aspectRatio: (p: ImageProps['aspectRatio']) => p,
  className: (p: ImageProps['className']) => p,
  loading: (p: ImageProps['loading']) => p,
}
