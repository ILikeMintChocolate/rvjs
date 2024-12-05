import { LocalizerOption } from './localizer.ts'

export const hasCountry = (locale: string) => {
  return locale.length === 5 && locale[2] == '-'
}

export const splitLocale = (locale: string) => {
  return locale.split('-')
}

export const findContentByKey = <T>(resource: T, key: string) => {
  const keys = key.split('.')
  let currentObject = resource
  for (const key of keys) {
    // @ts-ignore
    currentObject = currentObject[key]
  }
  // @ts-ignore
  return currentObject
}

export const findResource = <T>(locale: string, option: LocalizerOption<T>) => {
  if (hasCountry(locale)) {
    const [language, country] = splitLocale(locale)
    return option.languages[language].countries[country]
  } else {
    return option.languages[locale].default
  }
}

export const getAllLocales = <T>(option: LocalizerOption<T>) => {
  const { languages } = option
  const locales = []
  for (const language in languages) {
    locales.push(language)
    const { countries } = languages[language]
    for (const country in countries) {
      locales.push(`${language}-${country}`)
    }
  }
  return locales
}
