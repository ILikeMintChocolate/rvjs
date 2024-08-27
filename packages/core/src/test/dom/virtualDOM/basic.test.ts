import { root } from '@component/root.ts'
import {
  createComponent,
  createElement,
  createFor,
  createSwitch,
  createText,
  createToggle,
  validateParentChildren,
} from '@test/dom/util.ts'
import { describe, expect, test } from 'vitest'

describe('testing basic virtualDOM structure', () => {
  test('Element[Element]', () => {
    const App = createElement('A', [createElement('B')])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Element[Component[Element]]', () => {
    const App = createElement('A', [createComponent('B', createElement('C'))])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Element[TextNode]', () => {
    const App = createElement('A', [createText('B')])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Element[For]', () => {
    const App = createElement('A', [createFor('B', {}, [])])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Element[Switch]', () => {
    const App = createElement('A', [createSwitch('B', {}, '1', { '1': null })])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Element[Toggle[]]', () => {
    const App = createElement('A', [
      createToggle('B', {}, false, createElement('C')),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Component[Element]', () => {
    const App = createComponent('A', createElement('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Component[TextNode]', () => {
    const App = createComponent('A', createText('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Component[For[]]', () => {
    const App = createComponent('A', createFor('B', {}, []))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Component[Switch[]]', () => {
    const App = createComponent('A', createSwitch('B', {}, '1', { '1': null }))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Component[Toggle[]]', () => {
    const App = createComponent(
      'A',
      createToggle('B', {}, false, createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[]', () => {
    const App = createFor('A', {}, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Element]', () => {
    const App = createFor('A', {}, [createElement('B')])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Component[Element]]', () => {
    const App = createFor('A', {}, [createComponent('B', createElement('C'))])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[TextNode]', () => {
    const App = createFor('A', {}, [createText('B')])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[For[]]', () => {
    const App = createFor('A', {}, [createFor('B', {}, [])])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[For[Element]]', () => {
    const App = createFor('A', {}, [createFor('B', {}, [createElement('C')])])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[For[Component[Element]]]', () => {
    const App = createFor('A', {}, [
      createFor('B', {}, [createComponent('C', createElement('D'))]),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[For[TextNode]]', () => {
    const App = createFor('A', {}, [createFor('B', {}, [createText('C')])])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Switch[]]', () => {
    const App = createFor('A', {}, [createSwitch('B', {}, '1', { '1': null })])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Switch[Element]]', () => {
    const App = createFor('A', {}, [
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Switch[Component[Element]]]', () => {
    const App = createFor('A', {}, [
      createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Switch[TextNode]]', () => {
    const App = createFor('A', {}, [
      createSwitch('B', {}, '1', { '1': createText('C') }),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Toggle[]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, false, createElement('C')),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Toggle[Element]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, true, createElement('C')),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Toggle[Component[Element]]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[Toggle[TextNode]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, true, createText('C')),
    ])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[]', () => {
    const App = createSwitch('A', {}, '1', { '1': null })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Element]', () => {
    const App = createSwitch('A', {}, '1', { '1': createElement('B') })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Component[Element]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createComponent('B', createElement('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[TextNode]', () => {
    const App = createSwitch('A', {}, '1', { '1': createText('B') })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[For[]]', () => {
    const App = createSwitch('A', {}, '1', { '1': createFor('B', {}, []) })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[For[Element]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createFor('B', {}, [createElement('C')]),
    })

    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[For[Component[Element]]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createFor('B', {}, [createComponent('C', createElement('D'))]),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[For[TextNode]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createFor('B', {}, [createText('C')]),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Switch[]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', { '1': null }),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Switch[Element]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', { '1': createElement('C') }),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Switch[Component[Element]]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Switch[TextNode]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', {
        '1': createText('C'),
      }),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Toggle[]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle('B', {}, false, createElement('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Toggle[Element]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle('B', {}, true, createElement('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Toggle[Component[Element]]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle(
        'B',
        {},
        true,
        createComponent('C', createElement('D')),
      ),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[Toggle[TextNode]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle('B', {}, true, createText('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[]', () => {
    const App = createToggle('A', {}, false, createElement('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Element]', () => {
    const App = createToggle('A', {}, true, createElement('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Component[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createComponent('B', createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[TextNode]', () => {
    const App = createToggle('A', {}, true, createText('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[For[]]', () => {
    const App = createToggle('A', {}, true, createFor('B', {}, []))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[For[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createFor('B', {}, [createElement('C')]),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[For[Component[Element]]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createFor('B', {}, [createComponent('C', createElement('D'))]),
    )

    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[For[TextNode]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createFor('B', {}, [createText('C')]),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Switch[]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', { '1': null }),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Switch[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Switch[Component[Element]]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Switch[TextNode]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', {
        '1': createText('C'),
      }),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Toggle[]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, false, createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Toggle[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, true, createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Toggle[Component[Element]]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[Toggle[TextNode]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, true, createText('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
  })
})
