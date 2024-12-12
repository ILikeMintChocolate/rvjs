import { useNavigate } from '@rvjs/core'
import { HeaderNameProps } from '@shell/header/headerName/HeaderName.props.ts'

export const useHeaderNameNavigation = (props: HeaderNameProps) => {
  const navigate = useNavigate()

  const onClickHandler = (event: Event) => {
    event.preventDefault()
    navigate(props.href)
  }

  return onClickHandler
}
