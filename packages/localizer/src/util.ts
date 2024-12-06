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
    return option.resources[language].countries[country]
  } else {
    return option.resources[locale].default
  }
}

export const getAllLocales = <T>(option: LocalizerOption<T>) => {
  const { resources } = option
  const locales = []
  for (const resource in resources) {
    locales.push(resource)
    const { countries } = resources[resource]
    for (const country in countries) {
      locales.push(`${resource}-${country}`)
    }
  }
  return locales
}
