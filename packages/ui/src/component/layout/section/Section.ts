import { section_style } from '@layout/section/Section.css.ts'
import {
  SectionProps,
  sectionPropsType,
} from '@layout/section/Section.props.ts'
import { section } from '@rvjs/core'
import { dynamic } from '@rvjs/core'
import { checkProps } from '@rvjs/is'

const Section = (props: SectionProps) => {
  const { children } = checkProps<SectionProps>(props, sectionPropsType)

  return section({
    classes: [dynamic(() => section_style)],
    children,
  })
}

export default Section
