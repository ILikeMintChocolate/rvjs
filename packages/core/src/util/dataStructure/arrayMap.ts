import { Queue } from '@util/dataStructure/queue.ts'

export class ArrayMap<Key, Item> {
  #itemsMap: Map<Key, Queue<Item>>

  constructor() {
    this.#itemsMap = new Map()
  }

  has(key: Key) {
    return this.#itemsMap.has(key)
  }

  getFirst(key: Key) {
    if (!this.has(key)) {
      return 0
    }
    const queue = this.#itemsMap.get(key)!
    return queue.first
  }

  getSize(key: Key) {
    if (!this.has(key)) {
      return 0
    }
    const queue = this.#itemsMap.get(key)!
    return queue.size
  }

  push(key: Key, item: Item) {
    if (this.has(key)) {
      const queue = this.#itemsMap.get(key)!
      queue.push(item)
    } else {
      const queue = new Queue<Item>()
      queue.push(item)
      this.#itemsMap.set(key, queue)
    }
  }

  pop(key: Key) {
    if (this.has(key)) {
      const queue = this.#itemsMap.get(key)!
      const item = queue.pop()
      if (queue.size === 0) {
        this.#itemsMap.delete(key)
      }
      return item
    }
  }
}
