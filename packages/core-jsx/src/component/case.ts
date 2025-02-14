import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { createComponentContext } from '@render/component.ts'
import { clearNodes, getNodes, insertNodes } from '@render/node.ts'
import { destroyTree, renderTree, wrapRenderChildren } from '@render/render.ts'
import {
  RVJS_CASE_COMPONENT_IDENTIFIER,
  RVJS_COMPONENT_FN_IDENTIFIER,
} from '@util/identifier.ts'

interface CaseProps {
  is: any
  children: JSX.Element
}

export const Case = (props: CaseProps) => {
  const component = createComponentContext(RVJS_CASE_COMPONENT_IDENTIFIER, {
    startNode: document.createComment('CASE_COMPONENT_START_NODE'),
    endNode: document.createComment('CASE_COMPONENT_END_NODE'),
    render: () => {
      currentComponent.value = component
      const effectFn = (isInitial: Boolean = false) => {
        if (props.is) {
          const children = wrapRenderChildren(component, () => props.children)
          insertNodes(
            component.parentComponent.parentNode,
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
Case.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
