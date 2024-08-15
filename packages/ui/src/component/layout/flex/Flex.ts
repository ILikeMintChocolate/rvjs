import { boxSprinkles } from '@layout/box/Box.css.ts'
import { FlexStyleProps } from '@layout/flex/Flex.css.ts'
import {
  Children,
  dynamic,
  element,
  ElementType,
  Prop,
  RefObject,
  StyleProps,
} from '@rvjs/core'
import { HTMLDivType } from '@type/element.ts'

interface FlexProps extends FlexStyleProps, HTMLDivType {
  as?: ElementType
  children?: Children
  classes?: Prop<string>[]
  style?: Partial<StyleProps>
  ref?: RefObject<HTMLDivElement>
}

const Flex = (props: FlexProps) => {
  const {
    as = 'div',
    children = [],
    classes = [],
    style = {},
    ref,
    position,
    top,
    bottom,
    right,
    left,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    zIndex,
    alignItems,
    justifyContent,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
    gap,
    color,
    backgroundColor,
    opacity,
    overflow,
    m,
    mt,
    mr,
    me,
    mb,
    ml,
    ms,
    marginX,
    marginY,
    mx,
    my,
    p,
    pt,
    pr,
    pe,
    pb,
    pl,
    ps,
    paddingX,
    paddingY,
    px,
    py,
    bgColor,
    align,
    justify,
    wrap,
    direction,
    ...restProps
  } = props

  return element(as, {
    ref,
    classes: [
      boxSprinkles({
        display: 'flex',
        position,
        top,
        bottom,
        right,
        left,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        zIndex,
        alignItems: align || alignItems,
        justifyContent: justify || justifyContent,
        flexDirection: direction || flexDirection,
        flexWrap: wrap || flexWrap,
        flexGrow,
        flexShrink,
        gap,
        color,
        backgroundColor,
        opacity,
        overflow,
        m,
        mt,
        mr,
        me,
        mb,
        ml,
        ms,
        marginX,
        marginY,
        mx,
        my,
        p,
        pt,
        pr,
        pe,
        pb,
        pl,
        ps,
        paddingX,
        paddingY,
        px,
        py,
        bgColor,
      }),
      ...classes.map((cls) => dynamic(() => cls())),
    ],
    children,
    style,
    ...restProps,
  })
}

export default Flex
