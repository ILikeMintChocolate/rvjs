import {
  defineProps,
  GetState,
  onMount,
  useNavigate,
  useState,
} from '@rvjs/core'
import { link_icon_recipe } from '@typography/link/Link.css.ts'
import { LinkProps } from '@typography/link/Link.props.ts'
import { setSvgProperties } from '@util/svg.ts'

export const useLinkProps = (props: LinkProps) => {
  const newProps = defineProps(
    props,
    {
      get as() {
        return props.as ?? 'p'
      },
      get disabled() {
        return props.disabled ?? false
      },
      get inline() {
        return props.inline ?? false
      },
      get size() {
        return props.size ?? 'md'
      },
    },
    {
      children: ['children'],
    },
  )

  return newProps
}

export const useLinkNavigate = (props: LinkProps) => {
  const [visited, setVisited] = useState(false)
  const navigate = useNavigate()

  const onClickHandler = (event: MouseEvent) => {
    event.preventDefault()
    navigate(props.href, props.isExternal)
    setVisited(true)
  }

  return {
    visited,
    onClickHandler,
  }
}

export const useLinkIconStyle = (
  props: LinkProps,
  visited: GetState<boolean>,
) => {
  onMount(() => {
    if (props.renderIcon) {
      // @ts-ignore
      setSvgProperties(props.renderIcon.childNodes[0], {
        // @ts-ignore
        get className() {
          return link_icon_recipe({
            disabled: props.disabled,
            visited: visited(),
            size: props.size,
          })
        },
      })
    }
  })
}
