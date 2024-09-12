import NoContentError from '@component/error/NoContentError.ts'
import Header from '@component/header/Header.ts'
import SideNav from '@component/sideNav/SideNav.ts'
import ContentData from '@page/Content.ts'
import {
  component,
  onMount,
  Router,
  Suspense,
  useNavigate,
  useOutlet,
  usePathname,
} from '@rvjs/core'
import { RvjsUIProvider, Shell } from '@rvjs/ui'

const App = () => {
  return RvjsUIProvider({
    child: Shell({
      header: Header(),
      panel: SideNav(),
      body: Router(
        {
          '/:pId': {
            componentFn: () => MainBody(),
            router: {
              '/gettingStarted': {
                componentFn: () => ContentPage(),
              },
              '/:cId': {
                componentFn: () => CategoryPage(),
                router: {
                  '/:fId': {
                    componentFn: () => ContentPage(),
                  },
                },
              },
            },
          },
        },
        {
          useHash: true,
        },
      ),
    }),
  })
}

const MainBody = component(() => {
  const outlet = useOutlet()
  const navigate = useNavigate()
  const pathname = usePathname()

  onMount(() => {
    if (pathname() === '') {
      navigate('/core/gettingStarted')
    }
  })

  return outlet
})

const CategoryPage = component(() => {
  const outlet = useOutlet()

  return outlet
})

const ContentPage = component(() => {
  return Suspense({
    content: () => ContentData(),
    error: NoContentError(),
  })
})

export default App
