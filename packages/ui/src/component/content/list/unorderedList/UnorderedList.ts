import {
  unorderedList_listStyleType_var,
  unorderedList_style,
} from '@content/list/unorderedList/UnorderedList.css.ts'
import {
  UnorderedListProps,
  unorderedListPropsType,
} from '@content/list/unorderedList/UnorderedList.props.ts'
import { prop, ul } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { assignInlineVars } from '@vanilla-extract/dynamic'

const unorderedList = (props: UnorderedListProps) => {
  const { children, type = prop(() => 'square') } =
    checkProps<UnorderedListProps>(props, unorderedListPropsType)

  return ul({
    classes: [unorderedList_style],
    style: assignInlineVars({
      [unorderedList_listStyleType_var]: type(),
    }),
    children,
  })
}

export default unorderedList
