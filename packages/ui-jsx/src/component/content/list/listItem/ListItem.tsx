import { listItem_li_style } from '@content/list/listItem/ListItem.css.ts'
import { ListItemProps } from '@content/list/listItem/ListItem.props.ts'
import { isGetter } from '@type/guard.ts'
import { text_recipe } from '@typography/text/Text.css.ts'
import Text from '@typography/text/Text.tsx'

const ListItem = (props: ListItemProps) => {
  return (
    <li
      className={[listItem_li_style, text_recipe({ kind: 'body-01' })].join(
        ' ',
      )}
    >
      {!isGetter(props, 'children') ? (
        <Text as="span" kind="body-01" color="textPrimary">
          {props.children}
        </Text>
      ) : (
        props.children
      )}
    </li>
  )
}

export default ListItem
