import {
  header_style,
  wrapper_style,
} from '@example/core-js/router/router/ex1.css.ts'
import {
  button,
  component,
  div,
  h4,
  header,
  main,
  Router,
  useNavigate,
  useOutlet,
} from '@rvjs/core'

const App = () => {
  const navigate = useNavigate()
  navigate('/')

  return main({
    classes: [wrapper_style],
    children: [
      Header(),
      Router({
        '/': {
          componentFn: () => Home(),
        },
        '/product': {
          componentFn: () => Product(),
          router: {
            '/apple': {
              componentFn: () => Apple(),
            },
          },
        },
        '/about': {
          componentFn: () => About(),
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
        textContent: '/',
        onclick: () => navigate('/'),
      }),
      button({
        textContent: '/product',
        onclick: () => navigate('/product'),
      }),
      button({
        textContent: '/product/apple',
        onclick: () => navigate('/product/apple'),
      }),
      button({
        textContent: '/about',
        onclick: () => navigate('/about'),
      }),
    ],
  })
}

const Home = component(() => {
  return div({
    children: [
      h4({
        textContent: 'Home',
      }),
    ],
  })
})

const Product = component(() => {
  const outlet = useOutlet()

  return div({
    children: [
      h4({
        textContent: 'Product',
      }),
      outlet,
    ],
  })
})

const Apple = component(() => {
  return h4({
    textContent: 'Apple',
  })
})

const About = component(() => {
  return div({
    children: [
      h4({
        textContent: 'About',
      }),
    ],
  })
})

export default App
