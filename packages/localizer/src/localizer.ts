import { GetState, SetState, useEffect, useState } from '@rvjs/core'
import { detectUserLocale, getUserLocales } from './locale.ts'
import {
  findContentByKey,
  findResource,
  getAllLocales as _getAllLocales,
} from './util.ts'

export interface LocalizerOption<T> {
  defaultLanguage: string
  languages: Record<string, LanguageOption<T>>
}

interface LanguageOption<T> {
  defaultCountry: string
  countries: Record<string, T>
}

interface LocaleContext {
  option: LocalizerOption<unknown>
  locale: GetState<string>
  language: GetState<string>
  country: GetState<string>
  setLocale: SetState<string>
  setLanguage: SetState<string>
  setCountry: SetState<string>
  localeSet: Set<string>
  resource: () => unknown
}

let localeContext: LocaleContext | null = null

export const useLocalizer = <T>(option: LocalizerOption<T>) => {
  const userLocales = getUserLocales()
  const userLocale = detectUserLocale<T>(userLocales, option)
  const localeSet = new Set(_getAllLocales(option))
  const [locale, setLocale] = useState(userLocale)
  const [language, setLanguage] = useState(userLocale.slice(0, 2))
  const [country, setCountry] = useState(userLocale.slice(3, 5))
  const [resource, setResource] = useState(findResource(locale(), option))
  localeContext = {
    option,
    locale,
    language,
    country,
    setLocale,
    setLanguage,
    setCountry,
    localeSet,
    resource,
  } as LocaleContext

  useEffect(() => {
    setResource(findResource(locale(), option))
  }, [locale])
}

export const t = (key: string): string => {
  const { resource } = localeContext!
  return findContentByKey(resource(), key)
}

export const useLocale = () => {
  const { locale, language, country, localeSet } = localeContext!
  return { locale, language, country, localeSet }
}

export const setLocale = (locale: string) => {
  const {
    setLocale: _setLocale,
    localeSet,
    setLanguage,
    setCountry,
  } = localeContext!
  if (!localeSet.has(locale)) {
    return
  }
  _setLocale(locale)
  setLanguage(locale.slice(0, 2))
  setCountry(locale.slice(3, 5))
}
