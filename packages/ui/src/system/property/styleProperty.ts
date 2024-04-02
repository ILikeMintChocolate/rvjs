import { DynamicRender } from '@rvjs/core/reactive/index.js'
import { Properties } from 'csstype'

export const abbreviatedStyleProperty = {
  // Width and Height
  w: 'width',
  h: 'height',
  minW: 'minWidth',
  maxW: 'maxWidth',
  minH: 'minHeight',
  maxH: 'maxHeight',
  // Layout
  boxSize: 'boxSizing',
  vAlign: 'verticalAlign',
  // Margin and Padding
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  // Color
  color: 'color',
  bg: 'background',
  bgColor: 'backgroundColor',
  opacity: 'opacity',
  // Typography
  fontFamily: 'fontFamily',
  fs: 'fontSize',
  fw: 'fontWeight',
  lh: 'lineHeight',
  textAlign: 'textAlign',
  // Flex
  direction: 'flexDirection',
  justify: 'justifyContent',
  wrap: 'flexWrap',
  basis: 'flexBasis',
  grow: 'flexGrow',
  shrink: 'flexShrink',
  align: 'alignItems',
  gap: 'gap',
  // Position
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  zIndex: 'zIndex',
} as const

interface StyleObject {
  style: Partial<Properties>
}

type AbbreviatedStyleProperty = typeof abbreviatedStyleProperty

export type StyleProperty = {
  [K in keyof AbbreviatedStyleProperty]:
    | Properties[AbbreviatedStyleProperty[K]]
    | DynamicRender
} & StyleObject
