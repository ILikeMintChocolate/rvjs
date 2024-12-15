import { Tag } from '@rvjs/core'
import { text_recipe, textSprinkles } from '@typography/text/Text.css.ts'
import { useTextProps } from '@typography/text/Text.hook.ts'
import { TextProps } from '@typography/text/Text.props.ts'

const Text = (_props: TextProps) => {
  const props = useTextProps(_props)

  return (
    <Tag
      as={props.as}
      className={[
        text_recipe({ kind: props.kind }),
        textSprinkles({ color: props.color }),
        props.className,
      ].join(' ')}
    >
      {props.children}
    </Tag>
  )
}

export default Text
