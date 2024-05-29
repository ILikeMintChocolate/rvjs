import { element, ElementType } from '@rvjs/core/dom'
import { Reactive, useStatable } from '@rvjs/core/reactive'
import {
  textRecipe,
  textSprinkles,
  TextStyleProps,
} from '@typography/text/Text.css.ts'

interface TextProps extends TextStyleProps {
  as?: ElementType
  classes?: Reactive<string>[]
  text: Reactive<string>
}

const Text = (props: TextProps) => {
  const {
    as = 'p',
    classes = [],
    text,
    kind = 'body-01',
    color = 'textPrimary',
  } = props

  return element(as, {
    classes: [
      useStatable(
        kind,
        (kind) => textRecipe({ kind: kind() }),
        (kind) => textRecipe({ kind }),
      ),
      useStatable(
        color,
        // @ts-ignore
        (color) => textSprinkles({ color: color() }),
        // @ts-ignore
        (color) => textSprinkles({ color }),
      ),
      ...classes,
    ],
    textContent: text,
  })
}

export default Text
