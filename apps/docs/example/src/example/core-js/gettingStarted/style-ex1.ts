import { div, dynamic, useState } from '@rvjs/core'

const DynamicBox = () => {
  const [width, setWidth] = useState(100)

  return div({
    children: [
      div({
        style: {
          width: dynamic(() => `${width()}px`),
          height: '100px',
          backgroundColor: '#0c8ce9',
          transition: 'width 0.2s',
        },
        onclick: () => {
          if (width() < 300) {
            setWidth(width() + 50)
          }
        },
      }),
    ],
  })
}

export default DynamicBox
