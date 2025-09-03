import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json';
import zhTW from './locales/zh-tw/zh-tw.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'zh-tw': { translation: zhTW },
    // optional alias: treat "zh" as zh-tw so old values still work
    zh: { translation: zhTW },
  },
  lng: localStorage.getItem('i18nextLng') || 'zh-tw',
  fallbackLng: 'zh-tw',
  interpolation: { escapeValue: false },
});

export default i18n;