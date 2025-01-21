import Header from '@component/header/Header.tsx'
import SideNav from '@component/sideNav/SideNav.tsx'
import { useLocalizer } from '@page/app/App.hook.ts'
import Router from '@page/router/Router.tsx'
import { RvjsUIProvider, Shell } from '@rvjs/ui'
import { getDeviceType } from '@util/device.ts'

const App = () => {
  useLocalizer()

  return (
    <RvjsUIProvider useTooltip={getDeviceType() === 'desktop'}>
      <Shell header={<Header />} panel={<SideNav />} body={<Router />} />
    </RvjsUIProvider>
  )
}

export default App
