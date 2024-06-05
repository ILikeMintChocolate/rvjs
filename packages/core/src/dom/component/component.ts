import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { Child } from '@dom/type.ts'
import { Element } from '@element/elementBlock.ts'

export interface ReceivableProps {
  key?: string
  outlet?: Child
}

export interface ProvideProps {
  caller: Component
}

type ComponentFunction<Props> = (
  props: Props & ReceivableProps,
  context: ProvideProps,
) => Element | Component

export const component = <Props>(render: ComponentFunction<Props>) => {
  return function componentRender(props?: Props & ReceivableProps) {
    const { key, outlet, ...restProps } = props ?? {}
    const componentBlock = new Component()
    let previousComponent: Component | null = null

    componentBlock.key = key ?? null

    if (componentContext.has()) {
      previousComponent = componentContext.get()
    }

    componentContext.set(componentBlock)
    const renderedChild = render(
      {
        outlet,
        ...restProps,
      } as Props & Partial<ReceivableProps>,
      {
        caller: componentBlock,
      } as ProvideProps,
    )

    componentBlock.child = renderedChild
    renderedChild.parent = componentBlock
    componentContext.set(previousComponent)

    return componentBlock
  }
}
