import { element } from '@rvjs/core/dom'
import { dynamic, prop } from '@rvjs/core/reactive'
import { checkProps } from '@rvjs/is'
import { text_recipe, textSprinkles } from '@typography/text/Text.css.ts'
import { TextProps, textPropsType } from '@typography/text/Text.props.ts'

const Text = (props: TextProps) => {
  const {
    as = 'p',
    classes = [],
    text,
    kind = prop(() => 'body-01'),
    color = prop(() => 'textPrimary'),
  } = checkProps<TextProps>(props, textPropsType)

  return element(as, {
    classes: [
      dynamic(() => text_recipe({ kind: kind() })),
      dynamic(() => textSprinkles({ color: color() })),
      ...classes.map((cls) => dynamic(() => cls())),
    ],
    textContent: dynamic(() => text()),
  })
}

export default Text
