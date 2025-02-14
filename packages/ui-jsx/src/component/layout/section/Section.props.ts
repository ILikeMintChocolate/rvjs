export interface SectionProps {
  children: JSX.Element
}

export const sectionRenderProps = {
  children: (p: SectionProps['children']) => p,
}
