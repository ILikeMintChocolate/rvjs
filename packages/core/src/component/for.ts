import { Block } from '@component/block.ts'
import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { GetState, SetState, useState } from '@hook/useState.ts'
import { Component, createComponentContext } from '@render/component.ts'
import { getNodes, getRenderedNodes } from '@render/node.ts'
import { setComponentRelation } from '@render/relation.ts'
import { destroyTree, renderTree } from '@render/render.ts'
import {
  RVJS_COMPONENT_FN_IDENTIFIER,
  RVJS_FOR_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'
import domdiff from 'domdiff'

interface ForProps<T> {
  each: T[]
  children: (item: T, index?: GetState<number>) => JSX.Element
}

export const For = <T>(props: ForProps<T>) => {
  let memoItems = new Map<
    T,
    {
      components: {
        component: Component
        setIndex: SetState<number>
      }[]
      index: number
    }
  >()
  let memoComponents = new Set<Component>()
  const component = createComponentContext(RVJS_FOR_COMPONENT_IDENTIFIER, {
    startNode: document.createComment('FOR_COMPONENT_START_NODE'),
    endNode: document.createComment('FOR_COMPONENT_END_NODE'),
    render: () => {
      currentComponent.value = component
      const effectFn = (isInitial: Boolean = false) => {
        const items = props.each
        const newMemoItems = new Map<
          T,
          {
            components: {
              component: Component
              setIndex: SetState<number>
            }[]
            index: number
          }
        >()
        const newMemoComponents = new Set<Component>()
        const renderableComponents = []
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          const memoItem = memoItems.get(item)
          if (!newMemoItems.has(item)) {
            newMemoItems.set(item, { components: [], index: 0 })
          }
          if (!memoItem) {
            const [index, setIndex] = useState(i)
            const child = Block(() => props.children(item, index), {})
            setComponentRelation(component, child)
            newMemoItems
              .get(item)
              .components.push({ component: child, setIndex })
            newMemoComponents.add(child)
            renderableComponents.push(child)
          } else if (memoItem.components.length === memoItem.index) {
            const [index, setIndex] = useState(i)
            const child = Block(() => props.children(item, index), {})
            newMemoItems
              .get(item)
              .components.push({ component: child, setIndex })
            newMemoComponents.add(child)
            renderableComponents.push(child)
          } else {
            const { component: child, setIndex } =
              memoItem.components[memoItem.index++]
            setIndex(i)
            memoComponents.delete(child)
            newMemoItems
              .get(item)
              .components.push({ component: child, setIndex })
            newMemoComponents.add(child)
          }
        }
        for (const removableComponent of memoComponents) {
          destroyTree(removableComponent, true)
        }
        domdiff(
          component.parentNode,
          getRenderedNodes(component.startNode, component.endNode, true),
          getNodes([
            component.startNode,
            ...newMemoComponents,
            component.endNode,
          ]).flat(Infinity),
          null,
        )
        if (!isInitial) {
          for (const renderableComponent of renderableComponents) {
            renderTree(renderableComponent, true)
          }
        }
        memoItems = newMemoItems
        memoComponents = newMemoComponents
        component.childComponents = [...newMemoComponents]
      }
      stateContext.value = {
        component: currentComponent.value,
        type: 'DOM_EFFECT',
        effectFn,
      }
      props.each
      stateContext.value = null
      effectFn(true)
    },
  })

  return component
}
For.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
