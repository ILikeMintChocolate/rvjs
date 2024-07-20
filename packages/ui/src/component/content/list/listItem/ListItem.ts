import {
  listItem_li_style,
  listItem_text_style,
} from '@content/list/listItem/ListItem.css.ts'
import {
  ListItemProps,
  listItemPropsType,
} from '@content/list/listItem/ListItem.props.ts'
import { li } from '@rvjs/core/dom'
import { dynamic, prop } from '@rvjs/core/reactive'
import { checkProps } from '@rvjs/is'
import { text_recipe } from '@typography/text/Text.css.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

const ListItem = (props: ListItemProps) => {
  const { text, children = [] } = checkProps(props, listItemPropsType)

  return li({
    classes: [
      listItem_li_style,
      dynamic(() => text_recipe({ kind: 'body-01' })),
    ],
    children: [
      ...ifIs(!!text, () =>
        Text({
          text,
          as: 'span',
          kind: prop(() => 'body-01'),
          color: prop(() => 'textPrimary'),
          classes: [prop(() => listItem_text_style)],
        }),
      ),
      ...children,
    ],
  })
}

export default ListItem
