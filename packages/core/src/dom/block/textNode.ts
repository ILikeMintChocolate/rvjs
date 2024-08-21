import { Block } from '@block/block.ts'

export class TextNode extends Block {
  constructor(...args: any[]) {
    super({
      type: 'TEXT',
      element: args[0].element,
    })
  }
}
