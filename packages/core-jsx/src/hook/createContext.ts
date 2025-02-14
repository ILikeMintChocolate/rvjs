import { currentComponent } from '@context/component.ts'

export type ContextAccessors<Context> = {
  getContext: GetContext<Context>
  setContext: SetContext<Context>
}

export type GetContext<Context> = () => Context

export type SetContext<Context> = (context: Context) => void

export const createContext = <Context>(): ContextAccessors<Context> => {
  const contextRef = {}

  const getContext: GetContext<Context> = () => {
    const component = currentComponent.value
    let parent = component

    while (parent !== undefined) {
      if (parent.contextMap.has(contextRef)) {
        return parent.contextMap.get(contextRef)
      }
      parent = parent.parentComponent
    }
  }

  const setContext: SetContext<Context> = (context) => {
    const providerComponent = currentComponent.value
    providerComponent.contextMap.set(contextRef, context)
  }

  return {
    setContext,
    getContext,
  }
}
