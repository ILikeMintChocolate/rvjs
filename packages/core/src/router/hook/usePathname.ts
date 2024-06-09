import { pathEvent } from '@router/util/event.ts'

const usePathname = () => {
  return pathEvent.getPathname
}

export default usePathname
