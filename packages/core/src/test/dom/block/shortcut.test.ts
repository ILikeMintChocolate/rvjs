import { ComponentBlock } from '@block/component.ts'
import { component } from '@component/component.ts'
import { root } from '@component/root.ts'
import { div } from '@element/elementMap.ts'
import { Children } from '@type/type.ts'
import { describe, expect, test } from 'vitest'

describe('testing component shortcut', () => {
  const createComponent = (key: string, children: Children = []) => {
    const comp = component(() => {
      return div({
        children,
      })
    })
    return comp({
      key,
    })
  }
  const traverseShortcut = (
    component: ComponentBlock,
    callback: (child: ComponentBlock) => boolean,
  ) => {
    const isContinue = callback(component)
    if (!isContinue) {
      return
    }
    if (component.shortcutChildren.length) {
      component.shortcutChildren.forEach((child) => {
        traverseShortcut(child, callback)
      })
    }
  }

  test('case - 1', () => {
    const App = createComponent('A', [
      createComponent('B', [
        createComponent('C'),
        createComponent('D', [createComponent('E'), createComponent('F')]),
      ]),
      createComponent('G'),
    ])
    const app = document.createElement('div')
    root(app, App)
    const keys = []
    let parentKey = undefined
    traverseShortcut(App, (child) => {
      expect(child.shortcutParent?.key).toEqual(parentKey)
      parentKey = child.key
      keys.push(child.key)
      return true
    })
    expect(keys).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  })
})
