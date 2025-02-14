import { createContext, GetState, SetState, useState } from '@rvjs/core'

interface ThemeContext {
  showSideNav: GetState<boolean>
  setShowSideNav: SetState<boolean>
  useTooltip: GetState<boolean>
  setUseTooltip: SetState<boolean>
}

export const rvjsUIThemeContext = createContext<ThemeContext>()

interface RvjsUIProviderProps {
  children: JSX.Element
  useTooltip?: boolean
}

export const RvjsUIProvider = (props: RvjsUIProviderProps) => {
  const [showSideNav, setShowSideNav] = useState(false)
  const [useTooltip, setUseTooltip] = useState(props.useTooltip ?? true)

  rvjsUIThemeContext.setContext({
    showSideNav,
    setShowSideNav,
    useTooltip,
    setUseTooltip,
  })

  return props.children
}

export const useRvjsUIProvider = (): ThemeContext => {
  return rvjsUIThemeContext.getContext()!
}
