import { unorderedList_style } from '@content/list/unorderedList/UnorderedList.css.ts'
import {
  useUnorderedListProps,
  useUnorderedListStyleType,
} from '@content/list/unorderedList/UnorderedList.hook.ts'
import { UnorderedListProps } from '@content/list/unorderedList/UnorderedList.props.ts'

const unorderedList = (_props: UnorderedListProps) => {
  const props = useUnorderedListProps(_props)
  const unorderedListElement = useUnorderedListStyleType(props.type)

  return (
    <ul element={unorderedListElement} className={unorderedList_style}>
      {props.children}
    </ul>
  )
}

export default unorderedList
