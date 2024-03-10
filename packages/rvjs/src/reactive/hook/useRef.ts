export interface RefObject<Ref> {
  current: undefined | Ref
}

export const useRef = <Ref>() => {
  return {
    current: null,
  } as RefObject<Ref>
}
