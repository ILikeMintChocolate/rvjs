import { root } from '@component/root.ts'
import { useState } from '@hook/useState.ts'
import { beforeEach, describe, expect, test } from 'vitest'
import styles from './className.module.css'

describe('className', () => {
  const App = (props) => {
    const { isRed, setIsRed, isBold, setIsBold } = props
    return (
      <div>
        <button onclick={() => setIsRed(!isRed())}>
          {isRed() ? 'to Blue' : 'to Red'}
        </button>
        <button onclick={() => setIsBold(!isBold())}>
          {isBold() ? 'to Thin' : 'to Bold'}
        </button>
        <h1
          className={[
            isRed() ? styles.red : styles.blue,
            isBold() ? styles.bold : styles.thin,
          ].join(' ')}
        >
          ASDF
        </h1>
      </div>
    )
  }

  let app
  let isRed, setIsRed
  let isBold, setIsBold

  beforeEach(() => {
    app = document.createElement('div')
    ;[isRed, setIsRed] = useState(true)
    ;[isBold, setIsBold] = useState(true)
    root(app, <App {...{ isRed, setIsRed, isBold, setIsBold }} />)
  })

  test('initial', () => {
    expect(app.querySelector('h1').classList).toContain(styles.red)
    expect(app.querySelector('h1').classList).toContain(styles.bold)
  })

  test('to Blue', () => {
    setIsRed(!isRed())
    expect(app.querySelector('h1').classList).toContain(styles.blue)
    expect(app.querySelector('h1').classList).toContain(styles.bold)
  })

  test('to blue and thin', () => {
    setIsRed(!isRed())
    setIsBold(!isBold())
    expect(app.querySelector('h1').classList).toContain(styles.blue)
    expect(app.querySelector('h1').classList).toContain(styles.thin)
  })
})
