import { Block } from '@block/block.ts'
import { RouteContext } from '@block/util/routeContext.ts'

export class TextNode extends RouteContext(Block) {
  constructor(...args: any[]) {
    super({
      type: 'TEXT',
      element: args[0].element,
    })
  }
}
