import { LocalizerOption } from './localizer.ts'
import { isStringLanguage, isStringLocale, splitLocale } from './util.ts'

export const getUserLocales = (): string[] => {
  return navigator.languages as string[]
}

export const detectUserLocale = <T>(
  userInfos: string[],
  option: LocalizerOption<T>,
): string => {
  if (userInfos.length === 0) {
    return getDefaultLocale(option)
  }
  for (const userInfo of userInfos) {
    if (isStringLanguage(userInfo)) {
      const language = userInfo
      if (option.languages[language]?.defaultCountry) {
        return `${language}-${option.languages[language].defaultCountry}`
      }
    } else if (isStringLocale(userInfo)) {
      const [language, country] = splitLocale(userInfo)
      if (option.languages[language]) {
        return `${language}-${country ?? option.languages[language].defaultCountry}`
      }
    } else {
      return getDefaultLocale(option)
    }
  }
  return getDefaultLocale(option)
}

const getDefaultLocale = <T>(option: LocalizerOption<T>) => {
  return `${option.defaultLanguage}-${option.languages[option.defaultLanguage].defaultCountry}`
}
