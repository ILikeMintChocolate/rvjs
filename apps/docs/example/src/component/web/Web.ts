import { content_style, web_style } from '@component/web/Web.css.ts'
import { Block, Child, section } from '@rvjs/core/dom'
import { useElement } from '@rvjs/core/reactive'

interface WebProps {
  web: Child
}

const Web = (props: WebProps) => {
  const { web } = props
  const contentElement = useElement(web as Block)!
  contentElement.classList.add(content_style)

  return section({
    classes: [web_style],
    children: [web],
  })
}

export default Web
