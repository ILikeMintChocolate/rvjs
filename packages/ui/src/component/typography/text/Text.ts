import { element, ElementType } from '@rvjs/core/dom'
import { dynamic, Prop, prop } from '@rvjs/core/reactive'
import {
  text_recipe,
  textSprinkles,
  TextStyleProps,
} from '@typography/text/Text.css.ts'

interface TextProps extends TextStyleProps {
  as?: ElementType
  classes?: Prop<string>[]
  text: Prop<string>
}

const Text = (props: TextProps) => {
  const {
    as = 'p',
    classes = [],
    text,
    kind = prop(() => 'body-01'),
    color = prop(() => 'textPrimary'),
  } = props

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
