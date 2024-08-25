import { Block } from '@block/block.ts'
import { ComponentBlock } from '@block/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'

export const BlockRelations = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    #parent: Block | null
    #children: Block[]
    #componentShortcut: {
      parent: ComponentBlock | null
      children: ComponentBlock[]
    }

    constructor(...args: any[]) {
      super(...args)
      this.#parent = null
      this.#children = []
      this.#componentShortcut = {
        parent: null,
        children: [],
      }
    }

    get parent() {
      return this.#parent
    }

    set parent(value: Block | null) {
      this.#parent = value
    }

    get child() {
      return this.#children[0]
    }

    set child(child: Block) {
      this.#children[0] = child
    }

    get children() {
      return this.#children
    }

    set children(value: Block[]) {
      this.#children = value
    }

    addChild(child: Block) {
      this.#children.push(child)
    }

    get shortcutParent() {
      return this.#componentShortcut.parent
    }

    set shortcutParent(shortcutParent: ComponentBlock) {
      this.#componentShortcut.parent = shortcutParent
    }

    get shortcutChildren() {
      return this.#componentShortcut.children
    }

    addShortcutChild(componentChild: ComponentBlock) {
      this.#componentShortcut.children.push(componentChild)
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
