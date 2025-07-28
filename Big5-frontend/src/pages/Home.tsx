import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

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

      <h1 className="text-2xl font-bold mt-6">{t('title', 'Vite + React')}</h1>

      <div className="card mt-4">
        <button onClick={() => setCount(c => c + 1)}>{t('count_is', { count })}</button>
        <p>{t('edit_and_save', 'Edit src/App.tsx and save to test HMR')}</p>
      </div>
    </>
  );
}