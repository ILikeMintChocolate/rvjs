import { Block } from '@block/block.ts'
import { HTMLNode } from '@element/type.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'
import { Children } from '@type/type.ts'
import { NestedArray } from '@type/util.ts'

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
    let rerenderableIndex = 0
    const rerenderableChildren = []
    const newNestedNodes: NestedArray<HTMLNode> = []
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (!child) {
        continue
      }
      child.parent = this
      this.addChild(child)
      if (isElement(child) || isTextNode(child)) {
        newNestedNodes.push(child.element)
        domIndex += 1
      } else {
        child.rerenderableIndex = rerenderableIndex++
        rerenderableChildren.push(child)
        child.domIndex = domIndex
        domIndex += child.domLength
        newNestedNodes.push(child.nestedNodes)
      }
    }
    this.rerenderableChildren = rerenderableChildren
    this.nestedNodes = newNestedNodes
    const fragment = document.createDocumentFragment()
    fragment.append(...this.nodes)
    this.element.appendChild(fragment)
  }
}
