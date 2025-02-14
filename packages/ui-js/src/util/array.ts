export const ifIs = <Value>(isTrue: boolean, renderFn: () => Value) => {
  if (isTrue) {
    return [renderFn()]
  } else {
    return []
  }
}
