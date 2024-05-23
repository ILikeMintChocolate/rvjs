import { boxSprinkles } from '@layout/box/Box.css.ts'
import { GridStyleProps } from '@layout/grid/Grid.css.ts'
import { Children, element, ElementType } from '@rvjs/core/dom'
import { mergeClass } from '@util/class.js'
import { Properties } from 'csstype'

interface BoxProps extends GridStyleProps {
  as?: ElementType
  children?: Children
  className?: string
  style?: Partial<Properties>
}

const Grid = (props: BoxProps) => {
  const {
    as = 'div',
    children = [],
    className = '',
    style = {},
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
  } = props

  return element(as, {
    className: mergeClass([
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
      className,
    ]),
    children,
    style,
  })
}

export default Grid
