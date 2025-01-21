import ContentSuspense from '@page/contentSuspense/ContentSuspense.tsx'
import { useRouter } from '@page/router/Router.hook.ts'
import { Route, Router as _Router, useOutlet } from '@rvjs/core'

const Router = () => {
  useRouter()

  return (
    <_Router>
      <Route path="/:language" element={<LanguagePage />}>
        <Route path="/:packageName" element={<PackagePage />}>
          <Route path="/:categoryName" element={<CategoryPage />}>
            <Route path="/:functionName" element={<ContentPage />} />
          </Route>
        </Route>
      </Route>
    </_Router>
  )
}

const LanguagePage = () => {
  const outlet = useOutlet()

  return outlet
}

const PackagePage = () => {
  const outlet = useOutlet()

  return outlet
}

const CategoryPage = () => {
  const outlet = useOutlet()

  return outlet
}

const ContentPage = () => {
  return <ContentSuspense />
}

export default Router
