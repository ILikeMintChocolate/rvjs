import { LocalizerOption } from './localizer.ts'
import { hasCountry, splitLocale } from './util.ts'

export const getUserLocales = () => {
  const savedLocaleString = localStorage.getItem('USER-LOCALE')
  if (savedLocaleString) {
    return savedLocaleString.split(' ')
  }
  return navigator.languages ? [...navigator.languages] : [navigator.language]
}

export const detectUserLocale = <T>(
  userLocales: string[],
  option: LocalizerOption<T>,
) => {
  for (const locale of userLocales) {
    if (hasCountry(locale)) {
      const [language, country] = splitLocale(locale)
      if (option.languages[language]?.countries[country]) {
        return locale
      }
    } else {
      if (option.languages[locale]?.default) {
        return locale
      }
    }
  }
  return option.defaultLanguage
}
