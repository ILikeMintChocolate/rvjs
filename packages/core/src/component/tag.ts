import { insert } from '@jsx/insert.ts'
import { spread } from '@jsx/spread.ts'
import { template } from '@jsx/template.ts'

interface TagProps extends Partial<HTMLElement> {
  as: keyof HTMLElementTagNameMap
}

export const Tag = (props: TagProps) => {
  const element = template(`<${props.as}>`)()
  if (props) {
    spread(element, props)
  }
  insert(element, () => props.children, null)
  return element
}
