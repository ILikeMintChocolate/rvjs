import { setAttribute } from '@jsx/setAttribute.ts'

export const spread = (element: HTMLElement, props: Object) => {
  Object.entries(props).forEach(([key, value]) => {
    setAttribute(element, key, value)
  })
}
