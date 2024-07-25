import { Block } from '@block/block.ts'
import { ComponentBlock } from '@block/component.ts'
import { componentContext } from '@context/executionContext.ts'
import { routeContext } from '@router/context/routerContext.ts'

interface ReceivableProps {
  key?: string
}

export type ComponentFn = (props: unknown) => ComponentBlock

export const component = <Props>(render: (props: Props) => Block) => {
  return function componentRender(props?: Props & ReceivableProps) {
    const { key, ...restProps } = props ?? {}
    const componentBlock = new ComponentBlock()
    let previousComponent: ComponentBlock | null = null
    componentBlock.key = key ?? null
    if (componentContext.has()) {
      previousComponent = componentContext.get()
    }
    componentContext.set(componentBlock)
    if (routeContext.get()) {
      const { pathname, query, dynamicKey } = routeContext.get()!
      componentBlock.pathname = pathname
      componentBlock.queryParams = query
      if (dynamicKey) {
        componentBlock.pathParam = { key: dynamicKey, value: pathname }
      }
    }
    const renderedChild = render(restProps as Props & Partial<ReceivableProps>)
    componentBlock.child = renderedChild
    renderedChild.parent = componentBlock
    componentContext.set(previousComponent)
    return componentBlock
  }
}
