import { getCurrentPath, splitPath } from '@router/util/path.ts'

export const pathEvent = (() => {
  const pathChangeEvent = new Event('pathChange')
  let currentPath = getCurrentPath()
  let currentPaths = splitPath(currentPath)
  let previousPaths = splitPath(currentPath)

  const dispatchPathChange = () => {
    window.dispatchEvent(pathChangeEvent)
  }

  const changePath = (path: string) => {
    window.history.pushState({}, '', path)
    currentPath = path
    currentPaths = splitPath(path)
    dispatchPathChange()
    previousPaths = currentPaths
  }

  const onPathChange = (
    callback: (prePaths: string[], newPaths: string[]) => void,
  ) => {
    window.addEventListener('pathChange', () =>
      callback(previousPaths, currentPaths),
    )
  }

  return {
    currentPath: () => currentPath,
    currentPaths: () => currentPaths,
    changePath,
    onPathChange,
  }
})()
