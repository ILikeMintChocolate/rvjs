import styles from '@example/core/gettingStarted/style-ex2.module.css'
import { div, dynamic, useState } from '@rvjs/core'

const RedOrBlueBox = () => {
  const [isRed, setIsRed] = useState(true)

  return div({
    children: [
      div({
        classes: [
          styles.box,
          dynamic(() => (isRed() ? styles.red : styles.blue)),
        ],
        onclick: () => {
          setIsRed(!isRed())
        },
      }),
    ],
  })
}

export default RedOrBlueBox
