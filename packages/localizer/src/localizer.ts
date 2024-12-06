import { useEffect, useState } from '@rvjs/core'
import { detectUserLocale, getUserLocales } from './locale.ts'
import {
  findContentByKey,
  findResource,
  getAllLocales as _getAllLocales,
} from './util.ts'

export interface LocalizerOption<T> {
  defaultLanguage: string
  resources: Record<string, LanguageOption<T>>
}

interface LanguageOption<T> {
  default: T
  countries: Record<string, T>
}

interface LocaleContext {
  option: LocalizerOption<unknown>
  locale: () => string
  setLocale: (locale: string) => void
  localeSet: Set<string>
  resource: () => unknown
}

let localeContext: LocaleContext | null = null

export const useLocalizer = <T>(option: LocalizerOption<T>) => {
  const userLocales = getUserLocales()
  const userLocale = detectUserLocale<T>(userLocales, option)
  const localeSet = new Set(_getAllLocales(option))
  const [locale, setLocale] = useState(userLocale)
  const [resource, setResource] = useState(findResource(locale(), option))
  localeContext = {
    option,
    locale,
    setLocale,
    localeSet,
    resource,
  } as LocaleContext

  useEffect(() => {
    setResource(findResource(locale(), option))
  }, [locale])
}

export const t = (key: string) => {
  const { resource } = localeContext!
  return findContentByKey(resource(), key)
}

export const getAllLocales = () => {
  const { option } = localeContext!
  return _getAllLocales(option)
}

export const getLocale = () => {
  const { locale } = localeContext!
  return locale
}

export const setLocale = (locale: string) => {
  const { setLocale: _setLocale, localeSet } = localeContext!
  if (!localeSet.has(locale)) {
    return
  }
  _setLocale(locale)
}
