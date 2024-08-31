import { ComponentBlock } from '@block/component.ts'
import { useState } from '@hook/useState.ts'
import { RouterOptions } from '@router/router.ts'
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
  component: ComponentBlock
}

let instance = null
let pathEventOptions = null

export const getPathEventInstance = (options?: RouterOptions) => {
  if (instance) {
    return instance
  }
  if (options) {
    pathEventOptions = options
  }
  instance = pathEvent(pathEventOptions)
  return instance
}

export const pathEvent = (options: RouterOptions) => {
  const { useHash } = options
  const historyState = { prevPath: '', newPath: '' }
  const [getRoutes, setRoutes] = useState<Route[]>([])
  const [getPathname, setPathname] = useState<string>(getCurrentPath(useHash))

  window.addEventListener('popstate', () => {
    const newPath = getCurrentPath(useHash)
    historyState.prevPath = historyState.newPath
    historyState.newPath = newPath
    window.dispatchEvent(new Event('navigate'))
  })

  const navigate = (newPath: string) => {
    let prevPath = getCurrentPath(useHash)
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
      window.history.pushState(
        { prevPath, newPath },
        '',
        useHash ? `#${newPath}` : newPath,
      )
      window.dispatchEvent(new Event('navigate'))
    }
  }

  const onPathChange = (callback: (state: HistoryState) => void) => {
    setPathname(getCurrentPath(useHash))
    window.addEventListener('navigate', () => {
      callback(historyState)
      setPathname(getCurrentPath(useHash))
    })
  }

  return {
    navigate,
    onPathChange,
    getPathname,
    getRoutes,
    setRoutes,
  }
}
