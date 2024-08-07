import { dynamic, element, prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { text_recipe, textSprinkles } from '@typography/text/Text.css.ts'
import { TextProps, textPropsType } from '@typography/text/Text.props.ts'
import { ifIs } from '@util/array.ts'

const Text = (props: TextProps) => {
  const {
    as = 'p',
    classes = [],
    text,
    children,
    kind = prop(() => 'body-01'),
    color = prop(() => 'textPrimary'),
  } = checkProps<TextProps>(props, textPropsType)

  return element(as, {
    classes: [
      dynamic(() => text_recipe({ kind: kind() })),
      dynamic(() => textSprinkles({ color: color() })),
      ...classes.map((cls) => dynamic(() => cls())),
    ],
    ...ifIs(!!text, () => ({
      textContent: dynamic(() => text!()),
    }))[0],
    ...ifIs(!!children, () => ({
      children: children,
    }))[0],
  })
}

export default Text
