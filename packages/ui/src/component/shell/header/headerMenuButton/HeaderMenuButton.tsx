// @ts-nocheck

import { CloseIcon, MenuIcon } from '@content/icon/Icons.tsx'
import { Refresh } from '@rvjs/core'
import {
  headerMenuButton_button_style,
  headerMenuButton_icon_style,
} from '@shell/header/headerMenuButton/HeaderMenuButton.css.ts'
import { useHeaderMenuButtonSideNav } from '@shell/header/headerMenuButton/HeaderMenuButton.hook.ts'
import { HeaderMenuButtonProps } from '@shell/header/headerMenuButton/HeaderMenuButton.props.ts'

const HeaderMenuButton = (props: HeaderMenuButtonProps) => {
  const { onClickHandler, showSideNav } = useHeaderMenuButtonSideNav(props)

  return (
    <button
      type="button"
      className={headerMenuButton_button_style}
      onClick={onClickHandler}
    >
      <Refresh by={showSideNav()}>
        {showSideNav() ? (
          <CloseIcon className={headerMenuButton_icon_style} />
        ) : (
          <MenuIcon className={headerMenuButton_icon_style} />
        )}
      </Refresh>
    </button>
  )
}

export default HeaderMenuButton
