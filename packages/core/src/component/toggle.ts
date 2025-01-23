import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { createComponentContext } from '@render/component.ts'
import { clearNodes, getNodes, insertNodes } from '@render/node.ts'
import { destroyTree, renderTree, wrapRenderChildren } from '@render/render.ts'
import {
  RVJS_COMPONENT_FN_IDENTIFIER,
  RVJS_TOGGLE_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'

interface ToggleProps {
  is: boolean
  children: JSX.Element
}

export const Toggle = (props: ToggleProps) => {
  const component = createComponentContext(RVJS_TOGGLE_COMPONENT_IDENTIFIER, {
    startNode: document.createComment('TOGGLE_COMPONENT_START_NODE'),
    endNode: document.createComment('TOGGLE_COMPONENT_END_NODE'),
    render: () => {
      currentComponent.value = component
      const effectFn = (isInitial: Boolean = false) => {
        if (props.is) {
          const children = wrapRenderChildren(component, () => props.children)
          insertNodes(
            component.parentNode,
            component.endNode,
            getNodes(children).flat(Infinity),
          )
          if (!isInitial) {
            renderTree(component, false)
          }
        } else {
          clearNodes(component.startNode, component.endNode)
          destroyTree(component, false)
          component.childComponents.length = 0
        }
      }
      stateContext.value = {
        component: currentComponent.value,
        type: 'DOM_EFFECT',
        effectFn,
      }
      props.is
      stateContext.value = null
      effectFn(true)
    },
  })

  return component
}
Toggle.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
