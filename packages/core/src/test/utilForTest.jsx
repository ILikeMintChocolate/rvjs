import { onDestroy } from '@hook/onDestroy.ts'
import { onMount } from '@hook/onMount.ts'
import { useState } from '@hook/useState.ts'
import { useNavigate } from '@router/hook/useNavigate.ts'
import { useOutlet } from '@router/hook/useOutlet.ts'
import { vi } from 'vitest'

export const createComponent = (props) => {
  const {
    key,
    hasOutlet = false,
    onMountOrder = [],
    onDestroyOrder = [],
  } = props ?? {}
  return (props) => {
    const { id } = props
    onMount(() => {
      onMountOrder.push(id ?? key)
    })
    onDestroy(() => {
      onDestroyOrder.push(id ?? key)
    })
    return (
      <div>
        <span>{key}</span>
        {hasOutlet ? useOutlet() : null}
        {...props.children}
      </div>
    )
  }
}

export const createComponents = (count, options) => {
  return Array.from({ length: count }, (_, i) =>
    createComponent({
      key: String.fromCharCode(65 + i),
      ...options,
    }),
  )
}

export const findAllSpanTexts = (root) => {
  const result = []
  const traverse = (node) => {
    Array.from(node.children).forEach((child) => {
      if (child.tagName.toLowerCase() === 'span') {
        result.push(child.textContent || '')
      }
      traverse(child)
    })
  }
  traverse(root)
  return result
}

export const mockWindowLocationHash = () => {
  vi.spyOn(window, 'location', 'get').mockReturnValue({ hash: '#/' })
  window.location.hash = ''
}

export const useNavigateMock = (newPath) => {
  useNavigate(newPath)
  window.dispatchEvent(new Event('hashchange'))
}

export const useTest = () => {
  const [showRoot, setShowRoot] = useState(true)
  const rootElement = document.createElement('main')
  const onMountOrder = []
  const onDestroyOrder = []

  const clearOnMountOrder = () => {
    onMountOrder.length = 0
  }

  const clearOnDestroyOrder = () => {
    onDestroyOrder.length = 0
  }

  return {
    showRoot,
    setShowRoot,
    rootElement,
    onMountOrder,
    onDestroyOrder,
    clearOnMountOrder,
    clearOnDestroyOrder,
  }
}
