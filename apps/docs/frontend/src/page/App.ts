import NoContentError from '@component/error/NoContentError.ts'
import Header from '@component/header/Header.ts'
import SideNav from '@component/sideNav/SideNav.ts'
import ContentData from '@page/Content.ts'
import {
  component,
  div,
  onMount,
  Router,
  Suspense,
  useNavigate,
  useOutlet,
  usePathname,
} from '@rvjs/core'
import { Shell } from '@rvjs/ui'

const App = () => {
  return Shell({
    header: Header(),
    panel: SideNav(),
    body: Router({
      '/:pId': {
        componentFn: () => MainBody(),
        router: {
          '/getting-started': {
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
    }),
  })
}

const MainBody = component(() => {
  const outlet = useOutlet()
  const navigate = useNavigate()
  const pathname = usePathname()

  onMount(() => {
    if (pathname() === '/') {
      navigate('/core/getting-started')
    }
  })

  return div({
    style: {
      flex: '1',
    },
    children: [outlet],
  })
})

const CategoryPage = component(() => {
  const outlet = useOutlet()
  return div({
    style: {
      width: '100%',
    },
    children: [outlet],
  })
})

const ContentPage = component(() => {
  return Suspense({
    content: () => ContentData(),
    error: NoContentError(),
  })
})

export default App
