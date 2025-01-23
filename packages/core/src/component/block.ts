import { ComponentFn, ComponentProps } from '@component/component.ts'
import { currentComponent } from '@context/component.ts'
import { createComponentContext } from '@render/component.ts'
import { getNodes } from '@render/node.ts'
import { setComponentRelation } from '@render/relation.ts'
import { isComponent } from '@type/guard.ts'
import { toArray } from '@util/data.ts'
import { RVJS_BLOCK_COMPONENT_IDENTIFIER } from '@util/identifier.ts'

export const Block = (componentFn: ComponentFn, props: ComponentProps) => {
  const component = createComponentContext(RVJS_BLOCK_COMPONENT_IDENTIFIER, {
    render: () => {
      currentComponent.value = component
      const children = toArray(componentFn(props))
      for (const child of children) {
        if (isComponent(child)) {
          setComponentRelation(component, child)
        }
      }
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
