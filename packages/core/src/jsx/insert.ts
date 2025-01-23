import { currentComponent } from '@context/component.ts'
import { effect } from '@jsx/effect.ts'
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

interface EffectContext {
  textNode?: Text
}

export const insert = (
  parent: HTMLElement,
  value: unknown,
  next: Node | null,
  effectContext: EffectContext = {},
) => {
  if (value == null || isBoolean(value)) {
    clearNode(effectContext)
  } else if (isFunction(value)) {
    // @ts-ignore
    effect((effectContext: EffectContext) => {
      return insert(parent, value(), next, effectContext)
    })
  } else if (isArray(value)) {
    insertArray(parent, value, next)
  } else if (isFunction(value)) {
    insertFunction(parent, value, next)
  } else if (isComponent(value)) {
    insertComponent(parent, value, next)
  } else if (isNode(value)) {
    insertNode(parent, value, next)
  } else {
    insertText(parent, String(value), next, effectContext)
  }
  return effectContext
}

const insertArray = (
  parent: HTMLElement,
  values: unknown[],
  next: Node | null,
) => {
  for (const value of values) {
    insert(parent, value, next)
  }
}

const insertComponent = (
  parent: HTMLElement,
  component: Component,
  next: Node,
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

const insertNode = (parent: HTMLElement, node: Node, next: Node) => {
  if (next) {
    parent.insertBefore(node, next)
  } else {
    parent.appendChild(node)
  }
}

const insertFunction = (parent: HTMLElement, value: Function, next: Node) => {
  const newValue = value()
  insert(parent, newValue, next)
}

const clearNode = (effectContext: EffectContext) => {
  if (effectContext.textNode) {
    effectContext.textNode.nodeValue = ''
  }
}

const insertText = (
  parent: HTMLElement | null,
  value: string,
  next: Node,
  effectContext: EffectContext,
) => {
  if (effectContext.textNode) {
    effectContext.textNode.nodeValue = value
  } else {
    const textNode = document.createTextNode(value)
    if (next) {
      parent.insertBefore(textNode, next)
    } else {
      parent.appendChild(textNode)
    }
    effectContext.textNode = textNode
  }
  return effectContext
}
