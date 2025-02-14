import { createContext, root, Toggle, useEffect, useState } from '@/index.ts'
import { useTest } from '@test/utilForTest.jsx'
import { beforeEach, describe, expect, test } from 'vitest'

describe('createContext', () => {
  let rootElement
  let log1, log2, log3
  let isShow1, setShow1
  let isShow2, setShow2

  beforeEach(() => {
    ;({ rootElement } = useTest())
    log1 = []
    log2 = []
    log3 = []
  })

  test('case - 1', () => {
    const countContext = createContext()
    const App = () => {
      const [count, setCount] = useState(0)
      useEffect(() => {
        log1.push('C1-' + count())
      }, [count])
      countContext.setContext({ count, setCount })
      return (
        <div>
          <h4 id="h4-1">C1-{count()}</h4>
          <button onClick={() => setCount(count() + 1)}>+1</button>
          <Child1 />
          <Child2 />
        </div>
      )
    }
    const Child1 = () => {
      const { count } = countContext.getContext()
      useEffect(() => {
        log2.push('C2-' + count())
      }, [count])
      return <h4 id="h4-2">C2-{count()}</h4>
    }
    const Child2 = () => {
      const { count } = countContext.getContext()
      useEffect(() => {
        log3.push('C3-' + count())
      }, [count])
      return <h4 id="h4-3">C3-{count()}</h4>
    }
    root(rootElement, <App />)
    const button = rootElement.querySelector('button')
    const h41 = rootElement.querySelector('#h4-1')
    const h42 = rootElement.querySelector('#h4-2')
    const h43 = rootElement.querySelector('#h4-3')
    button.click()
    expect(log1).toEqual(['C1-1'])
    expect(log2).toEqual(['C2-1'])
    expect(log3).toEqual(['C3-1'])
    expect(h41.textContent).toEqual('C1-1')
    expect(h42.textContent).toEqual('C2-1')
    expect(h43.textContent).toEqual('C3-1')
    button.click()
    expect(log1).toEqual(['C1-1', 'C1-2'])
    expect(log2).toEqual(['C2-1', 'C2-2'])
    expect(log3).toEqual(['C3-1', 'C3-2'])
    expect(h41.textContent).toEqual('C1-2')
    expect(h42.textContent).toEqual('C2-2')
    expect(h43.textContent).toEqual('C3-2')
  })

  test('case - 2', () => {
    const countContext = createContext()
    const App = () => {
      ;[isShow1, setShow1] = useState(true)
      ;[isShow2, setShow2] = useState(false)
      const [count, setCount] = useState(0)
      useEffect(() => {
        log1.push('C1-' + count())
      }, [count])
      countContext.setContext({ count, setCount })
      return (
        <div>
          <h4 id="h4-1">C1-{count()}</h4>
          <button onClick={() => setCount(count() + 1)}>+1</button>
          <Toggle is={isShow1()}>
            <Child1 />
          </Toggle>
          <Toggle is={isShow2()}>
            <Child2 />
          </Toggle>
        </div>
      )
    }
    const Child1 = () => {
      const { count } = countContext.getContext()
      useEffect(() => {
        log2.push('C2-' + count())
      }, [count])
      return <h4 id="h4-2">C2-{count()}</h4>
    }
    const Child2 = () => {
      const { count } = countContext.getContext()
      useEffect(() => {
        log3.push('C3-' + count())
      }, [count])
      return <h4 id="h4-3">C3-{count()}</h4>
    }
    root(rootElement, <App />)
    const button = rootElement.querySelector('button')
    const h41 = rootElement.querySelector('#h4-1')
    const h42 = rootElement.querySelector('#h4-2')
    button.click()
    expect(log1).toEqual(['C1-1'])
    expect(log2).toEqual(['C2-1'])
    expect(h41.textContent).toEqual('C1-1')
    expect(h42.textContent).toEqual('C2-1')
    setShow1(false)
    button.click()
    expect(log1).toEqual(['C1-1', 'C1-2'])
    expect(h41.textContent).toEqual('C1-2')
    setShow2(true)
    const h43 = rootElement.querySelector('#h4-3')
    button.click()
    expect(log1).toEqual(['C1-1', 'C1-2', 'C1-3'])
    expect(log3).toEqual(['C3-3'])
    expect(h41.textContent).toEqual('C1-3')
    expect(h43.textContent).toEqual('C3-3')
  })
})
