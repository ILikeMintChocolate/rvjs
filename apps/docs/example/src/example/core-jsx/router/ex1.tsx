import { Route, Router, useNavigate, useOutlet } from '@rvjs/core'

const App = () => {
  return (
    <main>
      <Header />
      <Router>
        <Route path="/home" element={<Home />}>
          <Route path="/main" element={<Main />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Router>
    </main>
  )
}

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => navigate('/home')}>/home</button>
      <button onClick={() => navigate('/home/main')}>/home/main</button>
      <button onClick={() => navigate('/about')}>/about</button>
    </header>
  )
}

const Home = () => {
  const outlet = useOutlet()

  return (
    <div>
      <p>Home</p>
      {outlet}
    </div>
  )
}

const Main = () => {
  return (
    <div>
      <p>Main</p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  )
}

export default App
