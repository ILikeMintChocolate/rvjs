import { onMount, useNavigate, usePathname } from '@rvjs/core'

const legacyPaths = [
  {
    legacyPath: '/core-v0.2.x/gettingStarted',
    newPath: '/ko/core-js/overview/gettingStarted',
  },
  {
    legacyPath: '/core-v0.2.x/benchmark',
    newPath: '/ko/core-js/overview/benchmark',
  },
  {
    legacyPath: '/core-v0.3.x/gettingStarted',
    newPath: '/ko/core-jsx/overview/gettingStarted',
  },
  {
    legacyPath: '/core-v0.3.x/benchmark',
    newPath: '/ko/core-jsx/overview/benchmark',
  },
  {
    legacyPath: '/ko/blog/1/1',
    newPath: '/ko/blog/1',
  },
]

export const useRouter = () => {
  const pathname = usePathname()
  const navigate = useNavigate()

  const redirectLegacyPath = (pathname: string) => {
    for (const { legacyPath, newPath } of legacyPaths) {
      if (pathname.startsWith(legacyPath)) {
        navigate(pathname.replace(legacyPath, newPath))
        return
      }
    }
  }

  const redirectInitialPath = (pathname: string) => {
    if (pathname === '/') {
      navigate('/ko/core-jsx/overview/gettingStarted')
    }
  }

  onMount(() => {
    const currentPathname = pathname()
    redirectLegacyPath(currentPathname)
    redirectInitialPath(currentPathname)
  })
}
