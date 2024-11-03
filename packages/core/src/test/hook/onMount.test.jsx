import { Case } from '@component/case.ts'
import { For } from '@component/for.ts'
import { root } from '@component/root.ts'
import { Switch } from '@component/switch.ts'
import { Toggle } from '@component/toggle.ts'
import { onMount } from '@hook/onMount.ts'
import { useState } from '@hook/useState.ts'
import { beforeEach, describe, expect, test } from 'vitest'

describe('onMount', () => {
  const component = (order, key) => {
    return (props) => {
      onMount(() => {
        order.push(props.key || key)
      })
      return (
        <div>
          <span>{key}</span>
          {...props.children}
        </div>
      )
    }
  }
  const components = (order, count) => {
    return Array.from({ length: count }, (_, i) =>
      component(order, String.fromCharCode(65 + i)),
    )
  }
  const Num = (props) => {
    onMount(() => {
      props.order.push(props.key)
    })
    return <div>{...props.children}</div>
  }

  let order

  beforeEach(() => {
    order = []
  })

  test('basic case - 1', () => {
    const [A] = components(order, 1)
    root(document.createElement('div'), <A />)
    expect(order).toEqual(['A'])
  })

  test('basic case - 2', () => {
    const [A, B] = components(order, 2)
    root(
      document.createElement('div'),
      <A>
        <B />
      </A>,
    )
    expect(order).toEqual(['A', 'B'])
  })

  test('basic case - 3', () => {
    const [A, B, C] = components(order, 3)
    const app = document.createElement('div')
    root(
      app,
      <A>
        <B />
        <C />
      </A>,
    )
    expect(order).toEqual(['A', 'B', 'C'])
  })

  test('basic case - 4', () => {
    const [A, B, C, D] = components(order, 4)
    root(
      document.createElement('div'),
      <A>
        <B>
          <C />
        </B>
        <D />
      </A>,
    )
    expect(order).toEqual(['A', 'B', 'C', 'D'])
  })

  test('Switch case - 1', () => {
    const [A, B, C] = components(order, 3)
    const [type, setType] = useState('B')
    root(
      document.createElement('div'),
      <A>
        <Switch>
          <Case is={type() === 'B'}>
            <B />
          </Case>
          <Case is={type() === 'C'}>
            <C />
          </Case>
        </Switch>
      </A>,
    )
    expect(order).toEqual(['A', 'B'])
    setType('C')
    expect(order).toEqual(['A', 'B', 'C'])
  })

  test('Switch case - 2', () => {
    const [A, B, C, D, E, F, G] = components(order, 7)
    const [type1, setType1] = useState('B')
    const [type2, setType2] = useState('E')
    root(
      document.createElement('div'),
      <A>
        <Switch>
          <Case is={type1() === 'B'}>
            <B />
          </Case>
          <Case is={type1() === 'C'}>
            <C />
          </Case>
          <Case is={type1() === 'D'}>
            <D>
              <Switch>
                <Case is={type2() === 'E'}>
                  <E />
                </Case>
                <Case is={type2() === 'F'}>
                  <F />
                </Case>
              </Switch>
            </D>
          </Case>
          <Case is={type1() === 'G'}>
            <G />
          </Case>
        </Switch>
      </A>,
    )
    expect(order).toEqual(['A', 'B'])
    setType1('C')
    expect(order).toEqual(['A', 'B', 'C'])
    setType1('D')
    expect(order).toEqual(['A', 'B', 'C', 'D', 'E'])
    setType2('F')
    expect(order).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
    setType1('G')
    expect(order).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  })

  test('Toggle case - 1', () => {
    const [A, B] = components(order, 2)
    const [isShow, setShow] = useState(false)
    root(
      document.createElement('div'),
      <A>
        <Toggle is={isShow()}>
          <B />
        </Toggle>
      </A>,
    )
    expect(order).toEqual(['A'])
    setShow(true)
    expect(order).toEqual(['A', 'B'])
    setShow(false)
    expect(order).toEqual(['A', 'B'])
    setShow(true)
    expect(order).toEqual(['A', 'B', 'B'])
  })

  test('Toggle case - 2', () => {
    const [A, B, C] = components(order, 3)
    const [isShow1, setShow1] = useState(true)
    const [isShow2, setShow2] = useState(true)
    root(
      document.createElement('div'),
      <A>
        <Toggle is={isShow1()}>
          <B>
            <Toggle is={isShow2()}>
              <C />
            </Toggle>
          </B>
        </Toggle>
      </A>,
    )
    expect(order).toEqual(['A', 'B', 'C'])
    setShow2(false)
    expect(order).toEqual(['A', 'B', 'C'])
    setShow2(true)
    expect(order).toEqual(['A', 'B', 'C', 'C'])
    setShow1(false)
    expect(order).toEqual(['A', 'B', 'C', 'C'])
    setShow1(true)
    expect(order).toEqual(['A', 'B', 'C', 'C', 'B', 'C'])
  })

  test('For case - 1', () => {
    const [A] = components(order, 1)
    const [nums, setNums] = useState([1, 2, 3, 4, 5])
    root(
      document.createElement('div'),
      <A>
        <For each={nums()}>
          {(n) => {
            return <Num key={`F1-${n}`} order={order} />
          }}
        </For>
      </A>,
    )
    expect(order).toEqual(['A', 'F1-1', 'F1-2', 'F1-3', 'F1-4', 'F1-5'])
    order.length = 0
    setNums([2, 3, 4])
    expect(order).toEqual([])
    order.length = 0
    setNums([1, 2, 3, 4, 6])
    expect(order).toEqual(['F1-1', 'F1-6'])
  })

  test('For case - 2', () => {
    const [A] = components(order, 1)
    const [nums1, setNums1] = useState([1, 2])
    const [nums2, setNums2] = useState([1, 2, 3])
    root(
      document.createElement('div'),
      <A>
        <For each={nums1()}>
          {(n1) => {
            return (
              <Num key={`F-${n1}`} order={order}>
                <For each={nums2()}>
                  {(n2) => {
                    return <Num key={`F-${n1}-${n2}`} order={order} />
                  }}
                </For>
              </Num>
            )
          }}
        </For>
      </A>,
    )
    expect(order).toEqual([
      'A',
      'F-1',
      'F-1-1',
      'F-1-2',
      'F-1-3',
      'F-2',
      'F-2-1',
      'F-2-2',
      'F-2-3',
    ])
    setNums2([2])
    expect(order).toEqual([
      'A',
      'F-1',
      'F-1-1',
      'F-1-2',
      'F-1-3',
      'F-2',
      'F-2-1',
      'F-2-2',
      'F-2-3',
    ])
    setNums1([1, 2, 3])
    expect(order).toEqual([
      'A',
      'F-1',
      'F-1-1',
      'F-1-2',
      'F-1-3',
      'F-2',
      'F-2-1',
      'F-2-2',
      'F-2-3',
      'F-3',
      'F-3-2',
    ])
    setNums2([3, 4])
    expect(order).toEqual([
      'A',
      'F-1',
      'F-1-1',
      'F-1-2',
      'F-1-3',
      'F-2',
      'F-2-1',
      'F-2-2',
      'F-2-3',
      'F-3',
      'F-3-2',
      'F-1-3',
      'F-1-4',
      'F-2-3',
      'F-2-4',
      'F-3-3',
      'F-3-4',
    ])
  })

  test('complex case - 1', () => {
    const [A, B, C, D] = components(order, 4)
    const [nums1, setNums1] = useState([1, 2, 3])
    const [nums2, setNums2] = useState([1, 2])
    const [type, setType] = useState('A')
    const [isVisible, setVisible] = useState(true)
    const [showInner, setShowInner] = useState(true)
    root(
      document.createElement('div'),
      <For each={nums1()}>
        {(num1) => (
          <Num key={`N-${num1}`} order={order}>
            <Switch>
              <Case is={type() === 'A'}>
                <A key={`A-${num1}`}>
                  <Toggle is={showInner()}>
                    <B key={`A-B-${num1}`} />
                  </Toggle>
                </A>
              </Case>
              <Case is={type() === 'B'}>
                <B key={`B-${num1}`}>
                  <For each={nums2()}>
                    {(num2) => (
                      <Toggle is={isVisible()}>
                        <C key={`B-C-${num1}-${num2}`} />
                      </Toggle>
                    )}
                  </For>
                </B>
              </Case>
              <Case is={type() === 'C'}>
                <D key={`D-${num1}`} />
              </Case>
            </Switch>
          </Num>
        )}
      </For>,
    )
    expect(order).toEqual([
      'N-1',
      'A-1',
      'A-B-1',
      'N-2',
      'A-2',
      'A-B-2',
      'N-3',
      'A-3',
      'A-B-3',
    ])
    order.length = 0
    setType('B')
    expect(order).toEqual([
      'B-1',
      'B-C-1-1',
      'B-C-1-2',
      'B-2',
      'B-C-2-1',
      'B-C-2-2',
      'B-3',
      'B-C-3-1',
      'B-C-3-2',
    ])
    order.length = 0
    setType('C')
    expect(order).toEqual(['D-1', 'D-2', 'D-3'])
  })
})
