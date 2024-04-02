import {
  abbreviatedDomProperty,
  DomProperty,
} from '@system/property/domProperty.ts'
import { abbreviatedStyleProperty } from '@system/property/styleProperty.ts'

// export const createStyleProperty = (
//   styles: Partial<StyleProperty>,
//   style?: CSS.Properties,
// ) => {
//   const filteredStyle = Object.entries(styles).reduce((acc, [key, value]) => {
//     if (value !== undefined && value !== null) {
//       // @ts-ignore
//       acc[abbreviatedStyleProperties[key]] = value
//     }
//     return acc
//   }, {} as Partial<CSSStyleDeclaration>)
//
//   return { ...filteredStyle, ...style } as Partial<CSSStyleDeclaration>
// }
//
//
// export const createDomProperty = (props: Partial<DomProperties>) => {
//   const filteredDomProperty = Object.entries(props).reduce(
//     (acc, [key, value]) => {
//       if (value !== undefined && value !== null && value !== '') {
//         // @ts-ignore
//         acc[domPropertyKeys[key]] = value
//       }
//       return acc
//     },
//     {} as Partial<DomProperty>,
//   )
//
//   return filteredDomProperty
// }

type AbbreviatedStyleKeys = keyof typeof abbreviatedStyleProperty
type AbbreviatedDomKeys = keyof typeof abbreviatedDomProperty

export const classifyProperty = (properties: Object) => {
  const styleProperties = Object.entries(properties).reduce(
    (acc, [key, value]) => {
      if (key === 'style') {
        acc.styleProps = { ...acc.styleProps, ...value }
      } else if ((key as AbbreviatedStyleKeys) in abbreviatedStyleProperty) {
        acc.styleProps[abbreviatedStyleProperty[key as AbbreviatedStyleKeys]] =
          value
      } else if ((key as AbbreviatedDomKeys) in abbreviatedDomProperty) {
        acc.domProps[abbreviatedDomProperty[key as AbbreviatedDomKeys]] = value
      } else {
        acc.restProps[key] = value
      }
      return acc
    },
    {
      styleProps: {} as Partial<CSSStyleDeclaration>,
      domProps: {} as Partial<DomProperty>,
      restProps: {} as Record<string, any>,
    },
  )

  return styleProperties
}
