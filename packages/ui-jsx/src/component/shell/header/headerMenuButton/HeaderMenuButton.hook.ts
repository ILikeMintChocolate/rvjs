import { HeaderMenuButtonProps } from '@shell/header/headerMenuButton/HeaderMenuButton.props.ts'
import { rvjsUIThemeContext } from '@system/provider.tsx'

export const useHeaderMenuButtonSideNav = (props: HeaderMenuButtonProps) => {
  const { showSideNav, setShowSideNav } = rvjsUIThemeContext.getContext()

  const onClickHandler = (event: MouseEvent) => {
    setShowSideNav(!showSideNav())
    if (props.onClick) {
      props.onClick(event)
    }
  }

  return { onClickHandler, showSideNav }
}
