import { Element } from '@element/elementBlock.ts'
import { pathEvent } from '@router/util/event.ts'

interface LinkProps {
  to: string
  a: Element
}

const Link = (props: LinkProps) => {
  const { to, a } = props
  const aElement = a.element as HTMLAnchorElement

  aElement.href = to
  aElement.onclick = (event: Event) => {
    event.preventDefault()
    pathEvent.navigate(to)
  }

  return a
}

export default Link
