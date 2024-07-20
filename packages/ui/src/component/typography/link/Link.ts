import { a, svg } from '@rvjs/core/dom'
import { dynamic, prop, useState } from '@rvjs/core/reactive'
import { useNavigate } from '@rvjs/core/router'
import { checkProps } from '@rvjs/is'
import {
  link_anchor_recipe,
  link_icon_recipe,
  link_text_style,
} from '@typography/link/Link.css.ts'
import { LinkProps, linkPropsType } from '@typography/link/Link.props.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

const Link = (props: LinkProps) => {
  const {
    href,
    as = 'p',
    text,
    disabled = prop(() => false),
    inline = prop(() => false),
    renderIcon,
    size = prop(() => 'md'),
  } = checkProps<LinkProps>(props, linkPropsType)
  const navigate = useNavigate()
  const [visited, setVisited] = useState(false)

  return a({
    classes: [dynamic(() => link_anchor_recipe({ inline: inline() }))],
    tabIndex: 0,
    onclick: (event: MouseEvent) => {
      event.preventDefault()
      navigate(href())
      setVisited(true)
    },
    children: [
      Text({
        as,
        text,
        kind: prop(() =>
          size() === 'sm'
            ? 'helper-text-01'
            : size() === 'md'
              ? 'body-compact-01'
              : 'body-compact-02',
        ),
        color: prop(() => 'linkPrimary'),
        classes: [
          prop(() =>
            link_text_style({ disabled: disabled(), visited: visited() }),
          ),
        ],
      }),
      ...ifIs(!!renderIcon, () => {
        return svg(renderIcon!, {
          classes: [
            dynamic(() =>
              link_icon_recipe({
                disabled: disabled(),
                visited: visited(),
                size: size(),
              }),
            ),
          ],
        })
      }),
    ],
  })
}

export default Link
