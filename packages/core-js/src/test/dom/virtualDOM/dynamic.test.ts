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

describe('testing dynamic virtualDOM structure (for)', () => {
  test('For[] => For[Element]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createElement('B')])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Component[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createComponent('B', createElement('C'))])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[TextNode]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createText('B')])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[For[]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createFor('B', {}, [])])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[For[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createFor('B', {}, [createElement('C')])])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[For[Component[Element]]]', () => {
    const setter = {}
    const App = createFor('A', setter, [createFor('B', {}, [])])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createComponent('C', createElement('D'))])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[For[TextNode]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createFor('B', {}, [createText('C')])])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Switch[]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [...prev, createSwitch('B', {}, '1', { '1': null })])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Switch[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Switch[Component[Element]]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createSwitch('B', {}, '1', {
        '1': createComponent('C', createElement('D')),
      }),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Switch[TextNode]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createSwitch('B', {}, '1', { '1': createText('C') }),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Toggle[]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, false, createElement('C')),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Toggle[Element]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, true, createElement('C')),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Toggle[Component[Element]]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('For[] => For[Toggle[TextNode]]', () => {
    const setter = {}
    const App = createFor('A', setter, [])
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']((prev) => [
      ...prev,
      createToggle('B', {}, true, createText('C')),
    ])
    expect(validateParentChildren(App.parent)).toBe(true)
  })
})

describe('testing dynamic virtualDOM structure (switch)', () => {
  test('Switch[] => Switch[Element]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createElement('B'),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[Component[Element]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createComponent('B', createElement('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[TextNode]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createText('B'),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[For[]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, []),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[For[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, [createElement('C')]),
    })

    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[For[Component[Element]]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, [createComponent('C', createElement('D'))]),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[For[TextNode]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createFor('B', {}, [createText('C')]),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[Switch[]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createSwitch('B', {}, '1', { '1': null }),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[Switch[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createSwitch('B', {}, '2', { '1': null, '2': createElement('C') }),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
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
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
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
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[Toggle[]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '2', {
      '1': null,
      '2': createToggle('B', {}, false, createElement('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[Toggle[Element]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createToggle('B', {}, true, createElement('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
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
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Switch[] => Switch[Toggle[TextNode]]', () => {
    const setter = {}
    const App = createSwitch('A', setter, '1', {
      '1': null,
      '2': createToggle('B', {}, true, createText('C')),
    })
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A']('2')
    expect(validateParentChildren(App.parent)).toBe(true)
  })
})

describe('testing dynamic virtualDOM structure (toggle)', () => {
  test('Toggle[] => Toggle[Element]', () => {
    const setter = {}
    const App = createToggle('A', setter, false, createElement('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Component[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createComponent('B', createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[TextNode]', () => {
    const setter = {}
    const App = createToggle('A', setter, false, createText('B'))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[For[]]', () => {
    const setter = {}
    const App = createToggle('A', setter, false, createFor('B', {}, []))
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[For[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createFor('B', {}, [createElement('C')]),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[For[Component[Element]]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createFor('B', {}, [createComponent('C', createElement('D'))]),
    )

    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[For[TextNode]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createFor('B', {}, [createText('C')]),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Switch[]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createSwitch('B', {}, '1', { '1': null }),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Switch[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createSwitch('B', {}, '1', { '1': createElement('C') }),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
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
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
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
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Toggle[]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, false, createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Toggle[Element]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, true, createElement('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Toggle[Component[Element]]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, true, createComponent('C', createElement('D'))),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })

  test('Toggle[] => Toggle[Toggle[TextNode]]', () => {
    const setter = {}
    const App = createToggle(
      'A',
      setter,
      false,
      createToggle('B', {}, true, createText('C')),
    )
    root(document.createElement('div'), App)
    expect(validateParentChildren(App.parent)).toBe(true)
    setter['A'](true)
    expect(validateParentChildren(App.parent)).toBe(true)
  })
})
