import { ElementBlock } from './elementBlock.ts'
import { ComponentBlock } from './componentBlock.ts'
import { componentContext } from './executionContext.ts'

export const component = <Props = undefined>(
  render: (props: Props) => ElementBlock | ElementBlock[],
) => {
  return function componentRender(props?: Props) {
    const componentBlock = new ComponentBlock()
    componentContext.set(componentBlock)
    componentBlock.children = render(props!)
    componentContext.set(null)

    return componentBlock
  }
}
