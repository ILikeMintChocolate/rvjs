import { onMount, useElement } from '@rvjs/core'
import { rvjsUIThemeContext } from '@system/provider.tsx'

export const useSideNavToggle = () => {
  const { showSideNav, setShowSideNav } = rvjsUIThemeContext.getContext()
  const sideNavBackdropElement = useElement<HTMLDivElement>()

  const addResizeEvent = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setShowSideNav(false)
      }
    })
  }

  const onBackdropClickHandler = () => {
    setShowSideNav(false)
  }

  onMount(() => {
    addResizeEvent()
  })

  return {
    sideNavBackdropElement,
    showSideNav,
    onBackdropClickHandler,
  }
}
