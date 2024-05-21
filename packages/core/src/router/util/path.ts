export const getCurrentPath = () => {
  return window.location.pathname
}

export const splitPath = (paths: string) => {
  if (paths.length === 0 || (paths.length === 1 && paths[0] === '/')) {
    return ['/']
  }

  const splitedPaths = paths
    .split('/')
    .filter(Boolean)
    .map((path) => `/${path}`)

  return splitedPaths
}
