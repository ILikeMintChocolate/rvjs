import { ElementBlock } from '@block/element.ts'
import { pathEvent } from '@router/util/event.ts'

interface LinkProps {
  to: string
  a: ElementBlock
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
