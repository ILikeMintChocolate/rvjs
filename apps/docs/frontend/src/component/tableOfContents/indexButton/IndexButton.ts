import {
  indexButton_button_style,
  indexButton_text_style,
} from '@component/tableOfContents/indexButton/indexButton.css.ts'
import { calcIndexButtonLevel } from '@component/tableOfContents/indexButton/indexButton.util.ts'
import { button, GetState, prop } from '@rvjs/core'
import { Text } from '@rvjs/ui'

export interface LinkProps {
  heading: {
    title: string
    element: HTMLElement
  }
  currentIndex: number
  activeIndex: GetState<number>
  indexButtonLevel: { prevTagLevel: number; level: number }
}

const IndexButton = (props: LinkProps) => {
  const { heading, currentIndex, activeIndex, indexButtonLevel } = props
  const { title, element } = heading
  const currentLevel = calcIndexButtonLevel(element, indexButtonLevel)

  return button({
    style: {
      paddingLeft: `${currentLevel}rem`,
    },
    classes: [indexButton_button_style],
    children: [
      Text({
        as: 'span',
        text: prop(() => title),
        kind: prop(() => {
          return activeIndex() === currentIndex
            ? 'heading-compact-01'
            : 'body-01'
        }),
        classes: [prop(() => indexButton_text_style)],
      }),
    ],
    onclick: () => {
      const scrollTopPosition =
        element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: scrollTopPosition - 48 - 200,
        behavior: 'smooth',
      })
    },
  })
}

export default IndexButton
