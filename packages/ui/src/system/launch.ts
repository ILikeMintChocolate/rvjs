import { startCheckProps } from '@rvjs/is'

export interface StartRvjsUIProps {
  environment: 'development' | 'production'
}

export const startRvjsUI = (props: StartRvjsUIProps) => {
  const { environment } = props

  startCheckProps({ environment })
}
