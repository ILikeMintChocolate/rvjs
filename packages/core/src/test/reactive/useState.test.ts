import { describe, test } from 'vitest'

describe('testing that state-dependent For function render properly', () => {
  test('check values are rendered correctly when added to an array', () => {
    // const App = () => {
    //   const [items, setItems] = useState([1, 2, 3])
    //
    //   return div({
    //     id: 'wrapper',
    //     children: [
    //       button({
    //         id: 'add-button',
    //         onclick: () => {
    //           setItems([...items(), items().length + 1])
    //         },
    //       }),
    //       For(items, (item) => {
    //         return p({ textContent: String(`item-${item}`) })
    //       }),
    //       p({ textContent: 'end' }),
    //     ],
    //   })
    // }
    //
    // const app = document.createElement('div')
    //
    // root(app, App())
    //
    // expect(app.children[0].children[1].textContent).toEqual('item-1')
    // expect(app.children[0].children[2].textContent).toEqual('item-2')
    // expect(app.children[0].children[3].textContent).toEqual('item-3')
    //
    // const addButton = app.children[0].children[0]
    // // @ts-ignore
    // addButton.click()
    // // @ts-ignore
    // addButton.click()
    // // @ts-ignore
    // addButton.click()
    //
    // expect(app.children[0].children[4].textContent).toEqual('item-4')
    // expect(app.children[0].children[5].textContent).toEqual('item-5')
    // expect(app.children[0].children[6].textContent).toEqual('item-6')
  })
})
