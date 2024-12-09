import { OrderedListProps } from '@content/list/orderedList/OrderedList.props.ts'
import { defineProps, onMount, useElement } from '@rvjs/core'

const orderedListStyleTypeMap = {
  '1': 'decimal',
  a: 'lower-alpha',
  A: 'upper-alpha',
  i: 'lower-roman',
  I: 'upper-roman',
}

export const useOrderedListProps = (
  props: OrderedListProps,
): OrderedListProps => {
  const newProps = defineProps(props, {
    get type() {
      return props.type || '1'
    },
  })

  return newProps
}

export const useOrderedListStyleType = (props: OrderedListProps) => {
  const orderedListElement = useElement<HTMLOListElement>()

  onMount(() => {
    if (orderedListElement.current) {
      orderedListElement.current.style.listStyleType =
        orderedListStyleTypeMap[props.type]
    }
  })

  return orderedListElement
}
