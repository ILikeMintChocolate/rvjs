import {
  AnyBlock,
  ComponentBlock,
  DynamicChildren,
  ElementBlock,
} from '@rvjs/core/dom'
import { DynamicRender } from '@rvjs/core/reactive'

type DomPropertyKeys = keyof DomPropertyType

export const abbreviatedDomProperty: Record<string, DomPropertyKeys> = {
  c: 'children',
  text: 'textContent',
}

export interface DomPropertyType {
  children:
    | ComponentBlock
    | ElementBlock
    | ComponentBlock[]
    | ElementBlock[]
    | (ComponentBlock | ElementBlock)[]
    | AnyBlock
    | DynamicChildren
    | (AnyBlock | DynamicChildren)[]
  textContent: string
}

export type DomProperty = {
  [K in keyof typeof abbreviatedDomProperty]:
    | DomPropertyType[(typeof abbreviatedDomProperty)[K]]
    | DynamicRender
}
