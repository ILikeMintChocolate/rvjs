export const isInCoreJSXPage = (pathname: string) => {
  return /\/core-jsx\//.test(pathname)
}

export const isInCoreJSPage = (pathname: string) => {
  return /\/core-js\//.test(pathname)
}

export const isInUIJSXPage = (pathname: string) => {
  return /\/ui-jsx\//.test(pathname)
}

export const isInUIJSPage = (pathname: string) => {
  return /\/ui-js\//.test(pathname)
}

export const isInIsJSPage = (pathname: string) => {
  return /\/is-js\//.test(pathname)
}

export const isInBlogPage = (pathname: string) => {
  return /\/blog(\/|$)/.test(pathname)
}

export const isPathIncluded = (segment: string, pathname: string) => {
  return new RegExp(segment + ' ').test(pathname + ' ')
}
