import { ComponentFn, ComponentProps } from '@component/component.ts'
import { currentComponent } from '@context/component.ts'
import { createComponentContext } from '@render/component.ts'
import { getNodes } from '@render/node.ts'
import { renderChildren } from '@render/render.ts'
import { RVJS_BLOCK_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export const Block = (componentFn: ComponentFn, props: ComponentProps) => {
  const component = createComponentContext(RVJS_BLOCK_COMPONENT_IDENTIFIER, {
    render: () => {
      currentComponent.value = component
      const children = renderChildren(component, () => componentFn(props))
      const newNodes = getNodes(children) as Node[]
      ;(component.childNodes[0] as Comment).replaceWith(
        ...newNodes.flat(Infinity),
      )
      component.childNodes.length = 0
      component.childNodes.push(...newNodes)
    },
  })
  component.childNodes.push(document.createComment('BLOCK_COMPONENT_TEMP_NODE'))

  return component
}
