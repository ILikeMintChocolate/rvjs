import { isComponent } from '@type/guard.ts'
import {
  RVJS_BLOCK_COMPONENT_IDENTIFIER,
  RVJS_CASE_COMPONENT_IDENTIFIER,
  RVJS_DEFINED_COMPONENT_IDENTIFIER,
  RVJS_FOR_COMPONENT_IDENTIFIER,
  RVJS_REFRESH_COMPONENT_IDENTIFIER,
  RVJS_SWITCH_COMPONENT_IDENTIFIER,
  RVJS_TOGGLE_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'

export const getNodes = (unknowns: JSX.Element) => {
  const stack = [...unknowns.reverse()]
  const nodes = []

  while (stack.length) {
    const unknown = stack.pop()
    if (!isComponent(unknown)) {
      nodes.push(unknown)
      continue
    }

    switch (unknown.$$componentType) {
      case RVJS_BLOCK_COMPONENT_IDENTIFIER:
        // @ts-ignore
        stack.push(unknown.childNodes)
        break
      case RVJS_FOR_COMPONENT_IDENTIFIER:
        stack.push(unknown.endNode, unknown.startNode)
        break
      case RVJS_TOGGLE_COMPONENT_IDENTIFIER:
        stack.push(unknown.endNode, unknown.startNode)
        break
      case RVJS_SWITCH_COMPONENT_IDENTIFIER:
        stack.push(unknown.tempNode)
        break
      case RVJS_CASE_COMPONENT_IDENTIFIER:
        stack.push(unknown.endNode, unknown.startNode)
        break
      case RVJS_REFRESH_COMPONENT_IDENTIFIER:
        stack.push(unknown.endNode, unknown.startNode)
        break
      case RVJS_DEFINED_COMPONENT_IDENTIFIER:
        stack.push(unknown.endNode, unknown.startNode)
        break
    }
  }

  return nodes
}

export const getRenderedNodes = (
  startNode: Comment,
  endNode: Comment,
  includeComment: boolean,
) => {
  const nodes = []
  if (includeComment) {
    nodes.push(startNode)
  }
  let currentNode = startNode.nextSibling

  while (endNode !== currentNode) {
    const node = currentNode
    nodes.push(node)
    currentNode = currentNode.nextSibling
  }
  if (includeComment) {
    nodes.push(endNode)
  }

  return nodes
}

export const clearNodes = (startNode: Comment, endNode: Comment) => {
  let currentNode = startNode.nextSibling
  while (endNode !== currentNode) {
    const node = currentNode
    currentNode = currentNode.nextSibling
    node.remove()
  }
}

export const insertNodes = (
  parentNode: Node,
  endNode: Comment,
  nodes: Node[],
) => {
  for (const node of nodes) {
    parentNode.insertBefore(node, endNode)
  }
}
