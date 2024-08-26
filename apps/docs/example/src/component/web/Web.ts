import { web_style } from '@component/web/Web.css.ts'
import { Child, section } from '@rvjs/core'

interface WebProps {
  web: Child
}

const Web = (props: WebProps) => {
  const { web } = props

  return section({
    classes: [web_style],
    children: [web],
  })
}

export default Web
