import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MyCarousel from '../components/home/carousel/carousel';

export default function Home() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      {/* Carousel inserted here */}
      <div>
        <MyCarousel />
      </div>

      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>{t('count_is', { count })}</button>
        <p>{t('edit_and_save', 'Edit src/App.tsx and save to test HMR')}</p>
      </div>
    </>
  );
}