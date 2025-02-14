export const addEventListener = <
  T extends keyof HTMLElementEventMap,
  U extends HTMLElement,
>(
  element: U,
  type: T,
  handler: (this: U, ev: HTMLElementEventMap[T]) => any,
  option?: boolean,
) => {
  element.addEventListener(type, handler, option)
}
