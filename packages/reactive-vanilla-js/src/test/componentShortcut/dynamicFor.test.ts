// @ts-nocheck

import { describe, expect, test } from 'vitest'
import { component } from '../../dom/component.ts'
import { useState } from '../../reactive/hook/useState.ts'
import { button, div } from '../../dom/element.ts'
import { For } from '../../reactive/children/for.ts'

describe('check component is traversing in order using children shortcuts', () => {
  test('dynamic structure with For (root is component)', () => {
    const Parent = component(() => {
      const [list, setList] = useState([10, 11, 12])
      return div({
        children: [
          button({
            id: 'addButton',
            onclick: () => setList((pre) => [...pre, pre.length + 10]),
          }),
          button({
            id: 'initButton',
            onclick: () => setList([]),
          }),
          Child({ key: 'Child1', index: 1 }),
          For(list, (num) => Child({ key: 'Child' + num, index: num })),
          Child({ key: 'Child100', index: 100 }),
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
      'Child100',
      'GrandChild100',
      'Child10',
      'GrandChild10',
      'Child11',
      'GrandChild11',
      'Child12',
      'GrandChild12',
    ])
    const appElement = app.children[0].element as HTMLElement
    appElement.querySelector('#addButton').click()
    const afterAddedComponentKeysUsingShortcut: string[] = []
    let child13 = null
    app.traverseShortcutChildComponents((component) => {
      if (component.key === 'Child13') {
        child13 = component
      }
      afterAddedComponentKeysUsingShortcut.push(component.key ?? '')
    })
    const child13ParentList: string[] = []
    child13.traverseShortcutParentComponent((component) => {
      child13ParentList.push(component.key ?? '')
    })
    expect(afterAddedComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child100',
      'GrandChild100',
      'Child10',
      'GrandChild10',
      'Child11',
      'GrandChild11',
      'Child12',
      'GrandChild12',
      'Child13',
      'GrandChild13',
    ])
    expect(child13ParentList).toEqual(['Parent'])
    appElement.querySelector('#initButton').click()
    const afterInitializedComponentKeysUsingShortcut: string[] = []
    app.traverseShortcutChildComponents((component) => {
      afterInitializedComponentKeysUsingShortcut.push(component.key ?? '')
    })
    expect(afterInitializedComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child100',
      'GrandChild100',
    ])
  })
  test('dynamic structure with For (root is element)', () => {
    const Parent = component(() => {
      const [list, setList] = useState([10, 11, 12])
      return div({
        children: [
          button({
            id: 'addButton',
            onclick: () => setList((pre) => [...pre, pre.length + 10]),
          }),
          button({
            id: 'initButton',
            onclick: () => setList([]),
          }),
          Child({ key: 'Child1', index: 1 }),
          For(list, (num) =>
            div({ children: [Child({ key: 'Child' + num, index: num })] }),
          ),
          Child({ key: 'Child100', index: 100 }),
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
      'Child100',
      'GrandChild100',
      'Child10',
      'GrandChild10',
      'Child11',
      'GrandChild11',
      'Child12',
      'GrandChild12',
    ])
    const appElement = app.children[0].element as HTMLElement
    appElement.querySelector('#addButton').click()
    const afterAddedComponentKeysUsingShortcut: string[] = []
    let child13 = null
    app.traverseShortcutChildComponents((component) => {
      if (component.key === 'Child13') {
        child13 = component
      }
      afterAddedComponentKeysUsingShortcut.push(component.key ?? '')
    })
    const child13ParentList: string[] = []
    child13.traverseShortcutParentComponent((component) => {
      child13ParentList.push(component.key ?? '')
    })
    expect(afterAddedComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child100',
      'GrandChild100',
      'Child10',
      'GrandChild10',
      'Child11',
      'GrandChild11',
      'Child12',
      'GrandChild12',
      'Child13',
      'GrandChild13',
    ])
    expect(child13ParentList).toEqual(['Parent'])
    appElement.querySelector('#initButton').click()
    const afterInitializedComponentKeysUsingShortcut: string[] = []
    app.traverseShortcutChildComponents((component) => {
      afterInitializedComponentKeysUsingShortcut.push(component.key ?? '')
    })
    expect(afterInitializedComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child100',
      'GrandChild100',
    ])
  })
})
