// @ts-nocheck

import { describe, expect, test } from 'vitest'
import { component } from '../../dom/component.ts'
import { div } from '../../dom/element.ts'

describe('check component is traversing in order using children shortcuts', () => {
  test('basic structure 1', () => {
    const Parent = component(() => {
      return div({
        children: [Child({ key: 'Child' })],
      })
    })
    const Child = component(() => {
      return div({
        children: [GrandChild({ key: 'GrandChild' })],
      })
    })
    const GrandChild = component(() => {
      return div({})
    })
    const app = Parent({ key: 'Parent' })
    const allComponentKeysUsingShortcut: string[] = []
    app.traverseShortcutChildComponents((component) => {
      allComponentKeysUsingShortcut.push(component.key ?? '')
    })
    expect(allComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child',
      'GrandChild',
    ])
  })

  test('basic structure 2', () => {
    const Parent = component(() => {
      return div({
        children: [
          Child({ key: 'Child1', index: 1 }),
          Child({ key: 'Child2', index: 2 }),
          Child({ key: 'Child3', index: 3 }),
        ],
      })
    })
    const Child = component((props) => {
      const { index } = props
      return div({
        children: [GrandChild({ key: 'GrandChild' + index })],
      })
    })
    const GrandChild = component(() => {
      return div({})
    })
    const app = Parent({ key: 'Parent' })
    const allComponentKeysUsingShortcut: string[] = []
    app.traverseShortcutChildComponents((component) => {
      allComponentKeysUsingShortcut.push(component.key ?? '')
    })
    expect(allComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child2',
      'GrandChild2',
      'Child3',
      'GrandChild3',
    ])
  })
})
