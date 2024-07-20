import {
  orderedList_listStyleType_var,
  orderedList_style,
} from '@content/list/orderedList/OrderedList.css.ts'
import {
  OrderedListProps,
  orderedListPropsType,
} from '@content/list/orderedList/OrderedList.props.ts'
import { ol } from '@rvjs/core/dom'
import { dynamic, prop } from '@rvjs/core/reactive'
import { checkProps } from '@rvjs/is'
import { assignInlineVars } from '@vanilla-extract/dynamic'

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
    classes: [dynamic(() => orderedList_style)],
    style: assignInlineVars({
      [orderedList_listStyleType_var]: orderedListStyleTypeMap[type()],
    }),
    children,
  })
}

export default OrderedList
