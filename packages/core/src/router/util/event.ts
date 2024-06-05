import { getCurrentPath, isPathnameEqual } from '@router/util/path.ts'

export interface HistoryState {
  prevPath: string
  newPath: string
}

export const pathEvent = (() => {
  const historyState = { prevPath: '', newPath: '' }

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
    window.addEventListener('navigate', () => callback(historyState))
  }

  return {
    navigate,
    onPathChange,
  }
})()
