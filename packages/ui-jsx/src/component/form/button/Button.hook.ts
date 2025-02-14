import {
  button_kind_recipe,
  button_size_recipe,
} from '@form/button/Button.css.ts'
import { ButtonProps } from '@form/button/Button.props.ts'
import { defineProps } from '@rvjs/core'
import { RecipeVariants } from '@vanilla-extract/recipes'

export const useButtonProps = (props: ButtonProps): ButtonProps => {
  const newProps = defineProps(props, {
    get type() {
      return props.type ?? 'button'
    },
    get className() {
      return props.className ?? ''
    },
    get disabled() {
      return props.disabled ?? false
    },
    get tabIndex() {
      return props.tabIndex ?? 0
    },
  })

  return newProps
}

export const useButtonClassName = (
  props: ButtonProps,
): {
  kind: RecipeVariants<typeof button_kind_recipe>['kind']
  size: RecipeVariants<typeof button_size_recipe>['size']
} => {
  const classes = {
    get kind() {
      return props.hasIconOnly && props.kind === 'ghost'
        ? 'ghostIconOnly'
        : props.kind
    },
    get size() {
      return (
        props.hasIconOnly ? `${props.size}IconOnly` : props.size
      ) as RecipeVariants<typeof button_size_recipe>['size']
    },
  }

  return classes
}
