import { ComponentBlock } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'

export type DeleteProvider = (component: ComponentBlock) => void

export const createContext = <Value>() => {
  const ref = {}
  const providersMap = new Map<ComponentBlock, Value>()

  const setProvider = () => {
    if (!componentContext.has()) {
      return
    }
    const providerComponent = componentContext.get()!
    providerComponent.contextProvider = ref
    providerComponent.deleteContextProviderHandler = deleteProvider
  }

  const deleteProvider: DeleteProvider = (component) => {
    providersMap.delete(component)
  }

  const setContext = (value: Value) => {
    setProvider()
    const component = componentContext.get()!
    providersMap.set(component, value)
  }

  const getContext = () => {
    const component = componentContext.get()!
    let providerComponent: ComponentBlock | null = null
    component.traverseShortcutParentComponent((parentComponent) => {
      if (parentComponent.contextProvider === ref) {
        providerComponent = parentComponent
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
    size: () => providersMap.size,
    setContext,
    getContext,
    deleteProvider,
  }
}
