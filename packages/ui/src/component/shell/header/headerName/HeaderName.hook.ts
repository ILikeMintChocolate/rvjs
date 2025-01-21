import { defineProps, useNavigate } from '@rvjs/core'
import { HeaderNameProps } from '@shell/header/headerName/HeaderName.props.ts'

export const useHeaderNameProps = (props: HeaderNameProps) => {
  return defineProps(props, {
    get deviceType() {
      return props.deviceType ?? 'desktop'
    },
  })
}

export const useHeaderNameNavigation = (props: HeaderNameProps) => {
  const navigate = useNavigate()

  const onClickHandler = (event: Event) => {
    event.preventDefault()
    navigate(props.href, props.isExternal)
  }

  return onClickHandler
}
