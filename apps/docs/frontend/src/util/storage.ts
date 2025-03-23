interface Item<T> {
  value: T
  expiration: number
}

export class Storage<T> {
  constructor() {}

  getItem(key: string): T {
    const itemText = sessionStorage.getItem(key)
    if (!itemText) {
      return null
    }
    try {
      const { value, expiration } = JSON.parse(itemText) as Item<T>
      if (Date.now() < expiration) {
        return value
      } else {
        sessionStorage.removeItem(key)
        return null
      }
    } catch {
      return null
    }
  }

  setItem<T>(key: string, value: T, maxAge: number) {
    const item: Item<T> = {
      value,
      expiration: Date.now() + maxAge * 1000,
    }
    sessionStorage.setItem(key, JSON.stringify(item))
  }
}
