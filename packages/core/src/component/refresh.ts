import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { createComponentContext } from '@render/component.ts'
import { clearNodes, getNodes, insertNodes } from '@render/node.ts'
import { destroyTree, renderChildren, renderTree } from '@render/render.ts'
import {
  RVJS_COMPONENT_FN_IDENTIFIER,
  RVJS_REFRESH_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'

interface RefreshProps {
  by: any
  children: JSX.Element
}

export const Refresh = (props: RefreshProps) => {
  const component = createComponentContext(RVJS_REFRESH_COMPONENT_IDENTIFIER, {
    startNode: document.createComment('REFRESH_COMPONENT_START_NODE'),
    endNode: document.createComment('REFRESH_COMPONENT_END_NODE'),
    render: () => {
      currentComponent.value = component
      const effectFn = (isInitial: Boolean = false) => {
        if (!isInitial) {
          clearNodes(component.startNode, component.endNode)
          destroyTree(component, false)
          component.childComponents.length = 0
        }
        const children = renderChildren(component, () => props.children)
        insertNodes(
          component.parentNode,
          component.endNode,
          getNodes(children).flat(Infinity).filter(Boolean),
        )
        if (!isInitial) {
          renderTree(component, false)
        }
      }
      stateContext.value = {
        component: currentComponent.value,
        target: component.startNode,
        type: 'DOM_EFFECT',
        effectFn,
      }
      props.by
      stateContext.value = null
      effectFn(true)
    },
  })

  return component
}
Refresh.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
