import { isString } from '@type/guard.ts'
import {
  link_anchor_recipe,
  link_text_recipe,
} from '@typography/link/Link.css.ts'
import {
  useLinkIconStyle,
  useLinkNavigate,
  useLinkProps,
} from '@typography/link/Link.hook.ts'
import { LinkProps } from '@typography/link/Link.props.ts'
import Text from '@typography/text/Text.tsx'

const Link = (_props: LinkProps) => {
  const props = useLinkProps(_props)
  const { visited, onClickHandler } = useLinkNavigate(props)
  useLinkIconStyle(props, visited)

  return (
    <a
      className={link_anchor_recipe({ inline: props.inline })}
      tabIndex={0}
      onClick={onClickHandler}
    >
      {isString(props.children) ? (
        <Text
          as={props.as}
          kind={
            props.size === 'sm'
              ? 'helper-text-01'
              : props.size === 'md'
                ? 'body-compact-01'
                : 'body-compact-02'
          }
          color="linkPrimary"
          className={link_text_recipe({
            disabled: props.disabled,
            visited: visited(),
          })}
        >
          {props.children}
        </Text>
      ) : (
        props.children
      )}
      {props.renderIcon}
    </a>
  )
}

export default Link
