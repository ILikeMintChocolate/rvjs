import { useEffect } from '@hook/useEffect.ts'
import { pathEvent, Route } from '@router/util/event.ts'

const usePathEffect = (callback: (routes: Route[]) => void) => {
  const { getRoutes } = pathEvent

  useEffect(() => {
    callback(getRoutes())
  }, [getRoutes])
}

export default usePathEffect
