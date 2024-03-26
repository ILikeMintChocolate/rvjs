# RVJS

Vanilla Javascript library for building reactive web applications.

Do not use Virtual DOM.

Only rerender elements that actually depend on the state.

# Installation

> [!WARNING]
>
> This library is still in development and is not ready for production use.

```bash
npm i @rvjs/core
```

# Example

```javascript
const App = component(() => {
  const [getCount, setCount] = useState(0)

  return div({
    children: [
      p({
        textContent: dynamic(() => `Count: ${getCount()}`),
      }),
      button({
        textContent: 'Increase',
        onclick: () => setCount(getCount() + 1),
      }),
    ],
  })
})

root(document.getElementById('app'), () => ({
  children: [App()],
}))
```
