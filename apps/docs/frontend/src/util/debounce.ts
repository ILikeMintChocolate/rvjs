export const debounce = (callback: Function, wait: number) => {
  let timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(this, args), wait)
  }
}
