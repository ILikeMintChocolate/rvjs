import { componentContext } from '@context/component.ts'

export type ContextAccessors<Context> = {
  getContext: GetContext<Context>
  setContext: SetContext<Context>
}

export type GetContext<Context> = () => Context

export type SetContext<Context> = (context: Context) => void

export const createContext = <Context>(): ContextAccessors<Context> => {
  const contextRef = {}

  const getContext: GetContext<Context> = () => {
    const component = componentContext.get()!
    let context = null
    component.traverseParent((parentComponent) => {
      if (parentComponent.contextRef === contextRef) {
        context = parentComponent.context
        return false
      }
      return true
    })
    return context!
  }

  const setContext: SetContext<Context> = (context) => {
    const providerComponent = componentContext.get()!
    providerComponent.setContextRef(contextRef)
    providerComponent.setContext(context)
  }

  return {
    setContext,
    getContext,
  }
}
