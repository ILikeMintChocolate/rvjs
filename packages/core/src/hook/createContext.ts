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
    let parent = component.parentComponent

    while (parent !== undefined) {
      if (parent.contextRef === contextRef) {
        return parent.context
      }
      parent = parent.parentComponent
    }
  }

  const setContext: SetContext<Context> = (context) => {
    const providerComponent = currentComponent.value
    providerComponent.contextRef = contextRef
    providerComponent.context = context
  }

  return {
    setContext,
    getContext,
  }
}
