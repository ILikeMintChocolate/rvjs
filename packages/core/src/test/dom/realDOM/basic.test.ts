import { root } from '@component/root.ts'
import { textNode } from '@element/elementMap.ts'
import {
  createComponent,
  createElement,
  createFor,
  createSwitch,
  createToggle,
  validateRealDOMElement,
} from '@test/dom/util.ts'
import { describe, expect, test } from 'vitest'

describe('testing basic realDOM structure', () => {
  test('Element[Element]', () => {
    const App = createElement('A', [createElement('B')])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A', 'B'])
  })

  test('Element[Component[Element]]', () => {
    const App = createElement('A', [createComponent('B', createElement('C'))])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A', 'C'])
  })

  test('Element[TextNode]', () => {
    const App = createElement('A', [textNode('B')])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A', 'B'])
  })

  test('Element[For]', () => {
    const App = createElement('A', [createFor('B', {}, [])])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A'])
  })

  test('Element[Switch]', () => {
    const App = createElement('A', [createSwitch('B', {}, '1', { '1': null })])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A'])
  })

  test('Element[Toggle[]]', () => {
    const App = createElement('A', [
      createToggle('B', {}, false, createElement('C')),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A'])
  })

  test('Component[Element]', () => {
    const App = createComponent('A', createElement('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Component[TextNode]', () => {
    const App = createComponent('A', textNode('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Component[For[]]', () => {
    const App = createComponent('A', createFor('B', {}, []))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Component[Switch[]]', () => {
    const App = createComponent('A', createSwitch('B', {}, '1', { '1': null }))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Component[Toggle[]]', () => {
    const App = createComponent(
      'A',
      createToggle('B', {}, false, createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[]', () => {
    const App = createFor('A', {}, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[Element]', () => {
    const App = createFor('A', {}, [createElement('B')])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('For[Component[Element]]', () => {
    const App = createFor('A', {}, [createComponent('B', createElement('C'))])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[TextNode]', () => {
    const App = createFor('A', {}, [textNode('B')])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('For[For[]]', () => {
    const App = createFor('A', {}, [createFor('B', {}, [])])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[For[Element]]', () => {
    const App = createFor('A', {}, [createFor('B', {}, [createElement('C')])])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[For[Component[Element]]]', () => {
    const App = createFor('A', {}, [
      createFor('B', {}, [createComponent('C', createElement('D'))]),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('For[For[TextNode]]', () => {
    const App = createFor('A', {}, [createFor('B', {}, [textNode('C')])])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[Switch[]]', () => {
    const App = createFor('A', {}, [createSwitch('B', {}, '1', { '1': null })])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[Switch[Element]]', () => {
    const App = createFor('A', {}, [
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[Switch[Component[Element]]]', () => {
    const App = createFor('A', {}, [
      createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('For[Switch[TextNode]]', () => {
    const App = createFor('A', {}, [
      createSwitch('B', {}, '1', { '1': textNode('C') }),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[Toggle[]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, false, createElement('C')),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[Toggle[Element]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, true, createElement('C')),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[Toggle[Component[Element]]]', () => {
    const App = createFor('A', {}, [
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('For[Toggle[TextNode]]', () => {
    const App = createFor('A', {}, [createToggle('B', {}, true, textNode('C'))])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[]', () => {
    const App = createSwitch('A', {}, '1', { '1': null })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[Element]', () => {
    const App = createSwitch('A', {}, '1', { '1': createElement('B') })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Switch[Component[Element]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createComponent('B', createElement('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[TextNode]', () => {
    const App = createSwitch('A', {}, '1', { '1': textNode('B') })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Switch[For[]]', () => {
    const App = createSwitch('A', {}, '1', { '1': createFor('B', {}, []) })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[For[Element]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createFor('B', {}, [createElement('C')]),
    })

    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[For[Component[Element]]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createFor('B', {}, [createComponent('C', createElement('D'))]),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Switch[For[TextNode]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createFor('B', {}, [textNode('C')]),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[Switch[]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', { '1': null }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[Switch[Element]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', { '1': createElement('C') }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[Switch[Component[Element]]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Switch[Switch[TextNode]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createSwitch('B', {}, '1', {
        '1': textNode('C'),
      }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[Toggle[]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle('B', {}, false, createElement('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[Toggle[Element]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle('B', {}, true, createElement('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
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
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Switch[Toggle[TextNode]]', () => {
    const App = createSwitch('A', {}, '1', {
      '1': createToggle('B', {}, true, textNode('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[]', () => {
    const App = createToggle('A', {}, false, createElement('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[Element]', () => {
    const App = createToggle('A', {}, true, createElement('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Toggle[Component[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createComponent('B', createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[TextNode]', () => {
    const App = createToggle('A', {}, true, textNode('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Toggle[For[]]', () => {
    const App = createToggle('A', {}, true, createFor('B', {}, []))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[For[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createFor('B', {}, [createElement('C')]),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[For[Component[Element]]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createFor('B', {}, [createComponent('C', createElement('D'))]),
    )

    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Toggle[For[TextNode]]', () => {
    const App = createToggle('A', {}, true, createFor('B', {}, [textNode('C')]))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[Switch[]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', { '1': null }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[Switch[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
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
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Toggle[Switch[TextNode]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createSwitch('B', {}, '1', {
        '1': textNode('C'),
      }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[Toggle[]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, false, createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[Toggle[Element]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, true, createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[Toggle[Component[Element]]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Toggle[Toggle[TextNode]]', () => {
    const App = createToggle(
      'A',
      {},
      true,
      createToggle('B', {}, true, textNode('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })
})
