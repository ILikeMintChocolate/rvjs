import { Element } from '@element/elementBlock.ts'
import { pathEvent } from '@router/util/event.ts'

interface LinkProps {
  to: string
  a: Element
}

export const link = (props: LinkProps) => {
  const { to, a } = props
  const aElement = a.element as HTMLAnchorElement

  aElement.href = to
  aElement.onclick = (event: Event) => {
    event.preventDefault()
    pathEvent.changePath(to)
  }

  return a
}
