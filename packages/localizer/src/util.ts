import { LocalizerOption } from './localizer.ts'

export const isStringLanguage = (value: string) => {
  return value.length === 2
}

export const isStringLocale = (value: string) => {
  return value.length === 5 && value[2] === '-'
}

export const splitLocale = (locale: string) => {
  return locale.split('-')
}

export const findContentByKey = <T>(resource: T, key: string): string => {
  const keys = key.split('.')
  let currentObject = resource
  for (const key of keys) {
    // @ts-ignore
    currentObject = currentObject[key]
  }
  return currentObject as string
}

export const findResource = <T>(locale: string, option: LocalizerOption<T>) => {
  const [language, country] = splitLocale(locale)
  return option.languages[language].countries[country]
}

export const getAllLocales = <T>(option: LocalizerOption<T>) => {
  const { languages } = option
  const locales = []
  for (const language in languages) {
    const { countries } = languages[language]
    for (const country in countries) {
      locales.push(`${language}-${country}`)
    }
  }
  return locales
}
