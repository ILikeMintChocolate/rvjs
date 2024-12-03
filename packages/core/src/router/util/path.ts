export const isDynamicPath = (path: string) => {
  return path.split('/').some((segment) => segment.startsWith(':'))
}

export const findDynamicKey = (path: string) => {
  return path.replace('/:', '')
}

export const findDynamicPath = (path: string) => {
  return path.replace('/', '')
}
