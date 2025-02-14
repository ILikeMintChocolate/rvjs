export const mergeProps = (...props: Object[]) => {
  const mergedProps = {}
  for (const obj of props) {
    const descriptors = Object.getOwnPropertyDescriptors(obj)
    Object.defineProperties(mergedProps, descriptors)
  }
  return mergedProps
}
