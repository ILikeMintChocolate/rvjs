import koKRResource from '@asset/locales/koKRResource.json'
import { useEffect, usePathname } from '@rvjs/core'
import { setLocale, useLocalizer as _useLocalizer } from '@rvjs/localizer'

export const useLocalizer = () => {
  const pathname = usePathname()
  let currentLanguage = pathname().slice(1, 3)

  _useLocalizer({
    defaultLanguage: 'ko',
    languages: {
      ko: {
        defaultCountry: 'KR',
        countries: {
          KR: koKRResource,
        },
      },
    },
  })

  useEffect(() => {
    const newLanguage = pathname().slice(1, 3)
    if (currentLanguage !== newLanguage) {
      setLocale(newLanguage)
      currentLanguage = newLanguage
    }
  }, [pathname])
}
