import { Component } from '@rvjs/core'

export interface SectionProps {
  children: (Component | Node)[]
}

export const sectionRenderProps = {
  children: (p: SectionProps['children']) => p,
}
