import { div, dynamic, useState } from '@rvjs/core'
import styles from './redOrBlueBox.module.css'

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
