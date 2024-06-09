import { Component } from '@component/componentBlock.ts'
import { useState } from '@hook/useState.ts'
import { getCurrentPath, isPathnameEqual } from '@router/util/path.ts'

export interface HistoryState {
  prevPath: string
  newPath: string
}

export interface Route {
  pathType: 'static' | 'dynamic' | 'error'
  pathname: string
  dynamicKey?: string
  query: Record<string, string>
  component: Component
}

export const pathEvent = (() => {
  const historyState = { prevPath: '', newPath: '' }
  const [getRoutes, setRoutes] = useState<Route[]>([])
  const [getPathname, setPathname] = useState<string>('')

  window.addEventListener('popstate', () => {
    const newPath = getCurrentPath()

    historyState.prevPath = historyState.newPath
    historyState.newPath = newPath

    window.dispatchEvent(new Event('navigate'))
  })

  const navigate = (newPath: string) => {
    const prevPath = getCurrentPath()

    if (isPathnameEqual(prevPath, newPath)) {
      return
    }

    historyState.prevPath = prevPath
    historyState.newPath = newPath

    try {
      const newPathUrl = new URL(newPath)

      if (newPathUrl.origin !== window.location.origin) {
        window.open(newPath, '_blank')
      } else {
        window.history.pushState({ prevPath, newPath }, '', newPath)
        window.dispatchEvent(new Event('navigate'))
      }
    } catch {
      window.history.pushState({ prevPath, newPath }, '', newPath)
      window.dispatchEvent(new Event('navigate'))
    }
  }

  const onPathChange = (callback: (state: HistoryState) => void) => {
    setPathname(getCurrentPath())
    window.addEventListener('navigate', () => {
      callback(historyState)
      setPathname(getCurrentPath())
    })
  }

  return {
    navigate,
    onPathChange,
    getPathname,
    getRoutes,
    setRoutes,
  }
})()
