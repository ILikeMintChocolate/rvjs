import { ElementObject } from '@hook/useElement.ts'

export const use = (
  refObject: ElementObject<unknown>,
  element: HTMLElement,
) => {
  refObject.current = element
}
