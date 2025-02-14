import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { createComponentContext } from '@render/component.ts'
import { clearNodes, getNodes, insertNodes } from '@render/node.ts'
import { destroyTree, renderTree, wrapRenderChildren } from '@render/render.ts'
import { isDefined } from '@type/guard.ts'
import {
  RVJS_COMPONENT_FN_IDENTIFIER,
  RVJS_DEFINED_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'

interface DefinedProps {
  value: any
  children: JSX.Element
}

export const Defined = (props: DefinedProps) => {
  const component = createComponentContext(RVJS_DEFINED_COMPONENT_IDENTIFIER, {
    startNode: document.createComment('DEFINED_COMPONENT_START_NODE'),
    endNode: document.createComment('DEFINED_COMPONENT_END_NODE'),
    render: () => {
      currentComponent.value = component
      const effectFn = (isInitial: Boolean = false) => {
        if (!isDefined(props.value)) {
          clearNodes(component.startNode, component.endNode)
          destroyTree(component, false)
          component.childComponents.length = 0
        } else {
          const children = wrapRenderChildren(component, () => props.children)
          insertNodes(
            component.parentNode,
            component.endNode,
            getNodes(children).flat(Infinity),
          )
          if (!isInitial) {
            renderTree(component, false)
          }
        }
      }
      stateContext.value = {
        component: currentComponent.value,
        type: 'DOM_EFFECT',
        effectFn,
      }
      props.value
      stateContext.value = null
      effectFn(true)
    },
  })

  return component
}
Defined.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
