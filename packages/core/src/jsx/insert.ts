import { currentComponent } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { Component } from '@render/component.ts'
import { getNodes } from '@render/node.ts'
import { setComponentRelation } from '@render/relation.ts'
import {
  isArray,
  isBoolean,
  isComponent,
  isFunction,
  isNode,
} from '@type/guard.ts'

export const insert = (parent: HTMLElement, value: unknown, next?: Node) => {
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
    insertText(parent, String(value), next)
  }
}

const insertArray = (parent: HTMLElement, values: unknown[], next?: Node) => {
  for (const value of values) {
    insert(parent, value, next)
  }
}

const insertComponent = (
  parent: HTMLElement,
  component: Component,
  next?: Node,
) => {
  const parentComponent = currentComponent.value
  if (parentComponent) {
    setComponentRelation(parentComponent, component)
  }
  currentComponent.value = component
  component.parentNode = parent
  if (next) {
    const fragment = document.createDocumentFragment()
    fragment.append(...getNodes([component]).flat(Infinity))
    parent.insertBefore(fragment, next)
  } else {
    parent.append(...getNodes([component]).flat(Infinity))
  }
  currentComponent.value = parentComponent
}

const insertNode = (parent: HTMLElement, node: Node, next?: Node) => {
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
  const component = currentComponent.value
  const effectFn = () => {
    clearNodes(parent, startNode, endNode)
    stateContext.value = {
      component,
      target: parent,
      type: 'DOM_EFFECT',
      effectFn: effectFn,
    }
    const newValue = value()
    stateContext.value = null
    insert(parent, newValue, endNode)
  }
  stateContext.value = {
    component,
    target: parent,
    type: 'DOM_EFFECT',
    effectFn: effectFn,
  }
  const newValue = value()
  stateContext.value = null
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

const insertText = (parent: HTMLElement, value: string, next?: Node) => {
  if (next) {
    parent.insertBefore(document.createTextNode(value), next)
  } else {
    parent.appendChild(document.createTextNode(value))
  }
}
