export const storeItemToCache = <T>(key: string, value: T, maxAge: number) => {
  window.localStorage.setItem(
    `${key}-expire`,
    JSON.stringify(Date.now() + maxAge * 1000),
  )
  window.localStorage.setItem(`${key}-data`, JSON.stringify(value))
}

export const getItemFromCache = (key: string) => {
  const itemRaw = window.localStorage.getItem(`${key}-data`)
  const itemDate = JSON.parse(itemRaw)
  return itemDate
}

export const hasItemCache = (key: string) => {
  const hasItem = window.localStorage.getItem(`${key}-expire`) !== undefined
  return hasItem
}

export const isCacheExpired = (key: string) => {
  const expireRaw = window.localStorage.getItem(`${key}-expire`)
  const expireDate = JSON.parse(expireRaw)
  const isExpired = Date.now() > expireDate
  return isExpired
}
