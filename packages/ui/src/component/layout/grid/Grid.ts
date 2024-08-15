import { boxSprinkles } from '@layout/box/Box.css.ts'
import { GridStyleProps } from '@layout/grid/Grid.css.ts'
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

interface BoxProps extends GridStyleProps, HTMLDivType {
  as?: ElementType
  children?: Children
  classes?: Prop<string>[]
  style?: Partial<StyleProps>
  ref?: RefObject<HTMLDivElement>
}

const Grid = (props: BoxProps) => {
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
    ...restProps
  } = props

  return element(as, {
    ref,
    classes: [
      boxSprinkles({
        display: 'grid',
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

export default Grid
