import { getPathEventInstance } from '@router/util/event.ts'

const useNavigate = () => {
  const navigate = (newPath: string) => {
    getPathEventInstance().navigate(newPath)
  }

  return navigate
}

export default useNavigate
