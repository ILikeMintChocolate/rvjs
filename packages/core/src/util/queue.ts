export class Queue<Data> {
  first: Node<Data>
  last: Node<Data>
  size: number

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(data: Data) {
    const node = new Node(data)
    if (!this.first && !this.last) {
      this.first = node
      this.last = node
    } else {
      this.last.setNext(node)
      this.last = node
    }
    this.size++
  }

  dequeue() {
    const node = this.first
    this.first = node.next
    this.size--
    if (this.size === 0) {
      this.last = null
    }
    return node.data
  }

  dequeueAll(callback: (data: Data, index: number) => void) {
    let index = 0
    while (this.size > 0) {
      const data = this.dequeue()
      callback(data, index++)
    }
  }

  clear() {
    this.first = null
    this.last = null
    this.size = 0
  }
}

class Node<Data> {
  data: Data
  next: Node<Data>

  constructor(data: Data) {
    this.data = data
    this.next = null
  }

  setNext(node) {
    this.next = node
  }
}
