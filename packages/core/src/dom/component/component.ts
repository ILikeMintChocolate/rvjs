import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { Element } from '@element/elementBlock.ts'
import { ChildrenRender } from '@hook/children.ts'
import { OutletRender } from '@router/hook/outlet.ts'

export interface ReceivableProps {
  children?: ChildrenRender
  key?: string
  outlet?: OutletRender
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
    const { key, children, outlet, ...restProps } = props ?? {}
    const componentBlock = new Component()
    let previousComponent: Component | null = null

    componentBlock.key = key ?? null
    componentBlock.outletRender = outlet ?? null

    if (componentContext.has()) {
      const parentComponent = componentContext.get()!
      componentBlock.shortcutParentComponent = parentComponent
      parentComponent.appendShortcutChildComponent(componentBlock)
      previousComponent = componentContext.get()
    }

    componentContext.set(componentBlock)
    const renderedChild = render(
      {
        ...(children ? { children } : {}),
        ...restProps,
      } as Props & Partial<ReceivableProps>,
      {
        caller: componentBlock,
      } as ProvideProps,
    )

    componentBlock.pushChildren(renderedChild)
    renderedChild.parent = componentBlock
    componentContext.set(previousComponent)

    return componentBlock
  }
}
