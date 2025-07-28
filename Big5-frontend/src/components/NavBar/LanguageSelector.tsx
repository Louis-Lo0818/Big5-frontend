import { useEffect, useRef, useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSelector(): JSX.Element {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const current = (lng: string) => (i18n.language || '').startsWith(lng);

  const setLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t('language', 'Language')}
        className="p-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
      >
        <GlobeAltIcon className="w-5 h-5 text-gray-700" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50 py-2">
          <label className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              checked={current('en')}
              onChange={() => setLanguage('en')}
            />
            <span className="text-sm">{t('english', 'English')}</span>
          </label>

          <label className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              checked={current('zh')}
              onChange={() => setLanguage('zh')}
            />
            <span className="text-sm">{t('chinese', '中文')}</span>
          </label>
        </div>
      )}
    </div>
  );
}