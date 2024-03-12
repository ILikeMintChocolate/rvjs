import { button, div } from './dom/element.ts'
import { component } from './dom/component.ts'
import { useState } from './reactive/hook/useState.ts'
import { root } from './dom/root.ts'
import { For } from './reactive/children/for.ts'

const app = document.getElementById('app')!

const Parent = component(() => {
  const [list, setList] = useState([10, 11, 12])
  return div({
    children: [
      button({
        id: 'addButton',
        onclick: () => setList((pre) => [...pre, pre.length + 10]),
      }),
      button({
        id: 'initButton',
        onclick: () => setList((pre) => [...pre, pre.length + 10]),
      }),
      Child({ key: 'Child1', index: 1 }),
      For(list, (num) =>
        div({ children: [Child({ key: 'Child' + num, index: num })] }),
      ),
      Child({ key: 'Child100', index: 100 }),
    ],
  })
})
const Child = component((props) => {
  const { index } = props
  return div({
    children: [GrandChild({ key: 'GrandChild' + index })],
  })
})
const GrandChild = component(() => {
  return div({})
})
const tree = Parent({ key: 'Parent' })

root(app, () => ({
  children: [tree],
}))

console.log(tree.shortcutChildComponents)
tree.children[0].element.querySelector('#addButton').click()
console.log(tree.shortcutChildComponents)
