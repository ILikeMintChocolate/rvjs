import { Block } from '@block/block.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'
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
    let rerenderableIndex = 0
    const rerenderableChildren = []
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      if (!child) {
        continue
      }
      this.addChildren(child)
      if (isElementBlock(child) || isTextNodeBlock(child)) {
        fragment.appendChild(child.element)
        domIndex += 1
      } else {
        child.rerenderableIndex = rerenderableIndex++
        rerenderableChildren.push(child)
        child.domIndex = domIndex
        domIndex += child.domLength
        fragment.append(...child.getChildNodes())
      }
    }
    this.rerenderableChildren = rerenderableChildren
    this.element.appendChild(fragment)
  }
}
