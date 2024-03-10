import { ElementBlock } from './elementBlock.ts'
import { ComponentBlock } from './componentBlock.ts'
import { componentContext } from './executionContext.ts'
import { ChildrenRender } from '../reactive/hook/children.ts'

export interface ReceivableProps {
  children?: ChildrenRender
  key?: string
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
    const { key, children, ...restProps } = props ?? {}
    const componentBlock = new ComponentBlock()
    componentBlock.key = key ?? null
    let previousComponent: ComponentBlock | null = null

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
    componentBlock.children = renderedElements
    renderedElements.parent = componentBlock
    componentContext.set(previousComponent)

    return componentBlock
  }
}
