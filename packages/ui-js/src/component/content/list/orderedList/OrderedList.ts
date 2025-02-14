import { orderedList_style } from '@content/list/orderedList/OrderedList.css.ts'
import {
  OrderedListProps,
  orderedListPropsType,
} from '@content/list/orderedList/OrderedList.props.ts'
import { dynamic, ol, prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'

const orderedListStyleTypeMap = {
  '1': 'decimal',
  a: 'lower-alpha',
  A: 'upper-alpha',
  i: 'lower-roman',
  I: 'upper-roman',
}

const OrderedList = (props: OrderedListProps) => {
  const { children, type = prop(() => '1') } = checkProps<OrderedListProps>(
    props,
    orderedListPropsType,
  )

  return ol({
    classes: [orderedList_style],
    style: {
      listStyleType: dynamic(() => orderedListStyleTypeMap[type()]),
    },
    children,
  })
}

export default OrderedList
