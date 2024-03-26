import { ComponentBlock } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { ElementBlock } from '@element/elementBlock.ts'
import { ChildrenRender } from '@hook/children.ts'
import { OutletRender } from '@router/hook/outlet.ts'

export interface ReceivableProps {
  children?: ChildrenRender
  key?: string
  outlet?: OutletRender
}

export interface ProvideProps {
  caller: ComponentBlock
}

type ComponentFunction<Props> = (
  props: Props & ReceivableProps,
  context: ProvideProps,
) => ElementBlock

export const component = <Props>(render: ComponentFunction<Props>) => {
  return function componentRender(props?: Props & ReceivableProps) {
    const { key, children, outlet, ...restProps } = props ?? {}
    const componentBlock = new ComponentBlock()
    let previousComponent: ComponentBlock | null = null

    componentBlock.key = key ?? null
    componentBlock.outletRender = outlet ?? null

    if (componentContext.has()) {
      const parentComponent = componentContext.get()!
      componentBlock.shortcutParentComponent = parentComponent
      parentComponent.appendShortcutChildComponent(componentBlock)
      previousComponent = componentContext.get()
    }

    componentContext.set(componentBlock)
    const renderedElements = render(
      {
        children,
        ...restProps,
      } as Props & ReceivableProps,
      {
        caller: componentBlock,
      } as ProvideProps,
    )

    componentBlock.pushChildren(renderedElements)
    renderedElements.parent = componentBlock
    componentContext.set(previousComponent)

    return componentBlock
  }
}
