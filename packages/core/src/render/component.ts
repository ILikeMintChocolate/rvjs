import { RVJS_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export interface Component {
  $$typeof: Symbol
  $$componentType: Symbol
  parentComponent: Component | null
  childComponents: Component[]
  childNodes: Node[]
  unsubscribeEffectHandlers: Function[]
  onMountHandler: Function | null
  onDestroyHandler: Function | null
  isRendered: boolean
  render: Function | null
  contextMap: Map<Object, any>

  parentNode?: Node
  tempNode?: Comment
  startNode?: Comment
  endNode?: Comment

  [key: string]: any
}

export const createComponentContext = (
  type: Symbol,
  additionalProps: Record<string, any> = {},
): Component => {
  return {
    $$typeof: RVJS_COMPONENT_IDENTIFIER,
    $$componentType: type,
    parentComponent: null,
    childComponents: [],
    childNodes: [],
    unsubscribeEffectHandlers: [],
    onMountHandler: null,
    onDestroyHandler: null,
    isRendered: false,
    render: null,
    contextMap: new Map(),
    ...additionalProps,
  }
}
