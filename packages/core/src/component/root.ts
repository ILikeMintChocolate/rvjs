import { componentContext } from '@context/component.ts'
import { isComponent } from '@type/guard.ts'
import { Children } from '@type/jsx.ts'

export const root = (rootNode: HTMLElement, value: Children) => {
  if (isComponent(value)) {
    componentContext.set(value)
    rootNode.append(...value.getNodes())
    value.renderTree(true)
    value.commit()
    componentContext.clear()
  } else {
    rootNode.append(String(value))
  }
}
