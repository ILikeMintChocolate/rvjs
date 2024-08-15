import { Block } from '@block/block.ts'
import { component } from '@component/component.ts'
import { div, textNode } from '@element/elementMap.ts'
import { For } from '@flow/for.ts'
import { Switch } from '@flow/switch.ts'
import { Toggle } from '@flow/toggle.ts'
import { useState } from '@hook/useState.ts'

export const validateParentChildren = (parent: Block): boolean => {
  let isValid = true
  const traverse = (node: Block): boolean => {
    let valid = true
    node.children.forEach((child) => {
      if (child.parent !== node) {
        valid = false
      }
      valid = valid && traverse(child)
    })
    return valid
  }
  isValid = traverse(parent)
  return isValid
}

export const validateRealDOMElement = (parent: HTMLElement) => {
  const keys = []
  const traverse = (parent: HTMLElement) => {
    for (const child of parent.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        keys.push(child.textContent)
      } else {
        keys.push((child as HTMLElement).id)
        // @ts-ignore
        traverse(child)
      }
    }
  }
  traverse(parent)
  return keys
}

export const createElement = (key: string, children: Block[] = []) => {
  return div({
    id: key,
    children,
  })
}

export const createComponent = (key: string, child: Block) => {
  return component(() => child)({
    key,
  })
}

export const createFor = (key: string, setter: Object, children: Block[]) => {
  const [blocks, setBlocks] = useState(
    Array.from({ length: children.length }, (_, i) => children[i]),
  )
  setter[key] = setBlocks
  return For(blocks, (block) => {
    return block
  })
}

export const createSwitch = (
  key: string,
  setter: Object,
  initialState: string,
  children: Record<string, Block>,
) => {
  const [status, setStatus] = useState(initialState)
  setter[key] = setStatus
  return Switch(status, (status) => {
    return children[status]
  })
}

export const createToggle = (
  key: string,
  setter: Object,
  initialState: boolean,
  child: Block,
) => {
  const [bool, setBool] = useState<boolean>(initialState)
  setter[key] = setBool
  return Toggle(bool, () => {
    return child
  })
}

export const createText = (key: string) => {
  return textNode(key)
}
