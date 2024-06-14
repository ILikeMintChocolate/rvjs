import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { Block } from '@dom/type.ts'
import { routeContext } from '@router/context/routerContext.ts'

interface ReceivableProps {
  key?: string
}

export type ComponentFn = (props: any) => Component

export const component = <Props>(render: (props: Props) => Block) => {
  return function componentRender(props?: Props & ReceivableProps) {
    const { key, ...restProps } = props ?? {}
    const componentBlock = new Component()
    let previousComponent: Component | null = null

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
