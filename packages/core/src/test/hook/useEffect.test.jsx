import { root } from '@component/root.ts'
import { useEffect } from '@hook/useEffect.ts'
import { useState } from '@hook/useState.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('useEffect', () => {
  let rootElement
  let log1, log2

  beforeEach(() => {
    rootElement = document.createElement('main')
    log1 = []
    log2 = []
  })

  test('case - 1', () => {
    const App = () => {
      const [count, setCount] = useState(0)
      useEffect(() => {
        log1.push('C-' + count())
      }, [count])
      return (
        <div>
          <button onclick={() => setCount(count() + 1)}></button>
          <h4>C-{count()}</h4>
        </div>
      )
    }
    root(rootElement, <App />)
    const button = rootElement.querySelector('button')
    const h4 = rootElement.querySelector('h4')
    button.click()
    expect(log1).toEqual(['C-1'])
    expect(h4.textContent).toEqual('C-1')
    button.click()
    expect(log1).toEqual(['C-1', 'C-2'])
    expect(h4.textContent).toEqual('C-2')
  })

  test('case - 2', () => {
    const App = () => {
      const [count, setCount] = useState(0)
      useEffect(() => {
        log1.push('C1-' + count())
      }, [count])
      return (
        <div>
          <button onclick={() => setCount(count() + 1)}></button>
          <Child count={count} />
        </div>
      )
    }
    const Child = (props) => {
      useEffect(() => {
        log2.push('C2-' + props.count())
      }, [props.count])
      return <h4>C-{props.count()}</h4>
    }
    root(rootElement, <App />)
    const button = rootElement.querySelector('button')
    const h4 = rootElement.querySelector('h4')
    button.click()
    expect(log1).toEqual(['C1-1'])
    expect(log2).toEqual(['C2-1'])
    expect(h4.textContent).toEqual('C-1')
    button.click()
    expect(log1).toEqual(['C1-1', 'C1-2'])
    expect(log2).toEqual(['C2-1', 'C2-2'])
    expect(h4.textContent).toEqual('C-2')
  })
})
