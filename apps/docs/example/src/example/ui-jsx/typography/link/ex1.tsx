import { Route, Router } from '@rvjs/core'
import { Link } from '@rvjs/ui'

const LinkExample = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Router>
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <Link href="/home">/home</Link>
      <Link href="/about">/about</Link>
    </header>
  )
}

const Home = () => {
  return <h4>Home</h4>
}

const About = () => {
  return <h4>About</h4>
}

export default LinkExample
