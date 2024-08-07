import { Block } from '@block/block.ts'
import { HTMLNode } from '@element/type.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'
import { Children } from '@type/type.ts'

export class ElementBlock extends Block {
  constructor(...args: any[]) {
    super({
      type: 'ELEMENT',
      element: args[0].element,
    })
    this.domLength = 1
  }

  appendChildren(children: Children) {
    let domIndex = 0
    let blockIndex = 0
    const rerenderableContexts = []
    const newNodes: HTMLNode[] = []
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (!child) {
        continue
      }
      child.parent = this
      this.addChild(child)
      if (isElement(child) || isTextNode(child)) {
        domIndex += 1
        newNodes.push(child.element)
      } else {
        child.blockIndex = blockIndex++
        rerenderableContexts.push({
          block: child,
          localDOMIndex: domIndex,
        })
        newNodes.push(...child.nodes)
        domIndex += child.domLength
      }
    }
    this.rerenderableContexts = rerenderableContexts
    this.nodes = newNodes
    const fragment = document.createDocumentFragment()
    fragment.append(...this.nodes)
    this.element.appendChild(fragment)
  }
}
