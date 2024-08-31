import { component } from '@component/component.ts'
import { root } from '@component/root.ts'
import { div } from '@element/elementMap.ts'
import { For } from '@flow/for.ts'
import { useState } from '@hook/useState.ts'
import { onDestroy } from '@lifecycle/onDestroy.ts'
import { Children } from '@type/type.ts'
import { describe, expect, test } from 'vitest'

describe('testing onDestroy', () => {
  const createComponent = (
    order: string[],
    key: string,
    children: Children,
  ) => {
    return component(() => {
      onDestroy(() => {
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
    expect(order).toEqual([])
  })

  test('case - 2', () => {
    const order = []
    const [ids, setIds] = useState([1, 2, 3])
    const App = createComponent(order, 'A', [
      For(ids, (id) => {
        return createComponent(order, String(id), [])
      }),
    ])
    root(document.createElement('div'), App)
    setIds([])
    expect(order).toEqual(['1', '2', '3'])
  })
})
