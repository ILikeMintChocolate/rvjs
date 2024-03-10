import { componentContext } from '../../dom/executionContext.ts'
import { ComponentBlock } from '../../dom/componentBlock.ts'

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
    setProvider,
    setContext,
    getContext,
    deleteProvider,
  }
}