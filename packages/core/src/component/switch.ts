import { currentComponent } from '@context/component.ts'
import { Component, createComponentContext } from '@render/component.ts'
import { getNodes } from '@render/node.ts'
import { renderChildren } from '@render/render.ts'
import {
  RVJS_COMPONENT_FN_IDENTIFIER,
  RVJS_SWITCH_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'

interface SwitchProps {
  children: Component[]
}

export const Switch = (props: SwitchProps) => {
  const component = createComponentContext(RVJS_SWITCH_COMPONENT_IDENTIFIER, {
    tempNode: document.createComment('SWITCH_COMPONENT_TEMP_NODE'),
    render: () => {
      currentComponent.value = component
      const children = renderChildren(component, () => props.children)
      component.tempNode.replaceWith(...getNodes(children).flat(Infinity))
      delete component.tempNode
    },
  })

  return component
}
Switch.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
