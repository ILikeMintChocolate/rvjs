import { createContext, GetState, SetState, useState } from '@rvjs/core'

interface ThemeContext {
  showSideNav: GetState<boolean>
  setShowSideNav: SetState<boolean>
}

export const rvjsUIThemeContext = createContext<ThemeContext>()

const RvjsUIProvider = (props) => {
  const [showSideNav, setShowSideNav] = useState(false)

  rvjsUIThemeContext.setContext({
    showSideNav,
    setShowSideNav,
  })

  return props.children
}

export default RvjsUIProvider
