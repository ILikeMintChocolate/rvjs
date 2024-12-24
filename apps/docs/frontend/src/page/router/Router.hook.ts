import { onMount, useNavigate, usePathname } from '@rvjs/core'

const legacyPaths = [
  {
    legacyPath: '/core-v0.2.x/',
    newPath: '/core-js/',
  },
  {
    legacyPath: '/core-v0.3.x/',
    newPath: '/core-jsx/',
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
      navigate('/core-jsx/overview/gettingStarted')
    }
  }

  onMount(() => {
    const currentPathname = pathname()
    redirectLegacyPath(currentPathname)
    redirectInitialPath(currentPathname)
  })
}
