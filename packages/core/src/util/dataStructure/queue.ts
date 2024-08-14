export class Queue<Value> {
  private data: Record<number, Value>
  private front: number
  private end: number

  constructor() {
    this.data = {}
    this.front = 0
    this.end = 0
  }

  get size() {
    return this.end - this.front
  }

  get items() {
    return Object.values(this.data)
  }

  get first() {
    return this.data[this.front]
  }

  push(value: Value) {
    this.data[this.end] = value
    this.end++
  }

  pop() {
    if (this.size === 0) {
      return null
    }
    const result = this.data[this.front]
    delete this.data[this.front]
    this.front++

    return result
  }

  popAll(callback: (value: Value) => void) {
    while (this.size > 0) {
      callback(this.pop()!)
    }
  }
}
