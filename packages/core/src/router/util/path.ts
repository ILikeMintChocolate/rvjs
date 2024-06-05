export const getCurrentPath = () => {
  return window.location.pathname
}

export type Paths = Path[]

export interface Path {
  pathname: string
  query: Record<string, string>
}

export const tokenizePath = (path: string) => {
  if (path.length === 0 || (path.length === 1 && path[0] === '/')) {
    return [
      {
        pathname: '/',
        query: {},
      },
    ]
  }

  const splitedPaths = path
    .split('/')
    .filter(Boolean)
    .map((path) => {
      const splitedBySymbol = path.split(/[?&]/g)
      const queries = splitedBySymbol.slice(1).reduce((object, query) => {
        const splitedByEqual = query.split('=')
        // @ts-ignore
        object[splitedByEqual[0]] = splitedByEqual[1]

        return object
      }, {})

      return {
        pathname: `/${splitedBySymbol[0]}`,
        query: queries,
      }
    })

  return splitedPaths
}

export const isPathnameEqual = (pathname1: string, pathname2: string) => {
  const paths1 = tokenizePath(pathname1)
  const paths2 = tokenizePath(pathname2)

  if (paths1.length !== paths2.length) {
    return false
  }

  for (let i = 0; i < paths1.length; i++) {
    if (!isPathDeepEqual(paths1[i], paths2[i])) {
      return false
    }
  }

  return true
}

export const isPathEqual = (path1?: Path, path2?: Path) => {
  if (path1 === undefined && path2 === undefined) {
    return true
  }

  if (!path1 || !path2) {
    return false
  }

  return path1.pathname === path2.pathname
}

export const isPathDeepEqual = (path1: Path, path2: Path) => {
  if (path1 === undefined && path2 === undefined) {
    return true
  }

  if (!path1 || !path2) {
    return false
  }

  const query1 = path1.query
  const query2 = path2.query

  if (Object.keys(query1).length !== Object.keys(query2).length) {
    return false
  }

  for (const key in query1) {
    if (query1[key] !== query2[key]) {
      return false
    }
  }

  return path1.pathname === path2.pathname
}
