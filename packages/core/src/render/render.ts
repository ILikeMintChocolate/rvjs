import { Component } from '@render/component.ts'
import { setComponentRelation } from '@render/relation.ts'
import { isComponent } from '@type/guard.ts'
import { toArray } from '@util/data.ts'

export const renderTree = (component: Component, includeSelf: boolean) => {
  const stack = []
  if (includeSelf) {
    stack.push(component)
  } else {
    stack.push(...component.childComponents)
  }
  const onMountHandlers = []

  while (stack.length) {
    const currentComponent = stack.pop()
    if (!currentComponent.isRendered) {
      currentComponent.render()
      currentComponent.isRendered = true
    }
    if (currentComponent.onMountHandler) {
      onMountHandlers.push(currentComponent.onMountHandler)
    }
    if (currentComponent.childComponents.length) {
      for (let i = currentComponent.childComponents.length - 1; i >= 0; i--) {
        stack.push(currentComponent.childComponents[i])
      }
    }
  }

  for (const onMountHandler of onMountHandlers) {
    onMountHandler()
  }
}

export const renderChildren = (
  component: Component,
  fn: Function,
): JSX.Element => {
  const children = toArray(fn())
  for (const child of children) {
    if (isComponent(child)) {
      setComponentRelation(component, child)
    }
  }
  return children
}

export const destroyTree = (component: Component, includeSelf: boolean) => {
  const stack: Component[] = []
  if (includeSelf) {
    stack.push(component)
  } else {
    stack.push(...component.childComponents)
  }

  while (stack.length) {
    const currentComponent = stack.pop()
    for (const unsubscribeEffectHandler of currentComponent.unsubscribeEffectHandlers) {
      unsubscribeEffectHandler()
    }
    if (currentComponent.onDestroyHandler) {
      currentComponent.onDestroyHandler()
    }
    if (currentComponent.childComponents.length) {
      for (let i = currentComponent.childComponents.length - 1; i >= 0; i--) {
        stack.push(currentComponent.childComponents[i])
      }
    }
  }
}
