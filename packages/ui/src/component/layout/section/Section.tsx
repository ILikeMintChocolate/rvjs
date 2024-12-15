import { section_style } from '@layout/section/Section.css.ts'
import { SectionProps } from '@layout/section/Section.props.ts'

const Section = (props: SectionProps) => {
  return <section className={section_style}>{props.children} </section>
}

export default Section
