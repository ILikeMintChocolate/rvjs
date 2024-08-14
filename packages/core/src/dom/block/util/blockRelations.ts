import { Block } from '@block/block.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'

export const BlockRelations = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    #parent: Block | null
    #children: Block[]

    constructor(...args: any[]) {
      super(...args)
      this.#parent = null
      this.#children = []
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
  }
}
