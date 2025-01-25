import ContentSuspense from '@page/contentSuspense/ContentSuspense.tsx'
import { useRouter } from '@page/router/Router.hook.ts'
import { Route, Router as _Router } from '@rvjs/core'

const Router = () => {
  useRouter()

  return (
    <_Router>
      <Route path="*" element={<ContentPage />} />
    </_Router>
  )
}

const ContentPage = () => {
  return <ContentSuspense />
}

export default Router
