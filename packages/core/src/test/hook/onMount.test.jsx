import { Case } from '@component/case.ts'
import { For } from '@component/for.ts'
import { root } from '@component/root.ts'
import { Switch } from '@component/switch.ts'
import { Toggle } from '@component/toggle.ts'
import { onMount } from '@hook/onMount.ts'
import { useState } from '@hook/useState.ts'
import {
  createComponents,
  mockWindowLocationHash,
  useTest,
} from '@test/utilForTest.jsx'
import { beforeEach, describe, expect, test } from 'vitest'

describe('onMount', () => {
  const Num = (props) => {
    onMount(() => {
      props.onMountOrder.push(props.id)
    })
    return <div>{...props.children}</div>
  }

  let rootElement, onMountOrder, clearOnMountOrder

  beforeEach(() => {
    ;({ rootElement, onMountOrder, clearOnMountOrder } = useTest())
    mockWindowLocationHash()
  })

  test('basic case - 1', () => {
    const [A] = createComponents(1, {
      onMountOrder,
    })
    root(document.createElement('div'), <A />)
    expect(onMountOrder).toEqual(['A'])
  })

  test('basic case - 2', () => {
    const [A, B] = createComponents(2, {
      onMountOrder,
    })
    root(
      document.createElement('div'),
      <A>
        <B />
      </A>,
    )
    expect(onMountOrder).toEqual(['A', 'B'])
  })

  test('basic case - 3', () => {
    const [A, B, C] = createComponents(3, {
      onMountOrder,
    })
    const app = document.createElement('div')
    root(
      app,
      <A>
        <B />
        <C />
      </A>,
    )
    expect(onMountOrder).toEqual(['A', 'B', 'C'])
  })

  test('basic case - 4', () => {
    const [A, B, C, D] = createComponents(4, {
      onMountOrder,
    })
    root(
      document.createElement('div'),
      <A>
        <B>
          <C />
        </B>
        <D />
      </A>,
    )
    expect(onMountOrder).toEqual(['A', 'B', 'C', 'D'])
  })

  test('Switch case - 1', () => {
    const [A, B, C] = createComponents(3, {
      onMountOrder,
    })
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
    expect(onMountOrder).toEqual(['A', 'B'])
    clearOnMountOrder()
    setType('C')
    expect(onMountOrder).toEqual(['C'])
  })

  test('Switch case - 2', () => {
    const [A, B, C, D, E, F, G] = createComponents(7, {
      onMountOrder,
    })
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
    expect(onMountOrder).toEqual(['A', 'B'])
    clearOnMountOrder()
    setType1('C')
    expect(onMountOrder).toEqual(['C'])
    clearOnMountOrder()
    setType1('D')
    expect(onMountOrder).toEqual(['D', 'E'])
    clearOnMountOrder()
    setType2('F')
    expect(onMountOrder).toEqual(['F'])
    clearOnMountOrder()
    setType1('G')
    expect(onMountOrder).toEqual(['G'])
  })

  test('Toggle case - 1', () => {
    const [A, B] = createComponents(2, {
      onMountOrder,
    })
    const [isShow, setShow] = useState(false)
    root(
      document.createElement('div'),
      <A>
        <Toggle is={isShow()}>
          <B />
        </Toggle>
      </A>,
    )
    expect(onMountOrder).toEqual(['A'])
    clearOnMountOrder()
    setShow(true)
    expect(onMountOrder).toEqual(['B'])
    clearOnMountOrder()
    setShow(false)
    expect(onMountOrder).toEqual([])
    clearOnMountOrder()
    setShow(true)
    expect(onMountOrder).toEqual(['B'])
  })

  test('Toggle case - 2', () => {
    const [A, B, C] = createComponents(3, {
      onMountOrder,
    })
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
    expect(onMountOrder).toEqual(['A', 'B', 'C'])
    setShow2(false)
    expect(onMountOrder).toEqual(['A', 'B', 'C'])
    setShow2(true)
    expect(onMountOrder).toEqual(['A', 'B', 'C', 'C'])
    setShow1(false)
    expect(onMountOrder).toEqual(['A', 'B', 'C', 'C'])
    setShow1(true)
    expect(onMountOrder).toEqual(['A', 'B', 'C', 'C', 'B', 'C'])
  })

  test('For case - 1', () => {
    const [A] = createComponents(1, {
      onMountOrder,
    })
    const [nums, setNums] = useState([1, 2, 3, 4, 5])
    root(
      document.createElement('div'),
      <A>
        <For each={nums()}>
          {(n) => {
            return <Num id={`F1-${n}`} onMountOrder={onMountOrder} />
          }}
        </For>
      </A>,
    )
    expect(onMountOrder).toEqual(['A', 'F1-1', 'F1-2', 'F1-3', 'F1-4', 'F1-5'])
    clearOnMountOrder()
    setNums([2, 3, 4])
    expect(onMountOrder).toEqual([])
    clearOnMountOrder()
    setNums([1, 2, 3, 4, 6])
    expect(onMountOrder).toEqual(['F1-1', 'F1-6'])
  })

  test('For case - 2', () => {
    const [A] = createComponents(1, {
      onMountOrder,
    })
    const [nums1, setNums1] = useState([1, 2])
    const [nums2, setNums2] = useState([1, 2, 3])
    root(
      document.createElement('div'),
      <A>
        <For each={nums1()}>
          {(n1) => {
            return (
              <Num id={`F-${n1}`} onMountOrder={onMountOrder}>
                <For each={nums2()}>
                  {(n2) => {
                    return (
                      <Num id={`F-${n1}-${n2}`} onMountOrder={onMountOrder} />
                    )
                  }}
                </For>
              </Num>
            )
          }}
        </For>
      </A>,
    )
    expect(onMountOrder).toEqual([
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
    clearOnMountOrder()
    setNums2([2])
    expect(onMountOrder).toEqual([])
    clearOnMountOrder()
    setNums1([1, 2, 3])
    expect(onMountOrder).toEqual(['F-3', 'F-3-2'])
    clearOnMountOrder()
    setNums2([3, 4])
    expect(onMountOrder).toEqual([
      'F-1-3',
      'F-1-4',
      'F-2-3',
      'F-2-4',
      'F-3-3',
      'F-3-4',
    ])
  })

  test('complex case - 1', () => {
    const [A, B, C, D] = createComponents(4, {
      onMountOrder,
    })
    const [nums1, setNums1] = useState([1, 2, 3])
    const [nums2, setNums2] = useState([1, 2])
    const [type, setType] = useState('A')
    const [isVisible, setVisible] = useState(true)
    const [showInner, setShowInner] = useState(true)
    root(
      document.createElement('div'),
      <For each={nums1()}>
        {(num1) => (
          <Num id={`N-${num1}`} onMountOrder={onMountOrder}>
            <Switch>
              <Case is={type() === 'A'}>
                <A id={`A-${num1}`}>
                  <Toggle is={showInner()}>
                    <B id={`A-B-${num1}`} />
                  </Toggle>
                </A>
              </Case>
              <Case is={type() === 'B'}>
                <B id={`B-${num1}`}>
                  <For each={nums2()}>
                    {(num2) => (
                      <Toggle is={isVisible()}>
                        <C id={`B-C-${num1}-${num2}`} />
                      </Toggle>
                    )}
                  </For>
                </B>
              </Case>
              <Case is={type() === 'C'}>
                <D id={`D-${num1}`} />
              </Case>
            </Switch>
          </Num>
        )}
      </For>,
    )
    expect(onMountOrder).toEqual([
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
    clearOnMountOrder()
    setType('B')
    expect(onMountOrder).toEqual([
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
    clearOnMountOrder()
    setType('C')
    expect(onMountOrder).toEqual(['D-1', 'D-2', 'D-3'])
  })
})
