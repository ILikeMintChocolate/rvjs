import { Component } from '@block/component/component.ts'
import { ForComponent } from '@block/component/for.ts'
import { componentContext } from '@context/component.ts'

interface ForProps<T> {
  each: T[]
  children: (item: unknown) => (Component | Node)[]
}

export const For = <T>(props: ForProps<T>): Component[] => {
  const self = componentContext.get() as ForComponent
  const children = self.renderItems(props.children)
  return children
}
