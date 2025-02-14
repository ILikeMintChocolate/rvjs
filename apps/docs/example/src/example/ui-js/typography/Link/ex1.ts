import {
  component,
  div,
  h4,
  header,
  onMount,
  prop,
  Router,
  useNavigate,
} from '@rvjs/core'
import { Link } from '@rvjs/ui'

const LinkExample = component(() => {
  onMount(() => {
    const navigate = useNavigate()
    navigate('/home')
  })

  return div({
    children: [
      Header(),
      Router(
        {
          '/home': {
            componentFn: Home,
          },
          '/about': {
            componentFn: About,
          },
        },
        {
          useHash: true,
        },
      ),
    ],
  })
})

const Header = () => {
  return header({
    style: {
      display: 'flex',
      gap: '1rem',
    },
    children: [
      Link({
        text: prop(() => '/home'),
        href: prop(() => '/home'),
      }),
      Link({
        text: prop(() => '/about'),
        href: prop(() => '/about'),
      }),
    ],
  })
}

const Home = component(() => {
  return h4({
    style: {
      textAlign: 'center',
    },
    textContent: 'Home',
  })
})

const About = component(() => {
  return h4({
    style: {
      textAlign: 'center',
    },
    textContent: 'About',
  })
})

export default LinkExample
