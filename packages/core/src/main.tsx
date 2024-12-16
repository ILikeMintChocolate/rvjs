import { Case, onDestroy, onMount, root, Switch, useState } from './index.ts'

const App = () => {
  const [status, setStatus] = useState(false)

  setTimeout(() => {
    setStatus(true)
  }, 1000)

  return (
    <div>
      <Switch>
        <Case is={status()}>
          <True />
        </Case>
        <Case is={!status()}>
          <False />
        </Case>
      </Switch>
    </div>
  )
}

const True = () => {
  onMount(() => {
    console.log('True onMount')
  })
  onDestroy(() => {
    console.log('True onDestroy')
  })
  return <h1>True</h1>
}

const False = () => {
  onMount(() => {
    console.log('False onMount')
  })
  onDestroy(() => {
    console.log('False onDestroy')
  })
  return <h1>False</h1>
}

root(document.getElementById('app'), <App />)
