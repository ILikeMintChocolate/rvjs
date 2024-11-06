import { ElementObject } from '@hook/useElement.ts'

export const setAttribute = (
  element: HTMLElement,
  key: string,
  value: string,
) => {
  if (key === 'element') {
    ;(value as unknown as ElementObject<HTMLElement>).current = element
  } else {
    element.setAttribute(key, value)
  }
}
