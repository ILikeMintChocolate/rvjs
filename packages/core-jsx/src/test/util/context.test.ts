import { Context } from '@util/context.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('Context', () => {
  let context: Context<number>

  beforeEach(() => {
    context = new Context<number>()
  })

  test('initial', () => {
    expect(context.has()).toBe(false)
    expect(context.get()).toBe(null)
  })

  test('set one', () => {
    context.set(1)
    expect(context.has()).toBe(true)
    expect(context.get()).toBe(1)
  })

  test('clear', () => {
    context.set(1)
    expect(context.has()).toBe(true)
    expect(context.get()).toBe(1)
    context.clear()
    expect(context.has()).toBe(false)
    expect(context.get()).toBe(null)
  })
})
