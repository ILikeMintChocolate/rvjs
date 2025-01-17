import { onMount, root, Route, Router, Toggle } from '@/index.ts'
import {
  createComponents,
  findAllSpanTexts,
  mockWindowLocationHash,
  useNavigateMock,
  useTest,
} from '@test/utilForTest.jsx'

import { afterEach, beforeEach, describe, expect, test } from 'vitest'

describe('Test Router', () => {
  let showRoot,
    setShowRoot,
    rootElement,
    onMountOrder,
    onDestroyOrder,
    clearOnMountOrder,
    clearOnDestroyOrder

  beforeEach(() => {
    ;({
      showRoot,
      setShowRoot,
      rootElement,
      onMountOrder,
      onDestroyOrder,
      clearOnMountOrder,
      clearOnDestroyOrder,
    } = useTest())
    mockWindowLocationHash()
  })

  afterEach(() => {
    setShowRoot(false)
  })

  test('/a => /a/b', () => {
    const [A, B] = createComponents(2, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />} />
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a/b')
    expect(onMountOrder).toEqual(['B'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
  })

  test('/a/b => /a/b/c', () => {
    const [A, B, C] = createComponents(3, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a/b')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />}>
              <Route path={'/c'} element={<C />} />
            </Route>
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A', 'B'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a/b/c')
    expect(onMountOrder).toEqual(['C'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B', 'C'])
  })

  test('/a/b => /a', () => {
    const [A, B] = createComponents(2, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a/b')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />} />
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A', 'B'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a')
    expect(onMountOrder).toEqual([])
    expect(onDestroyOrder).toEqual(['B'])
    expect(findAllSpanTexts(rootElement)).toEqual(['A'])
  })

  test('/a/b/c => /a/b', () => {
    const [A, B, C] = createComponents(3, {
      lifecycle: 'onMount',
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a/b/c')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />}>
              <Route path={'/c'} element={<C />} />
            </Route>
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A', 'B', 'C'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B', 'C'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a/b')
    expect(onMountOrder).toEqual([])
    expect(onDestroyOrder).toEqual(['C'])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
  })

  test('/a/b => /c/d', () => {
    const [A, B, C, D] = createComponents(4, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a/b')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />} />
          </Route>
          <Route path={'/c'} element={<C />}>
            <Route path={'/d'} element={<D />} />
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A', 'B'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/c/d')
    expect(onMountOrder).toEqual(['C', 'D'])
    expect(onDestroyOrder).toEqual(['A', 'B'])
    expect(findAllSpanTexts(rootElement)).toEqual(['C', 'D'])
  })

  test('/a/b/c => /a/b/d', () => {
    const [A, B, C, D] = createComponents(4, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a/b/c')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />}>
              <Route path={'/c'} element={<C />} />
              <Route path={'/d'} element={<D />} />
            </Route>
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A', 'B', 'C'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B', 'C'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a/b/d')
    expect(onMountOrder).toEqual(['D'])
    expect(onDestroyOrder).toEqual(['C'])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B', 'D'])
  })

  test('/a/b => /', () => {
    const [A, B, C] = createComponents(4, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/a/b')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/'} element={<C />} />
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />} />
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['A', 'B'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/')
    expect(onMountOrder).toEqual(['C'])
    expect(onDestroyOrder).toEqual(['A', 'B'])
    expect(findAllSpanTexts(rootElement)).toEqual(['C'])
  })

  test('/ => /a', () => {
    const [A, B, C] = createComponents(4, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/'} element={<C />} />
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />} />
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['C'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['C'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a')
    expect(onMountOrder).toEqual(['A'])
    expect(onDestroyOrder).toEqual(['C'])
    expect(findAllSpanTexts(rootElement)).toEqual(['A'])
  })

  test('/ => /a/b', () => {
    const [A, B, C] = createComponents(4, {
      hasOutlet: true,
      onMountOrder,
      onDestroyOrder,
    })
    useNavigateMock('/')
    root(
      rootElement,
      <Toggle is={showRoot()}>
        <Router>
          <Route path={'/'} element={<C />} />
          <Route path={'/a'} element={<A />}>
            <Route path={'/b'} element={<B />} />
          </Route>
        </Router>
      </Toggle>,
    )
    expect(onMountOrder).toEqual(['C'])
    expect(onDestroyOrder).toEqual([])
    expect(findAllSpanTexts(rootElement)).toEqual(['C'])
    clearOnMountOrder()
    clearOnDestroyOrder()
    useNavigateMock('/a/b')
    expect(onMountOrder).toEqual(['A', 'B'])
    expect(onDestroyOrder).toEqual(['C'])
    expect(findAllSpanTexts(rootElement)).toEqual(['A', 'B'])
  })
})
