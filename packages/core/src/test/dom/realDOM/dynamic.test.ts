import { root } from '@component/root.ts'
import {
  createComponent,
  createElement,
  createFor,
  createSwitch,
  createText,
  createToggle,
  validateRealDOMElement,
} from '@test/dom/util.ts'
import { describe, expect, test } from 'vitest'

describe('testing dynamic realDOM structure (for)', () => {
  test('For[] => For[Element]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createElement('B')])
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('For[] => For[Component[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createComponent('B', createElement('C'))])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[] => For[TextNode]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createText('B')])
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('For[] => For[For[]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createFor('B', {}, [])])
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[] => For[For[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createFor('B', {}, [createElement('C')])])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[] => For[For[Component[Element]]]', () => {
    const setter = {}
    const App = createFor('A', setter, [createFor('B', {}, [])])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createComponent('C', createElement('D'))])
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('For[] => For[For[TextNode]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createFor('B', {}, [createText('C')])])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[] => For[Switch[]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [...prev, createSwitch('B', {}, '1', { '1': null })])
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[] => For[Switch[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[] => For[Switch[Component[Element]]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('For[] => For[Switch[TextNode]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createSwitch('B', {}, '1', { '1': createText('C') }),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[] => For[Toggle[]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, false, createElement('C')),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('For[] => For[Toggle[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, true, createElement('C')),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('For[] => For[Toggle[Component[Element]]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('For[] => For[Toggle[TextNode]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, true, createText('C')),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })
})

describe('testing dynamic realDOM structure (switch)', () => {
  test('Switch[] => Switch[Element]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createElement('B'),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Switch[] => Switch[Component[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createComponent('B', createElement('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[] => Switch[TextNode]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createText('B'),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Switch[] => Switch[For[]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, []),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[] => Switch[For[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, [createElement('C')]),
    })

    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[] => Switch[For[Component[Element]]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, [createComponent('C', createElement('D'))]),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Switch[] => Switch[For[TextNode]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, [createText('C')]),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[] => Switch[Switch[]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createSwitch('B', {}, '1', { '1': null }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[] => Switch[Switch[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createSwitch('B', {}, '2', { '1': null, '2': createElement('C') }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[] => Switch[Switch[Component[Element]]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createSwitch('B', {}, '2', {
        '1': null,
        '2': createComponent('C', createElement('D')),
      }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Switch[] => Switch[Switch[TextNode]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createSwitch('B', {}, '2', {
        '1': null,
        '2': createText('C'),
      }),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[] => Switch[Toggle[]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '2', {
      '1': null,
      '2': createToggle('B', {}, false, createElement('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Switch[] => Switch[Toggle[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createToggle('B', {}, true, createElement('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Switch[] => Switch[Toggle[Component[Element]]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createToggle(
        'B',
        {},
        true,
        createComponent('C', createElement('D')),
      ),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Switch[] => Switch[Toggle[TextNode]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createToggle('B', {}, true, createText('C')),
    })
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A']('2')
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })
})

describe('testing dynamic realDOM structure (toggle)', () => {
  test('Toggle[] => Toggle[Element]', () => {
    const setter = {}
    const App = createToggle('A', setter, false, createElement('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Toggle[] => Toggle[Component[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createComponent('B', createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[] => Toggle[TextNode]', () => {
    const setter = {}
    const App = createToggle('A', setter, false, createText('B'))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['B'])
  })

  test('Toggle[] => Toggle[For[]]', () => {
    const setter = {}
    const App = createToggle('A', setter, false, createFor('B', {}, []))
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[] => Toggle[For[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createFor('B', {}, [createElement('C')]),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[] => Toggle[For[Component[Element]]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createFor('B', {}, [createComponent('C', createElement('D'))]),
    )

    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Toggle[] => Toggle[For[TextNode]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createFor('B', {}, [createText('C')]),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[] => Toggle[Switch[]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createSwitch('B', {}, '1', { '1': null }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[] => Toggle[Switch[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[] => Toggle[Switch[Component[Element]]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Toggle[] => Toggle[Switch[TextNode]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createSwitch('B', {}, '1', {
        '1': createText('C'),
      }),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[] => Toggle[Toggle[]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, false, createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual([])
  })

  test('Toggle[] => Toggle[Toggle[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, true, createElement('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })

  test('Toggle[] => Toggle[Toggle[Component[Element]]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['D'])
  })

  test('Toggle[] => Toggle[Toggle[TextNode]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, true, createText('C')),
    )
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([])
    setter['A'](true)
    expect(validateRealDOMElement(app)).toStrictEqual(['C'])
  })
})
