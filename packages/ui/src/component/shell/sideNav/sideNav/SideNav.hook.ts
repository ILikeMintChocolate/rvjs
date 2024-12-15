import { onMount, useElement } from '@rvjs/core'
import { rvjsUIThemeContext } from '@system/provider.tsx'

export const useSideNavToggle = () => {
  const { showSideNav, setShowSideNav } = rvjsUIThemeContext.getContext()
  const sideNavBackdropElement = useElement<HTMLDivElement>()

  onMount(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setShowSideNav(false)
      }
    })
  })

  const onBackdropClickHandler = () => {
    setShowSideNav(false)
  }

  return {
    sideNavBackdropElement,
    showSideNav,
    onBackdropClickHandler,
  }
}
