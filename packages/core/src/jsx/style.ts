export const style = (element: HTMLElement, props: Object) => {
  for (const key in props) {
    element.style[key] = props[key]
  }
}
