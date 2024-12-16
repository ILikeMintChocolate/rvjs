import { Case, root, Switch, useState } from '@rvjs/core'
import { getLocale, t, useLocalizer } from './localizer.ts'

import enResource from './resource/en.json'
import koKRResource from './resource/ko-KR.json'

const App = () => {
  const [path, setPath] = useState('home')

  useLocalizer({
    defaultLanguage: 'ko',
    languages: {
      ko: {
        default: koKRResource,
      },
      en: {
        default: enResource,
      },
    },
  })

  return (
    <main>
      <h1>
        {path()} (locale: {getLocale()})
      </h1>
      <Header setPath={setPath} />
      <Switch>
        <Case is={path() === 'home'}>
          <Home />
        </Case>
        <Case is={path() === 'about'}>
          <About />
        </Case>
      </Switch>
    </main>
  )
}

const Header = (props) => {
  const { setPath } = props

  return (
    <header>
      <button onClick={() => setPath('home')}>home</button>
      <button onClick={() => setPath('about')}>about</button>
      <button onClick={() => updateLocale('ko')}>ko</button>
      <button onClick={() => updateLocale('ko-KR')}>ko-KR</button>
      <button onClick={() => updateLocale('en')}>en</button>
      <button onClick={() => updateLocale('en-US')}>en-US</button>
      <button onClick={() => updateLocale('en-UK')}>en-UK</button>
    </header>
  )
}

const Home = () => {
  return (
    <main>
      <h4>title: {t('page.home.title')}</h4>
      <h7>desc: {t('page.home.description')}</h7>
    </main>
  )
}

const About = () => {
  return (
    <main>
      <h4>title: {t('page.about.title')}</h4>
      <h7>desc: {t('page.about.description')}</h7>
    </main>
  )
}

root(document.getElementById('app')!, <App />)
