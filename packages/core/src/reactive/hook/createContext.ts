import { ComponentBlock } from '@block/component.ts'
import { DeleteProvider } from '@block/util/contextHook.ts'
import { componentContext } from '@context/executionContext.ts'

export const createContext = <Value>() => {
  const ref = {}
  const providersMap = new Map<ComponentBlock, Value>()

  const setProvider = (providerComponent: ComponentBlock) => {
    providerComponent.addContextProvider(ref)
    providerComponent.addDeleteContextProviderHandler(deleteProvider)
  }

  const deleteProvider: DeleteProvider = (component) => {
    providersMap.delete(component)
  }

  const setContext = (value: Value) => {
    const providerComponent = componentContext.get()!
    setProvider(providerComponent)
    providersMap.set(providerComponent, value)
  }

  const getContext = () => {
    const component = componentContext.get()!
    let providerComponent: ComponentBlock | null = null
    component.traverseShortcutParent(component, (parent) => {
      if (parent.hasContextProvider(ref)) {
        providerComponent = parent
        return true
      }
    })
    if (!providerComponent) {
      return
    }
    if (providersMap.has(providerComponent)) {
      return providersMap.get(providerComponent)
    }
  }

  return {
    setContext,
    getContext,
  }
}
