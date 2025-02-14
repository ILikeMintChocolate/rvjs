import { SmallQueue } from '@util/queue.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('SmallQueue', () => {
  let queue: SmallQueue<number>

  beforeEach(() => {
    queue = new SmallQueue<number>()
  })

  test('initial', () => {
    expect(queue.items[queue.index]).toEqual(undefined)
  })

  test('enqueue one', () => {
    queue.enqueue(1)
    expect(queue.items[0]).toEqual(1)
  })

  test('enqueue two', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.items[0]).toEqual(1)
    expect(queue.items[1]).toEqual(2)
  })

  test('dequeue once', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.items[queue.index]).toEqual(2)
    expect(queue.index).toEqual(1)
    expect(queue.dequeue()).toEqual(2)
    expect(queue.items[queue.index]).toEqual(3)
    expect(queue.index).toEqual(2)
    expect(queue.dequeue()).toEqual(3)
    expect(queue.items[queue.index]).toEqual(undefined)
    expect(queue.index).toEqual(3)
  })

  test('clear', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.clear()
    expect(queue.items.length).toEqual(0)
    expect(queue.index).toEqual(0)
  })
})
