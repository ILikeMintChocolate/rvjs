import enUSResource from '@asset/locales/enUSResource.json'
import koKRResource from '@asset/locales/koKRResource.json'
import { useEffect, usePathname } from '@rvjs/core'
import { setLocale, useLocalizer as _useLocalizer } from '@rvjs/localizer'

interface Resource {
  title: string
}

export const useLocalizer = () => {
  const pathname = usePathname()
  let currentLanguage = pathname().slice(1, 3)

  _useLocalizer<Resource>({
    defaultLanguage: 'ko',
    resources: {
      ko: {
        default: koKRResource,
        countries: {
          KR: koKRResource,
        },
      },
      en: {
        default: enUSResource,
        countries: {
          US: enUSResource,
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
