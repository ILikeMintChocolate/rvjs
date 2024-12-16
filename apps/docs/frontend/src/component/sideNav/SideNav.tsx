import CoreJSSideNav from '@component/sideNav/CoreJSSideNav.tsx'
import CoreJSXSideNav from '@component/sideNav/CoreJSXSideNav.tsx'
import IsJSSideNav from '@component/sideNav/IsJSSideNav.tsx'
import { usePageCategory } from '@component/sideNav/SideNav.hook.ts'
import UIJSSideNav from '@component/sideNav/UIJSSideNav.tsx'
import UIJSXSideNav from '@component/sideNav/UIJSXSideNav.tsx'
import { Refresh } from '@rvjs/core'

const MainSideNav = () => {
  const pageCategory = usePageCategory()

  return (
    <Refresh by={pageCategory()}>
      {(() => {
        switch (pageCategory()) {
          case 'CORE_JSX':
            return <CoreJSXSideNav />
          case 'CORE_JS':
            return <CoreJSSideNav />
          case 'UI_JSX':
            return <UIJSXSideNav />
          case 'UI_JS':
            return <UIJSSideNav />
          case 'IS_JS':
            return <IsJSSideNav />
        }
      })()}
    </Refresh>
  )
}

export default MainSideNav
