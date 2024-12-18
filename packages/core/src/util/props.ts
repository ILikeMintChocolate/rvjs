export const defineProps = <
  T = undefined,
  O1 extends object = {},
  O2 extends object = {},
>(
  object1: O1,
  object2: O2,
  options?: {
    children?: string[]
  },
): T extends undefined ? O1 & O2 : T => {
  const newProps = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(object1),
      ...Object.getOwnPropertyDescriptors(object2),
    },
  ) as T extends undefined ? O1 & O2 : T

  if (options?.children) {
    for (const child of options.children) {
      let cachedValue = null
      if (child in object1 || child in object2) {
        Object.defineProperty(newProps, child, {
          get() {
            if (cachedValue === null) {
              cachedValue = (object1 as any)[child] ?? (object2 as any)[child]
            }
            return cachedValue
          },
          configurable: true,
          enumerable: true,
        })
      }
    }
  }

  return newProps
}
