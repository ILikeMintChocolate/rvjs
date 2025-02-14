import vars from '@theme/variable/vars.css.ts'

export interface ColorChipProps {
  color: keyof typeof vars.color
  size?: 'sm' | 'md' | 'lg'
}

export const colorChipRenderProps = {
  color: (p: ColorChipProps['color']) => p,
  size: (p: ColorChipProps['size']) => p,
}
