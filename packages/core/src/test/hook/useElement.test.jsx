import { onMount, root, useElement } from '@/index.ts'
import { useTest } from '@test/utilForTest.jsx'
import { beforeEach, describe, expect, test } from 'vitest'

describe('useElement', () => {
  let rootElement
  let tagName

  beforeEach(() => {
    ;({ rootElement } = useTest())
  })

  test('case - 1', () => {
    const App = () => {
      const element = useElement()
      onMount(() => {
        tagName = element.current.tagName
      })
      return <h4 element={element}>123</h4>
    }
    root(rootElement, <App />)
    expect(tagName).toEqual('H4')
  })

  test('case - 2', () => {
    const App = () => {
      const element = useElement()
      onMount(() => {
        tagName = element.current.tagName
      })
      return (
        <div>
          <h4 element={element}>123</h4>
        </div>
      )
    }
    root(rootElement, <App />)
    expect(tagName).toEqual('H4')
  })

  test('case - 3', () => {
    const App = () => {
      const element = useElement()
      return (
        <div>
          <Child element={element} />
        </div>
      )
    }
    const Child = (props) => {
      onMount(() => {
        tagName = props.element.current.tagName
      })
      return <h4 element={props.element}>123</h4>
    }
    root(rootElement, <App />)
    expect(tagName).toEqual('H4')
  })
})
