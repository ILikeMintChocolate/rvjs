import { pathEvent } from '@router/util/event.ts'

const useNavigate = () => {
  const navigate = (newPath: string) => {
    pathEvent.navigate(newPath)
  }

  return navigate
}

export default useNavigate
