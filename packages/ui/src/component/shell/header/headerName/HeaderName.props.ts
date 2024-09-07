import { prop, Prop } from '@rvjs/core'
import { isOptional, isProp, isString } from '@rvjs/is'

export interface HeaderNameProps {
  title: Prop<string>
  href: Prop<string>
  prefix?: Prop<string>
}

export const headerNamePropsType = {
  title: isProp(isString),
  href: isProp(isString),
  prefix: isOptional(isProp(isString)),
}

export const headerNameRenderProps = {
  title: (p: string) => prop(() => p),
  href: (p: string) => prop(() => p),
  prefix: (p: string) => prop(() => p),
}
