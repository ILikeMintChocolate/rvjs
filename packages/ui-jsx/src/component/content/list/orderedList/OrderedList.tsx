import { orderedList_style } from '@content/list/orderedList/OrderedList.css.ts'
import {
  useOrderedListProps,
  useOrderedListStyleType,
} from '@content/list/orderedList/OrderedList.hook.ts'
import { OrderedListProps } from '@content/list/orderedList/OrderedList.props.ts'

const OrderedList = (_props: OrderedListProps) => {
  const props = useOrderedListProps(_props)
  const orderedListElement = useOrderedListStyleType(props)

  return (
    <ol element={orderedListElement} className={orderedList_style}>
      {props.children}
    </ol>
  )
}

export default OrderedList
