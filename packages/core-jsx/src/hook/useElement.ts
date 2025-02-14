export interface ElementObject<T> {
  current: T | null
}

export const useElement = <T>(): ElementObject<T> => {
  return {
    current: null,
  }
}
