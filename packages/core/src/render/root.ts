import { currentComponent } from '@context/component.ts'
import { insert } from '@jsx/insert.ts'
import { getNodes } from '@render/node.ts'
import { renderTree } from '@render/render.ts'
import { isComponent } from '@type/guard.ts'
import { toArray } from '@util/data.ts'

export const root = (rootNode: HTMLElement, value: any) => {
  if (isComponent(value)) {
    currentComponent.value = value
    value.parentNode = rootNode
    rootNode.append(...getNodes(toArray(value)).flat(Infinity))
    renderTree(value, true)
    currentComponent.value = null
  } else {
    insert(rootNode, value, null)
  }
}
