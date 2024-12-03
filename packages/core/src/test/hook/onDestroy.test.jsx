import { Case } from '@component/case.ts'
import { For } from '@component/for.ts'
import { root } from '@component/root.ts'
import { Switch } from '@component/switch.ts'
import { Toggle } from '@component/toggle.ts'
import { onDestroy } from '@hook/onDestroy.ts'
import { useState } from '@hook/useState.ts'
import {
  createComponents,
  mockWindowLocationHash,
  useTest,
} from '@test/utilForTest.jsx'
import { beforeEach, describe, expect, test } from 'vitest'

describe('onDestroy', () => {
  const Num = (props) => {
    onDestroy(() => {
      props.onDestroyOrder.push(props.id)
    })
    return <div>{...props.children}</div>
  }

  let rootElement, onDestroyOrder, clearOnDestroyOrder

  beforeEach(() => {
    ;({ rootElement, onDestroyOrder, clearOnDestroyOrder } = useTest())
    mockWindowLocationHash()
  })

  test('Switch case - 1', () => {
    const [A, B, C] = createComponents(3, {
      onDestroyOrder,
    })
    const [type, setType] = useState('B')
    root(
      rootElement,
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
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setType('C')
    expect(onDestroyOrder).toEqual(['B'])
    clearOnDestroyOrder()
    setType('B')
    expect(onDestroyOrder).toEqual(['C'])
  })

  test('Switch case - 2', () => {
    const [A, B, C, D, E, F, G] = createComponents(7, {
      onDestroyOrder,
    })
    const [type1, setType1] = useState('B')
    const [type2, setType2] = useState('E')
    root(
      rootElement,
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
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setType1('C')
    expect(onDestroyOrder).toEqual(['B'])
    clearOnDestroyOrder()
    setType1('D')
    expect(onDestroyOrder).toEqual(['C'])
    clearOnDestroyOrder()
    setType2('F')
    expect(onDestroyOrder).toEqual(['E'])
    clearOnDestroyOrder()
    setType1('G')
    expect(onDestroyOrder).toEqual(['D', 'F'])
  })

  test('Toggle case - 1', () => {
    const [A, B] = createComponents(2, {
      onDestroyOrder,
    })
    const [isShow, setShow] = useState(false)
    root(
      rootElement,
      <A>
        <Toggle is={isShow()}>
          <B />
        </Toggle>
      </A>,
    )
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setShow(true)
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setShow(false)
    expect(onDestroyOrder).toEqual(['B'])
  })

  test('Toggle case - 2', () => {
    const [A, B, C] = createComponents(3, {
      onDestroyOrder,
    })
    const [isShow1, setShow1] = useState(true)
    const [isShow2, setShow2] = useState(true)
    root(
      rootElement,
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
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setShow2(false)
    expect(onDestroyOrder).toEqual(['C'])
    clearOnDestroyOrder()
    setShow2(true)
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setShow1(false)
    expect(onDestroyOrder).toEqual(['B', 'C'])
    clearOnDestroyOrder()
    setShow1(true)
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
  })

  test('For case - 1', () => {
    const [A] = createComponents(1, {
      onDestroyOrder,
    })
    const [nums, setNums] = useState([1, 2, 3, 4, 5])
    root(
      rootElement,
      <A>
        <For each={nums()}>
          {(n) => {
            return <Num id={`F1-${n}`} onDestroyOrder={onDestroyOrder} />
          }}
        </For>
      </A>,
    )
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setNums([2, 3, 4])
    expect(onDestroyOrder).toEqual(['F1-1', 'F1-5'])
    clearOnDestroyOrder()
    setNums([1, 2, 3, 6])
    expect(onDestroyOrder).toEqual(['F1-4'])
  })

  test('For case - 2', () => {
    const [A] = createComponents(1, {
      onDestroyOrder,
    })
    const [nums1, setNums1] = useState([1, 2])
    const [nums2, setNums2] = useState([1, 2, 3])
    root(
      rootElement,
      <A>
        <For each={nums1()}>
          {(n1) => {
            return (
              <Num id={`F-${n1}`} onDestroyOrder={onDestroyOrder}>
                <For each={nums2()}>
                  {(n2) => {
                    return (
                      <Num
                        id={`F-${n1}-${n2}`}
                        onDestroyOrder={onDestroyOrder}
                      />
                    )
                  }}
                </For>
              </Num>
            )
          }}
        </For>
      </A>,
    )
    expect(onDestroyOrder).toEqual([])
    clearOnDestroyOrder()
    setNums2([2])
    expect(onDestroyOrder).toEqual(['F-1-1', 'F-1-3', 'F-2-1', 'F-2-3'])
    clearOnDestroyOrder()
    setNums1([1, 3])
    expect(onDestroyOrder).toEqual(['F-2', 'F-2-2'])
    clearOnDestroyOrder()
    setNums2([3, 4])
    expect(onDestroyOrder).toEqual(['F-1-2', 'F-3-2'])
  })

  test('complex case - 1', () => {
    const [A, B, C, D] = createComponents(4, {
      onDestroyOrder,
    })
    const [nums1, setNums1] = useState([1, 2, 3])
    const [nums2, setNums2] = useState([1, 2])
    const [type, setType] = useState('A')
    const [isVisible, setVisible] = useState(true)
    const [showInner, setShowInner] = useState(true)
    root(
      rootElement,
      <For each={nums1()}>
        {(num1) => (
          <Num id={`N-${num1}`} onDestroyOrder={onDestroyOrder}>
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
    expect(onDestroyOrder).toEqual([])
    setShowInner(false)
    expect(onDestroyOrder).toEqual(['A-B-1', 'A-B-2', 'A-B-3'])
    clearOnDestroyOrder()
    setType('B')
    expect(onDestroyOrder).toEqual(['A-1', 'A-2', 'A-3'])
    clearOnDestroyOrder()
    setVisible(false)
    expect(onDestroyOrder).toEqual([
      'B-C-1-1',
      'B-C-1-2',
      'B-C-2-1',
      'B-C-2-2',
      'B-C-3-1',
      'B-C-3-2',
    ])
    clearOnDestroyOrder()
    setNums1([2, 3])
    expect(onDestroyOrder).toEqual(['N-1', 'B-1'])
    clearOnDestroyOrder()
    setType('C')
    expect(onDestroyOrder).toEqual(['B-2', 'B-3'])
  })
})
