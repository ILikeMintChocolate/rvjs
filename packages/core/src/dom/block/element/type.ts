import { Dynamic } from '@hook/dynamic.ts'
import { Properties } from 'csstype'
import { CustomProps } from './property.ts'

type AllHTMLProps = {
  [Tag in keyof HTMLElementTagNameMap]: HTMLElementTagNameMap[Tag]
}

export type AllElementProps = CustomProps & {
  [K in keyof FilteredAllElementProps]:
    | FilteredAllElementProps[K]
    | Dynamic<FilteredAllElementProps[K]>
}

type FilteredAllElementProps = {
  [Tag in keyof AllHTMLProps]: FilterProps<AllHTMLProps[Tag]>
}[keyof AllHTMLProps]

export type ElementProps<TagName extends keyof HTMLElementTagNameMap> =
  CustomProps & {
    [K in keyof FilteredElementProps<TagName>]:
      | FilteredElementProps<TagName>[K]
      | Dynamic<FilteredElementProps<TagName>[K]>
  }

type FilteredElementProps<TagName extends keyof HTMLElementTagNameMap> =
  FilterProps<HTMLElementTagNameMap[TagName]>

export type StyleProps = {
  [K in keyof Properties]: Properties[K] | Dynamic<Properties[K]>
}

export type SvgProps = CustomProps & {
  [K in keyof FilteredSvgElementProps]:
    | FilteredSvgElementProps[K]
    | Dynamic<FilteredSvgElementProps[K]>
}

type FilteredSvgElementProps = FilterProps<SVGElement>

type FilterProps<Props> = Omit<Props, 'style' | 'children' | 'className'>
