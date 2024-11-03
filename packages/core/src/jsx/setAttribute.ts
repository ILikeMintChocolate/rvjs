import { ElementObject } from '@hook/useElement.ts'

export const setAttribute = (
  element: HTMLElement,
  key: string,
  value: string,
) => {
  if (key === 'element') {
    // @ts-ignore
    ;(value as ElementObject<typeof element>).current = element
  }
  element.setAttribute(key, value)
}
