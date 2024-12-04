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
