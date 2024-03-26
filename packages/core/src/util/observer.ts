export class Observer<Subscriber = unknown, Value = unknown> {
  #subscribers: Map<Subscriber, Value>

  constructor() {
    this.#subscribers = new Map()
  }

  hasValueBySubscriber(subscriber: Subscriber) {
    return this.#subscribers.has(subscriber)
  }

  getValueBySubscriber(subscriber: Subscriber) {
    return this.#subscribers.get(subscriber)
  }

  subscribe(subscriber: Subscriber, value: Value) {
    this.#subscribers.set(subscriber, value)
  }

  unsubscribe(subscriber: Subscriber) {
    this.#subscribers.delete(subscriber)
  }

  notify(callback: (subscriber: Subscriber, value: Value) => void) {
    this.#subscribers.forEach((value, subscriber) => {
      callback(subscriber, value)
    })
  }
}
