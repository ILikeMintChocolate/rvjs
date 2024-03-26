export class Stack<Item> {
  #items: Item[]

  constructor() {
    this.#items = []
  }

  has(item: Item) {
    return this.#items.includes(item)
  }

  get items() {
    return this.#items
  }

  get size() {
    return this.#items.length
  }

  push(item: Item) {
    this.#items.push(item)
  }

  pushAfter(refItem: Item, newItem: Item) {
    const index = this.#items.indexOf(refItem)
    if (index !== -1) {
      this.#items.splice(index + 1, 0, newItem)
    }
  }

  unshift(item: Item) {
    this.#items.unshift(item)
  }

  getItem(index: number) {
    return this.#items[index]
  }

  at(index: number) {
    return this.#items.at(index)
  }

  popAllFromItem(item: Item) {
    const index = this.items.indexOf(item)
    if (index !== -1) {
      return this.#items.splice(index)
    }
  }

  popAllFromIndex(index: number) {
    return this.#items.splice(index)
  }
}
