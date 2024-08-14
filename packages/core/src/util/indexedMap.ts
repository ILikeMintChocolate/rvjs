interface ValueObject<Value> {
  index: number
  value: Value
}

export class IndexedMap<Key, Value> {
  map: Map<Key, ValueObject<Value>>
  index: Map<number, Key>
  tempObjects: Map<Key, ValueObject<Value>>

  constructor() {
    this.map = new Map()
    this.index = new Map()
    this.tempObjects = new Map()
  }

  get size() {
    return this.map.size
  }

  get keys() {
    return this.map.keys()
  }

  has(key: Key) {
    return this.map.has(key)
  }

  hasByIndex(index: number) {
    return this.index.has(index)
  }

  hasTemp(key: Key) {
    return this.tempObjects.has(key)
  }

  set(key: Key, value: Value, index: number) {
    this.map.set(key, { index, value })
    this.index.set(index, key)
  }

  getItemByKey(key: Key) {
    return this.map.get(key)
  }

  getItemByIndex(index: number) {
    return this.index.get(index)
  }

  deleteByKey(key: Key) {
    if (!this.map.has(key)) {
      return
    }
    const { index } = this.map.get(key)!
    this.map.delete(key)
    this.index.delete(index)
  }

  deleteByIndex(index: number) {
    if (!this.index.has(index)) {
      return
    }
    const key = this.index.get(index)!
    this.map.delete(key)
    this.index.delete(index)
  }

  changeIndex(key: Key, index: number) {
    if (this.hasByIndex(index)) {
      const preKey = this.getItemByIndex(index)!
      const preValue = this.getItemByKey(preKey)!
      this.tempObjects.set(preKey, preValue)
      this.deleteByIndex(index)
    }
    if (this.map.has(key)) {
      const preIndex = this.getItemByKey(key)!.index
      const value = this.getItemByKey(key)!
      value.index = index
      this.index.set(index, key)
      this.index.delete(preIndex)
    } else if (this.tempObjects.has(key)) {
      const value = this.tempObjects.get(key)!
      value.index = index
      this.map.set(key, value)
      this.index.set(index, key)
      this.tempObjects.delete(key)
    }
  }

  getSortedValues() {
    const array = []
    for (let i = 0; i < this.index.size; i++) {
      array.push(this.map.get(this.index.get(i)!)!.value)
    }
    return array
  }
}
