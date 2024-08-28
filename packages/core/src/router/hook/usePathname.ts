import { getPathEventInstance } from '@router/util/event.ts'

const usePathname = () => {
  return getPathEventInstance().getPathname
}

export default usePathname
