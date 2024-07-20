import { Prop, prop } from '@rvjs/core/reactive'
import {
  isBoolean,
  isFunctionType,
  isNumber,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'
import { CSSProperties } from '@vanilla-extract/css'

export interface CodeSnippetProps {
  codeText: Prop<string>
  language: 'javascript' | 'typescript' | 'html' | 'css' | 'bash' | 'json'
  type?: 'single' | 'inline' | 'multi'
  collapsedNumberOfRows?: Prop<number>
  copyButtonDescription?: Prop<string>
  hideCopyButton?: Prop<boolean>
  onClick?: GlobalEventHandlers['onclick']
  width?: Prop<CSSProperties['width']>
  wrapText?: Prop<boolean>
  ariaLabel?: Prop<string>
  defaultShow?: Prop<boolean>
}

export const codeSnippetPropsType = {
  codeText: isProp(isString),
  // language: isString,
  type: isOptional(isString),
  collapsedNumberOfRows: isOptional(isProp(isNumber)),
  copyButtonDescription: isOptional(isProp(isString)),
  hideCopyButton: isOptional(isProp(isBoolean)),
  onClick: isOptional(isFunctionType),
  width: isOptional(isProp(isString)),
  wrapText: isOptional(isProp(isBoolean)),
  ariaLabel: isOptional(isProp(isString)),
  defaultShow: isOptional(isProp(isBoolean)),
}

export const codeSnippetRenderProps = {
  codeText: (p: string) => prop(() => p),
  language: (p: string) => p,
  type: (p: string) => p,
  collapsedNumberOfRows: (p: number) => prop(() => p),
  copyButtonDescription: (p: string) => prop(() => p),
  hideCopyButton: (p: boolean) => prop(() => p),
  onClick: (h: any) => h,
  width: (p: string) => prop(() => p),
  wrapText: (p: boolean) => prop(() => p),
  ariaLabel: (p: string) => prop(() => p),
  defaultShow: (p: boolean) => prop(() => p),
}
