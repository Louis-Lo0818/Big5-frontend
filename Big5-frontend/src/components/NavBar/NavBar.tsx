import { useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import CartButton from '../CartButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar(): JSX.Element {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full left-0">
      <div className="w-full px-0 relative">
        <div className="flex items-center h-14">
          <div className="flex-1 pl-4" />

          <a href="#" className="text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
            {t('title', 'Big 5')}
          </a>

          <nav className="flex-1 flex justify-end items-center hidden md:flex pr-4 space-x-4">
            <a href="#about" className="text-gray-700 hover:text-gray-900 px-2">{t('about', 'About')}</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 px-2">{t('contact', 'Contact')}</a>

            <div className="flex items-center">
              <LanguageSelector />
              <CartButton onClick={() => { /* TODO: open cart */ }} ariaLabel={t('cart', 'Open cart')} />
            </div>
          </nav>

          <div className="md:hidden pr-4">
            <button
              type="button"
              className="p-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <XMarkIcon className="w-6 h-6 text-gray-700" /> : <Bars3Icon className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t w-full bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#about" className="block text-gray-700" onClick={() => setMenuOpen(false)}>{t('about', 'About')}</a>
            <a href="#contact" className="block text-gray-700" onClick={() => setMenuOpen(false)}>{t('contact', 'Contact')}</a>

            <div className="mt-2 flex items-center gap-2">
              {/* reuse components for mobile */}
              <LanguageSelector />
              <CartButton onClick={() => { /* TODO: open cart */ }} ariaLabel={t('cart', 'Open cart')} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}