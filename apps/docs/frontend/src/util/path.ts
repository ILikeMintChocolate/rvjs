export const isInCorePage = (pathname: string) => {
  return /^\/core/.test(pathname)
}

export const isInUIPage = (pathname: string) => {
  return /^\/ui/.test(pathname)
}

export const isInIsPage = (pathname: string) => {
  return /^\/is/.test(pathname)
}
