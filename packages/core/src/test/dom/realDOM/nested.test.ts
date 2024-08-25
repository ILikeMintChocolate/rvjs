import { root } from '@component/root.ts'
import {
  createComponent,
  createElement,
  createFor,
  createSwitch,
  validateRealDOMElement,
} from '@test/dom/util.ts'
import { describe, expect, test } from 'vitest'

describe('testing nested dynamic realDOM structure', () => {
  test('case 1', () => {
    const setter = {}
    const App = createElement('A', [
      createElement('B'),
      createFor('C', setter, [createElement('E'), createElement('F')]),
      createElement('D'),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A', 'B', 'E', 'F', 'D'])
    setter['C']((prev) => [...prev, createElement('G')])
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'E',
      'F',
      'G',
      'D',
    ])
    setter['C']((prev) => [prev[2], prev[1], prev[0]])
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'G',
      'F',
      'E',
      'D',
    ])
  })

  test('case 2', () => {
    const setter = {}
    const App = createElement('A', [
      createElement('B'),
      createFor('C', setter, [
        createComponent('E', createElement('G')),
        createElement('F'),
      ]),
      createElement('D'),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual(['A', 'B', 'G', 'F', 'D'])
    setter['C']((prev) => [...prev, createComponent('H', createElement('I'))])
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'G',
      'F',
      'I',
      'D',
    ])
    setter['C']((prev) => [prev[2], prev[1], prev[0]])
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'I',
      'F',
      'G',
      'D',
    ])
  })

  test('case 3', () => {
    const setter = {}
    const App = createElement('A', [
      createElement('B'),
      createFor('C', setter, [
        createElement('CA'),
        createComponent('CB', createElement('CC')),
      ]),
      createComponent('D', createElement('E')),
      createFor('F', setter, [createComponent('FA', createElement('FB'))]),
      createComponent('G', createElement('H')),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'CA',
      'CC',
      'E',
      'FB',
      'H',
    ])
    setter['C']((prev) => [createElement('CD'), ...prev])
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'CD',
      'CA',
      'CC',
      'E',
      'FB',
      'H',
    ])
    setter['F']((prev) => [
      createElement('FC'),
      ...prev,
      createComponent('FD', createElement('FE')),
    ])
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'CD',
      'CA',
      'CC',
      'E',
      'FC',
      'FB',
      'FE',
      'H',
    ])
  })

  test('case 4', () => {
    const setter = {}
    const App = createElement('A', [
      createElement('B'),
      createFor('C', setter, [
        createSwitch('CA', setter, '2', {
          '1': null,
          '2': createElement('CAA'),
          '3': createComponent('CAB', createElement('CAC')),
        }),
        createComponent('CB', createElement('CC')),
      ]),
      createComponent('D', createElement('E')),
      createFor('F', setter, [createComponent('FA', createElement('FB'))]),
      createComponent('G', createElement('H')),
    ])
    const app = document.createElement('div')
    root(app, App)
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'CAA',
      'CC',
      'E',
      'FB',
      'H',
    ])
    setter['CA']('1')
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'CC',
      'E',
      'FB',
      'H',
    ])
    setter['CA']('3')
    expect(validateRealDOMElement(app)).toStrictEqual([
      'A',
      'B',
      'CAC',
      'CC',
      'E',
      'FB',
      'H',
    ])
  })
})
