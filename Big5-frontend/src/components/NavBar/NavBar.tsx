import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageSelector';
import CartButton from './cartButton';
import './css/navBar.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-bar bg-white z-50 w-full left-0 border-b border-gray-200">
      <div className="w-full px-0 relative">
        <div className="flex items-center h-16">
          <div className="flex-1 pl-4" />
          <a href="#" className="text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
            {t('components.navBar.title', 'Big 5')}
          </a>
          <nav className="flex-1 flex justify-end items-center hidden md:flex pr-4 space-x-4">
            <a href="#about" className="text-gray-700 hover:text-gray-900 px-2">{t('components.navBar.about', 'About')}</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 px-2">{t('components.navBar.contact', 'Contact')}</a>
            <div className="flex items-center">
              <LanguageSelector />
              <CartButton onClick={() => { /* TODO: open cart */ }} ariaLabel={t('components.navBar.cart', 'Open cart')} />
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
            <a href="#about" className="block text-gray-700" onClick={() => setMenuOpen(false)}>{t('components.navBar.about', 'About')}</a>
            <a href="#contact" className="block text-gray-700" onClick={() => setMenuOpen(false)}>{t('components.navBar.contact', 'Contact')}</a>
            <div className="mt-2 flex items-center gap-2">
              <LanguageSelector />
              <CartButton onClick={() => { /* TODO: open cart */ }} ariaLabel={t('components.navBar.cart', 'Open cart')} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}