export const template = (html: string) => {
  let node
  const create = () => {
    const template = document.createElement('template')
    template.innerHTML = html
    return template.content.firstChild
  }
  const fn = () => (node || (node = create())).cloneNode(true)
  fn.cloneNode = fn
  return fn
}
