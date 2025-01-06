import { root, useState } from '@/index.ts'
import { useTest } from '@test/utilForTest.jsx'
import { beforeEach, describe, expect, test } from 'vitest'

describe('conditionalExpressions', () => {
  let rootElement
  let primitive
  let getCount, setCount
  let isTrue1, setTrue1
  let isTrue2, setTrue2
  let isTypeA, setTypeA
  let isTypeB, setTypeB
  let isTypeC, setTypeC
  let bestText, goodText, badText
  let getGoodText
  let getTypeA, getTypeB, getTypeC
  let something
  let thing, thing1, thing2, thing3
  const CompWithRender = (props) => {
    return <h4>{props.render}</h4>
  }
  const CompWithValue = (props) => {
    return <h4>{props.value}</h4>
  }
  const CompWithChildren = (props) => {
    return <h4>{props.children}</h4>
  }

  beforeEach(() => {
    ;({ rootElement } = useTest())
    primitive = 'primitive'
    ;[getCount, setCount] = useState(0)
    ;[isTrue1, setTrue1] = useState(false)
    ;[isTrue2, setTrue2] = useState(false)
    ;[isTypeA, setTypeA] = useState(false)
    ;[isTypeB, setTypeB] = useState(false)
    ;[isTypeC, setTypeC] = useState(false)
    bestText = 'bestText'
    goodText = 'goodText'
    badText = 'badText'
    getGoodText = () => 'getGoodText'
    getTypeA = () => 'getTypeA'
    getTypeB = () => 'getTypeB'
    getTypeC = () => 'getTypeC'
    something = () => 'something'
    thing = () => 'thing'
    thing1 = () => 'thing1'
    thing2 = () => 'thing2'
    thing3 = () => 'thing3'
  })

  test('case - 1', () => {
    const App = () => <h4>{primitive}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('primitive')
  })

  test('case - 2', () => {
    const App = () => <h4>{isTrue1()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('')
    setTrue1(true)
    expect(element.textContent).toEqual('')
  })

  test('case - 3', () => {
    const App = () => <h4>{primitive ? goodText : badText}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('goodText')
  })

  test('case - 4', () => {
    const App = () => <h4>{primitive ? getGoodText() : badText}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('getGoodText')
  })

  test('case - 5', () => {
    const App = () => <h4>{isTrue1() ? getGoodText() : badText}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('badText')
    setTrue1(true)
    expect(element.textContent).toEqual('getGoodText')
  })

  test('case - 6', () => {
    const App = () => <h4>{isTrue1() && getGoodText()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('')
    setTrue1(true)
    expect(element.textContent).toEqual('getGoodText')
    setTrue1(false)
    expect(element.textContent).toEqual('')
  })

  test('case - 7', () => {
    const App = () => (
      <h4>
        {getCount() > 0 ? (isTrue1() ? bestText : getGoodText()) : badText}
      </h4>
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('badText')
    setCount(getCount() + 1)
    expect(element.textContent).toEqual('getGoodText')
    setTrue1(true)
    expect(element.textContent).toEqual('bestText')
  })

  test('case - 8', () => {
    const App = () => <h4>{isTrue1() && isTrue2() && getGoodText()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('')
    setTrue1(true)
    expect(element.textContent).toEqual('')
    setTrue2(true)
    expect(element.textContent).toEqual('getGoodText')
    setTrue2(false)
    expect(element.textContent).toEqual('')
  })

  test('case - 9', () => {
    const App = () => <h4>{(isTrue1() && getGoodText()) || badText}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('badText')
    setTrue1(true)
    expect(element.textContent).toEqual('getGoodText')
    setTrue1(false)
    expect(element.textContent).toEqual('badText')
  })

  test('case - 10', () => {
    const App = () => (
      <h4>
        {isTypeA() ? 'a' : isTypeB() ? 'b' : isTypeC() ? 'c' : 'fallback'}
      </h4>
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('fallback')
    setTypeC(true)
    expect(element.textContent).toEqual('c')
    setTypeB(true)
    expect(element.textContent).toEqual('b')
    setTypeA(true)
    expect(element.textContent).toEqual('a')
    setTypeC(false)
    setTypeB(false)
    setTypeA(false)
    expect(element.textContent).toEqual('fallback')
  })

  test('case - 11', () => {
    const App = () => (
      <h4>
        {isTypeA()
          ? getTypeA()
          : isTypeB()
            ? getTypeB()
            : isTypeC()
              ? getTypeC()
              : 'fallback'}
      </h4>
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('fallback')
    setTypeC(true)
    expect(element.textContent).toEqual('getTypeC')
    setTypeB(true)
    expect(element.textContent).toEqual('getTypeB')
    setTypeA(true)
    expect(element.textContent).toEqual('getTypeA')
    setTypeC(false)
    setTypeB(false)
    setTypeA(false)
    expect(element.textContent).toEqual('fallback')
  })

  test('case - 12', () => {
    const App = () => (
      <CompWithRender render={isTrue1() ? getGoodText() : badText} />
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('badText')
    setTrue1(true)
    expect(element.textContent).toEqual('getGoodText')
    setTrue1(false)
    expect(element.textContent).toEqual('badText')
  })

  test('case - 13', () => {
    const App = () => <CompWithRender render={isTrue1() ? goodText : badText} />
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('badText')
    setTrue1(true)
    expect(element.textContent).toEqual('goodText')
    setTrue1(false)
    expect(element.textContent).toEqual('badText')
  })

  test('case - 14', () => {
    const App = () => <CompWithRender render={isTrue1() && getGoodText()} />
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('')
    setTrue1(true)
    expect(element.textContent).toEqual('getGoodText')
    setTrue1(false)
    expect(element.textContent).toEqual('')
  })

  test('case - 15', () => {
    const App = () => <CompWithRender render={isTrue1() && goodText} />
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('')
    setTrue1(true)
    expect(element.textContent).toEqual('goodText')
    setTrue1(false)
    expect(element.textContent).toEqual('')
  })

  test('case - 16', () => {
    const App = () => <CompWithRender render={isTrue1() || getGoodText()} />
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('getGoodText')
    setTrue1(true)
    expect(element.textContent).toEqual('')
    setTrue1(false)
    expect(element.textContent).toEqual('getGoodText')
  })

  test('case - 17', () => {
    const App = () => (
      <CompWithValue value={isTrue1() ? getTypeA() : getTypeB()} />
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('getTypeB')
    setTrue1(true)
    expect(element.textContent).toEqual('getTypeA')
    setTrue1(false)
    expect(element.textContent).toEqual('getTypeB')
  })

  test('case - 18', () => {
    const App = () => (
      <CompWithChildren>{isTrue1() ? getTypeA() : getTypeB()}</CompWithChildren>
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('getTypeB')
    setTrue1(true)
    expect(element.textContent).toEqual('getTypeA')
    setTrue1(false)
    expect(element.textContent).toEqual('getTypeB')
  })

  test('case - 19', () => {
    const App = () => <h4 innerHTML={isTrue1() ? getTypeA() : getTypeB()} />
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('getTypeB')
    setTrue1(true)
    expect(element.textContent).toEqual('getTypeA')
    setTrue1(false)
    expect(element.textContent).toEqual('getTypeB')
  })

  test('case - 20', () => {
    const App = () => <h4>{isTrue1() ? getTypeA() : getTypeB()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('getTypeB')
    setTrue1(true)
    expect(element.textContent).toEqual('getTypeA')
    setTrue1(false)
    expect(element.textContent).toEqual('getTypeB')
  })

  test('case - 21', () => {
    const App = () => <h4>{(thing() && thing1()) ?? thing2() ?? thing3()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('thing1')
  })

  test('case - 22', () => {
    const App = () => <h4>{thing() || thing1() || thing2()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('thing')
  })

  test('case - 23', () => {
    const App = () => (
      <CompWithRender
        render={getCount() ? (getCount() ? getCount() : count()) : getCount()}
      />
    )
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('0')
    setCount(getCount() + 1)
    expect(element.textContent).toEqual('1')
    setCount(getCount() + 1)
    expect(element.textContent).toEqual('2')
  })

  test('case - 24', () => {
    const App = () => <h4>{something?.()}</h4>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('something')
  })

  test('case - 25', () => {
    const App = () => <CompWithChildren>{something?.()}</CompWithChildren>
    root(rootElement, <App />)
    const element = rootElement.querySelector('h4')
    expect(element.textContent).toEqual('something')
  })
})
