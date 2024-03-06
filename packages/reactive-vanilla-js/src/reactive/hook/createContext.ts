export const createContext = <Context>() => {
  const context = {}
  let isFreezed = false

  const getContext = () => {
    return context as Context
  }

  const setContext = (newContext: Context) => {
    if (isFreezed) {
      return
    }
    Object.assign(context, newContext)
    isFreezed = true
  }

  return {
    getContext,
    setContext,
  }
}
