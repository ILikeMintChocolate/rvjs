import { Block } from '@block/block.ts'
import { ComponentBlock } from '@block/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'

export const BlockRelations = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    parent: Block | null
    child: Block
    children: Block[]
    componentShortcut: {
      parent: ComponentBlock | null
      children: ComponentBlock[]
    }

    constructor(...args: any[]) {
      super(...args)
      this.parent = null
      this.child = null
      this.children = []
      this.componentShortcut = {
        parent: null,
        children: [],
      }
    }

    addChild(child: Block) {
      this.child = child
      child.parent = this as unknown as Block
    }

    removeChild(child: Block) {
      this.child = null
      child.parent = null
    }

    addChildren(child: Block) {
      this.children.push(child)
      child.parent = this as unknown as Block
    }

    get shortcutParent() {
      return this.componentShortcut.parent
    }

    set shortcutParent(shortcutParent: ComponentBlock) {
      this.componentShortcut.parent = shortcutParent
    }

    get shortcutChildren() {
      return this.componentShortcut.children
    }

    addShortcutChild(componentChild: ComponentBlock) {
      this.componentShortcut.children.push(componentChild)
    }

    traverseShortcutParent(
      block: ComponentBlock,
      callback: (parent: ComponentBlock) => boolean,
    ) {
      if (block.shortcutParent) {
        const isStop = callback(block.shortcutParent) ?? false
        if (!isStop) {
          this.shortcutParent.traverseShortcutParent(
            this.shortcutParent,
            callback,
          )
        }
      }
    }
  }
}
