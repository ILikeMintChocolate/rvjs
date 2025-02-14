import { useEffect } from '@hook/useEffect.ts'
import { getPathEventInstance, Route } from '@router/util/event.ts'

const usePathEffect = (callback: (routes: Route[]) => void) => {
  const { getRoutes } = getPathEventInstance()

  useEffect(() => {
    callback(getRoutes())
  }, [getRoutes])
}

export default usePathEffect
