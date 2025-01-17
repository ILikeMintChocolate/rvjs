import { BigQueue } from '@util/queue.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('BigQueue', () => {
  let queue: BigQueue<number>

  beforeEach(() => {
    queue = new BigQueue<number>()
  })

  test('initial', () => {
    expect(queue.first).toEqual(null)
    expect(queue.last).toEqual(null)
    expect(queue.size).toEqual(0)
  })

  test('enqueue one', () => {
    queue.enqueue(1)
    expect(queue.first.data).toEqual(1)
    expect(queue.last.data).toEqual(1)
    expect(queue.size).toEqual(1)
  })

  test('enqueue two', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.first.data).toEqual(1)
    expect(queue.last.data).toEqual(2)
    expect(queue.size).toEqual(2)
  })

  test('dequeue once', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.first.data).toEqual(2)
    expect(queue.last.data).toEqual(3)
    expect(queue.size).toEqual(2)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.first.data).toEqual(3)
    expect(queue.last.data).toEqual(3)
    expect(queue.size).toEqual(1)
    expect(queue.dequeue()).toEqual(3)
    expect(queue.first).toEqual(null)
    expect(queue.last).toEqual(null)
    expect(queue.size).toEqual(0)
  })

  test('dequeue all', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeueAll((data, index) => {
      expect(data).toEqual(index + 1)
    })
    expect(queue.first).toEqual(null)
    expect(queue.last).toEqual(null)
    expect(queue.size).toEqual(0)
  })

  test('clear', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.clear()
    expect(queue.first).toEqual(null)
    expect(queue.last).toEqual(null)
    expect(queue.size).toEqual(0)
  })
})
