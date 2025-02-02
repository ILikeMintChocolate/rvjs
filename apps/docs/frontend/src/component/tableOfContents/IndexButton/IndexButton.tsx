import {
  indexButton_button_style,
  indexButton_text_style,
} from '@component/tableOfContents/IndexButton/IndexButton.css.ts'
import { useIndexButtonScrollTo } from '@component/tableOfContents/IndexButton/IndexButton.hook.ts'
import { Text } from '@rvjs/ui'

export interface IndexButtonProps {
  heading: HTMLElement
}

const IndexButton = (props: IndexButtonProps) => {
  const onClickHandler = useIndexButtonScrollTo(props)

  return (
    <button className={indexButton_button_style} onClick={onClickHandler}>
      <Text as="span" kind="body-01" className={indexButton_text_style}>
        {props.heading.textContent}
      </Text>
    </button>
  )
}

export default IndexButton
