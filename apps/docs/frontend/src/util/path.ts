export const isInCoreV03xPage = (pathname: string) => {
  return /^\/core-v0.3.x/.test(pathname)
}

export const isInCoreV02xPage = (pathname: string) => {
  return /^\/core-v0.2.x/.test(pathname)
}

export const isInUIPage = (pathname: string) => {
  return /^\/ui/.test(pathname)
}

export const isInIsPage = (pathname: string) => {
  return /^\/is/.test(pathname)
}
