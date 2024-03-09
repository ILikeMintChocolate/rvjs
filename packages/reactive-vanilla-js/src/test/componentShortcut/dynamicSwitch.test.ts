// @ts-nocheck

import { describe, expect, test } from 'vitest'
import { component } from '../../dom/component.ts'
import { useState } from '../../reactive/hook/useState.ts'
import { button, div } from '../../dom/element.ts'
import { Switch } from '../../reactive/children/switch.ts'
import { ComponentBlock } from '../../dom/componentBlock.ts'

describe('check component is traversing in order using children shortcuts', () => {
  test('dynamic structure with switch (root is element)', () => {
    const Parent = component(() => {
      const [isOpen, setOpen] = useState(true)
      return div({
        children: [
          button({
            id: 'button',
            onclick: () => setOpen(!isOpen()),
          }),
          Child({ key: 'Child1', index: 1 }),
          Switch(isOpen, (bool) =>
            bool
              ? Child({ key: 'Child2', index: 2 })
              : Child({ key: 'Child3', index: 3 }),
          ),
          Child({ key: 'Child4', index: 4 }),
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
    const allChangedComponentKeysUsingShortcut: string[] = []
    let child2Block1: ComponentBlock | null = null
    app.traverseShortcutChildComponents((component) => {
      if (component.key === 'Child2') {
        child2Block1 = component as ComponentBlock
      }
      allComponentKeysUsingShortcut.push(component.key ?? '')
    })
    expect(allComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child4',
      'GrandChild4',
      'Child2',
      'GrandChild2',
    ])
    const child2Block1ParentList: string[] = []
    child2Block1?.traverseShortcutParentComponent((component) => {
      child2Block1ParentList.push(component.key ?? '')
    })
    expect(child2Block1ParentList).toEqual(['Parent'])
    const appElement = app.children[0].element as HTMLElement
    appElement.querySelector('#button').click()
    let child2Block2: ComponentBlock | null = null
    app.traverseShortcutChildComponents((component) => {
      if (component.key === 'Child2') {
        child2Block2 = component as ComponentBlock
      }
      allChangedComponentKeysUsingShortcut.push(component.key ?? '')
    })
    const child2Block2ParentList: string[] = []
    child2Block1?.traverseShortcutParentComponent((component) => {
      child2Block2ParentList.push(component.key ?? '')
    })
    expect(child2Block2ParentList).toEqual(['Parent'])
    expect(allChangedComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child4',
      'GrandChild4',
      'Child3',
      'GrandChild3',
    ])
  })

  test('dynamic structure with switch (root is element)', () => {
    const Parent = component(() => {
      const [isOpen, setOpen] = useState(true)
      return div({
        children: [
          button({
            id: 'button',
            onclick: () => setOpen(!isOpen()),
          }),
          Child({ key: 'Child1', index: 1 }),
          Switch(isOpen, (bool) =>
            bool
              ? div({
                  children: [Child({ key: 'Child2', index: 2 })],
                })
              : div({
                  children: [Child({ key: 'Child3', index: 3 })],
                }),
          ),
          Child({ key: 'Child4', index: 4 }),
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
    const allChangedComponentKeysUsingShortcut: string[] = []
    let child2Block1: ComponentBlock | null = null
    app.traverseShortcutChildComponents((component) => {
      if (component.key === 'Child2') {
        child2Block1 = component as ComponentBlock
      }
      allComponentKeysUsingShortcut.push(component.key ?? '')
    })
    expect(allComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child4',
      'GrandChild4',
      'Child2',
      'GrandChild2',
    ])
    const child2Block1ParentList: string[] = []
    child2Block1?.traverseShortcutParentComponent((component) => {
      child2Block1ParentList.push(component.key ?? '')
    })
    expect(child2Block1ParentList).toEqual(['Parent'])
    const appElement = app.children[0].element as HTMLElement
    appElement.querySelector('#button').click()
    let child2Block2: ComponentBlock | null = null
    app.traverseShortcutChildComponents((component) => {
      if (component.key === 'Child2') {
        child2Block2 = component as ComponentBlock
      }
      allChangedComponentKeysUsingShortcut.push(component.key ?? '')
    })
    const child2Block2ParentList: string[] = []
    child2Block1?.traverseShortcutParentComponent((component) => {
      child2Block2ParentList.push(component.key ?? '')
    })
    expect(child2Block2ParentList).toEqual(['Parent'])
    expect(allChangedComponentKeysUsingShortcut).toEqual([
      'Parent',
      'Child1',
      'GrandChild1',
      'Child4',
      'GrandChild4',
      'Child3',
      'GrandChild3',
    ])
  })
})
