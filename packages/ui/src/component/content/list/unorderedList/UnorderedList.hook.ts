import { UnorderedListProps } from '@content/list/unorderedList/UnorderedList.props.ts'
import { defineProps, onMount, useElement } from '@rvjs/core'

export const useUnorderedListProps = (
  props: UnorderedListProps,
): UnorderedListProps => {
  const newProps = defineProps(props, {
    get type() {
      return props.type ?? 'square'
    },
  })

  return newProps
}

export const useUnorderedListStyleType = (type: UnorderedListProps['type']) => {
  const unorderedListElement = useElement<HTMLOListElement>()

  onMount(() => {
    if (unorderedListElement.current) {
      unorderedListElement.current.style.listStyleType = type
    }
  })

  return unorderedListElement
}
