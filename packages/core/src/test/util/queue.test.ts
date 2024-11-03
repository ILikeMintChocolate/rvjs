import { Queue } from '@util/queue.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('Queue', () => {
  let queue: Queue<number>

  beforeEach(() => {
    queue = new Queue<number>()
  })

  test('initial', () => {
    expect(queue.first).toBe(null)
    expect(queue.last).toBe(null)
    expect(queue.size).toBe(0)
  })

  test('enqueue one', () => {
    queue.enqueue(1)
    expect(queue.first.data).toBe(1)
    expect(queue.last.data).toBe(1)
    expect(queue.size).toBe(1)
  })

  test('enqueue two', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.first.data).toBe(1)
    expect(queue.last.data).toBe(2)
    expect(queue.size).toBe(2)
  })

  test('dequeue once', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1)
    expect(queue.first.data).toBe(2)
    expect(queue.last.data).toBe(3)
    expect(queue.size).toBe(2)
    expect(queue.dequeue()).toBe(2)
    expect(queue.first.data).toBe(3)
    expect(queue.last.data).toBe(3)
    expect(queue.size).toBe(1)
    expect(queue.dequeue()).toBe(3)
    expect(queue.first).toBe(null)
    expect(queue.last).toBe(null)
    expect(queue.size).toBe(0)
  })

  test('dequeue all', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeueAll((data, index) => {
      expect(data).toBe(index + 1)
    })
    expect(queue.first).toBe(null)
    expect(queue.last).toBe(null)
    expect(queue.size).toBe(0)
  })

  test('clear', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.clear()
    expect(queue.first).toBe(null)
    expect(queue.last).toBe(null)
    expect(queue.size).toBe(0)
  })
})
