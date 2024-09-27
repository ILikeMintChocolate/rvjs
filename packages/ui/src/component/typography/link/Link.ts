import {
  a,
  dynamic,
  overrideElement,
  prop,
  useNavigate,
  useState,
} from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  link_anchor_recipe,
  link_icon_recipe,
  link_text_recipe,
} from '@typography/link/Link.css.ts'
import { LinkProps, linkPropsType } from '@typography/link/Link.props.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

const Link = (props: LinkProps) => {
  const {
    href,
    as = 'p',
    text,
    children = [],
    disabled = prop(() => false),
    inline = prop(() => false),
    renderIcon,
    size = prop(() => 'md'),
  } = checkProps<LinkProps>(props, linkPropsType)
  const navigate = useNavigate()
  const [visited, setVisited] = useState(false)

  return a({
    classes: [
      dynamic(() => link_anchor_recipe({ inline: inline() }).split(' ')),
    ],
    tabIndex: 0,
    onclick: (event: MouseEvent) => {
      event.preventDefault()
      navigate(href())
      setVisited(true)
    },
    children: [
      ...ifIs(!!text, () =>
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
              link_text_recipe({
                disabled: disabled(),
                visited: visited(),
              }).split(' '),
            ),
          ],
        }),
      ),
      ...children,
      ...ifIs(!!renderIcon, () => {
        return overrideElement(renderIcon!, {
          classes: [
            dynamic(() =>
              link_icon_recipe({
                disabled: disabled(),
                visited: visited(),
                size: size(),
              }).split(' '),
            ),
          ],
        })
      }),
    ],
  })
}

export default Link
