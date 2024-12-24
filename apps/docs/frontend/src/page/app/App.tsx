import Header from '@component/header/Header.tsx'
import SideNav from '@component/sideNav/SideNav.tsx'
import { useLocalizer } from '@page/app/App.hook.ts'
import Router from '@page/router/Router.tsx'
import { RvjsUIProvider, Shell } from '@rvjs/ui'

const App = () => {
  useLocalizer()
  
  return (
    <RvjsUIProvider>
      <Shell header={<Header />} panel={<SideNav />} body={<Router />} />
    </RvjsUIProvider>
  )
}

export default App
