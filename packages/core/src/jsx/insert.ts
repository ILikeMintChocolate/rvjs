import { Component } from '@block/component/component.ts'
import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import {
  isArray,
  isBoolean,
  isComponent,
  isFunction,
  isNode,
} from '@type/guard.ts'

export const insert = (parent: HTMLElement, value: unknown, next: Node) => {
  if (value == null || isBoolean(value)) {
    return
  } else if (isArray(value)) {
    insertArray(parent, value, next)
  } else if (isFunction(value)) {
    insertFunction(parent, value, next)
  } else if (isComponent(value)) {
    insertComponent(parent, value, next)
  } else if (isNode(value)) {
    insertNode(parent, value, next)
  } else {
    insertNode(parent, document.createTextNode(String(value)), next)
  }
}

const insertArray = (parent: HTMLElement, values: unknown[], next: Node) => {
  values.forEach((value) => {
    insert(parent, value, next)
  })
}

const insertComponent = (
  parent: HTMLElement,
  component: Component,
  next: Node,
) => {
  const parentComponent = componentContext.get()
  if (parentComponent) {
    parentComponent.setParentChildRelation(component)
  }
  componentContext.set(component)
  component.parentNode = parent
  if (next) {
    const fragment = document.createDocumentFragment()
    fragment.append(...component.getNodes())
    parent.insertBefore(fragment, next)
  } else {
    const nodes = component.getNodes()
    parent.append(...nodes)
  }
  componentContext.set(parentComponent)
}

const insertNode = (parent: HTMLElement, node: Node, next: Node) => {
  if (next) {
    parent.insertBefore(node, next)
  } else {
    parent.appendChild(node)
  }
}

const insertFunction = (parent: HTMLElement, value: Function, next: Node) => {
  const startNode = document.createComment('VALUE-START')
  const endNode = document.createComment('VALUE-END')
  insert(parent, startNode, next)
  insert(parent, endNode, next)
  const component = componentContext.get()
  const effectFn = () => {
    clearNodes(parent, startNode, endNode)
    stateContext.set({
      component,
      type: 'DOM_EFFECT',
      target: parent,
      effectFn: effectFn,
    })
    const newValue = value()
    stateContext.clear()
    insert(parent, newValue, endNode)
  }
  stateContext.set({
    component,
    type: 'DOM_EFFECT',
    target: parent,
    effectFn: effectFn,
  })
  const newValue = value()
  stateContext.clear()
  insert(parent, newValue, endNode)
}

const clearNodes = (parent: HTMLElement, start: Node, end: Node) => {
  let currentNode = start.nextSibling
  while (currentNode !== end) {
    const next = currentNode.nextSibling
    parent.removeChild(currentNode)
    currentNode = next
  }
}
