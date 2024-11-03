export const mergeProps = (...props: Object[]) => {
  const mergedProps = {}
  props.forEach((obj) => {
    const descriptors = Object.getOwnPropertyDescriptors(obj)
    Object.defineProperties(mergedProps, descriptors)
  })
  return mergedProps
}
