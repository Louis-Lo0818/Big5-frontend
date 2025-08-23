import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();

  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('title', 'Vite + React')}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('count_is', { count })}
        </button>
        <p>
          {t('edit_and_save', 'Edit src/App.tsx and save to test HMR')}
        </p>
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => changeLang('en')}>EN</button>
        <button onClick={() => changeLang('zh')}>中文</button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
