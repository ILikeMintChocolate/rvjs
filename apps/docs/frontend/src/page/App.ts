import Content from '@layout/content/Content.ts'
import Header from '@layout/header/Header.ts'
import SideNav from '@layout/sideNav/SideNav.ts'
import { component, div, Suspense } from '@rvjs/core/dom'
import { Router, useOutlet, usePathParams } from '@rvjs/core/router'
import { Flex } from '@rvjs/ui/layout'
import { App as ShellApp, Body } from '@rvjs/ui/shell'
import NoContentError from '../component/error/NoContentError.ts'
import { useGetContent } from '../hook/useContent.ts'

const App = () => {
  return ShellApp({
    header: Header(),
    panel: SideNav(),
    body: Body({
      children: [
        Router({
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
      ],
    }),
  })
}

const MainBody = component(() => {
  const outlet = useOutlet()

  return div({
    children: [outlet],
  })
})

const CategoryPage = component(() => {
  const outlet = useOutlet()

  return div({
    children: [outlet],
  })
})

const ContentPage = component(() => {
  return Content({
    children: [
      Suspense({
        content: () => ContentData(),
        error: NoContentError(),
      }),
    ],
  })
})

const ContentData = async () => {
  const { pId, cId = 'getting-started', fId } = usePathParams()!
  const requestPath = [pId, cId, fId].filter(Boolean).join('/')
  const content = await useGetContent(requestPath)

  return Flex({
    direction: 'column',
    style: {
      paddingTop: '1rem',
      paddingBottom: '4rem',
    },
    children: content,
  })
}

export default App
