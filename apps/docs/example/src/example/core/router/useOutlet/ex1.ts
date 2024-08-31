import {
  header_style,
  productPage_style,
  text_style,
  wrapper_style,
} from '@example/core/router/useOutlet/ex1.css.ts'
import {
  button,
  component,
  h4,
  header,
  main,
  Router,
  section,
  useNavigate,
  useOutlet,
  usePathParams,
} from '@rvjs/core'

const App = () => {
  const navigate = useNavigate()
  navigate('/product')

  return main({
    classes: [wrapper_style],
    children: [
      Header(),
      Router({
        '/product': {
          componentFn: () => ProductPage(),
          router: {
            '/:productName': {
              componentFn: () => ProductDetailPage(),
            },
          },
        },
      }),
    ],
  })
}

const Header = () => {
  const navigate = useNavigate()

  return header({
    classes: [header_style],
    children: [
      button({
        textContent: '/product',
        onclick: () => navigate('/product'),
      }),
      button({
        textContent: '/product/apple',
        onclick: () => navigate('/product/apple'),
      }),
      button({
        textContent: '/product/banana',
        onclick: () => navigate('/product/banana'),
      }),
    ],
  })
}

const ProductPage = component(() => {
  const outlet = useOutlet()

  return section({
    classes: [productPage_style],
    children: [
      h4({
        classes: [text_style],
        textContent: 'Product',
      }),
      outlet,
    ],
  })
})

const ProductDetailPage = component(() => {
  const { productName } = usePathParams()!

  return h4({
    classes: [text_style],
    textContent: `productName : ${productName}`,
  })
})

export default App
