import {
  Child,
  component,
  ComponentFn,
  createContext,
  GetState,
  SetState,
  useState,
} from '@rvjs/core'

interface StartRvjsUIProps {
  child: Child
}

interface ThemeContext {
  showSideNav: GetState<boolean>
  setShowSideNav: SetState<boolean>
}

export const rvjsUIThemeContext = createContext<ThemeContext>()

const RvjsUIProvider: ComponentFn = component<StartRvjsUIProps>((props) => {
  const { child } = props
  const [showSideNav, setShowSideNav] = useState(false)

  rvjsUIThemeContext.setContext({
    showSideNav,
    setShowSideNav,
  })

  return child
})

export default RvjsUIProvider
