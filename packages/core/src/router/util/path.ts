export const findPathType = (path: string) => {
  if (isDynamicPath(path)) {
    return 'DYNAMIC'
  } else if (isAnyPath(path)) {
    return 'ANY'
  } else {
    return 'STATIC'
  }
}

const isDynamicPath = (path: string) => {
  return path.startsWith('/:', 0)
}

const isAnyPath = (path: string) => {
  return path === '*'
}

export const findDynamicKey = (path: string) => {
  return path.replace('/:', '')
}

export const findDynamicPath = (path: string) => {
  return path.replace('/', '')
}

export const findQuery = (path: string) => {
  const queryStartIndex = path.indexOf('?')
  if (queryStartIndex === -1) {
    return {}
  }
  const queryString = path.substring(queryStartIndex + 1)
  const queryEntries = queryString
    .split('&')
    .map((pair) => pair.split('='))
    .filter(([key, value]) => key && value)
  return Object.fromEntries(queryEntries)
}

export const findPath = (path: string) => {
  const queryStartIndex = path.indexOf('?')
  if (queryStartIndex === -1) {
    return path
  }
  return path.substring(0, queryStartIndex)
}
