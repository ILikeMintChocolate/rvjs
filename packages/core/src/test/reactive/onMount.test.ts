import { component } from '@component/component.ts'
import { root } from '@component/root.ts'
import { div } from '@element/elementMap.ts'
import { For } from '@flow/for.ts'
import { useState } from '@hook/useState.ts'
import { onMount } from '@lifecycle/onMount.ts'
import { Children } from '@type/type.ts'
import { describe, expect, test } from 'vitest'

describe('testing onMount', () => {
  const createComponent = (
    order: string[],
    key: string,
    children: Children,
  ) => {
    return component(() => {
      onMount(() => {
        order.push(key)
      })
      return div({
        children,
      })
    })()
  }

  test('case - 1', () => {
    const order = []
    const App = createComponent(order, 'A', [])
    root(document.createElement('div'), App)
    expect(order).toEqual(['A'])
  })

  test('case - 2', () => {
    const order = []
    const App = createComponent(order, 'A', [createComponent(order, 'B', [])])
    root(document.createElement('div'), App)
    expect(order).toEqual(['A', 'B'])
  })

  test('case - 3', () => {
    const order = []
    const App = createComponent(order, 'A', [
      createComponent(order, 'B', []),
      createComponent(order, 'C', []),
    ])
    root(document.createElement('div'), App)
    expect(order).toEqual(['A', 'B', 'C'])
  })

  test('case - 4', () => {
    const order = []
    const App = createComponent(order, 'A', [
      createComponent(order, 'B', [createComponent(order, 'C', [])]),
      createComponent(order, 'D', []),
    ])
    root(document.createElement('div'), App)
    expect(order).toEqual(['A', 'B', 'C', 'D'])
  })

  test('case - 5', () => {
    const order = []
    const [ids, setIds] = useState([1, 2, 3])
    const App = createComponent(order, 'A', [
      For(ids, (id) => {
        return createComponent(order, String(id), [])
      }),
    ])
    root(document.createElement('div'), App)
    expect(order).toEqual(['A', '1', '2', '3'])
    setIds([1, 2])
    expect(order).toEqual(['A', '1', '2', '3'])
  })
})
