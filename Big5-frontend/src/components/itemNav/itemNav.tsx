import { useTranslation } from 'react-i18next';
import "./css/itemNav.css";

type NavItem = { id: string; label: string; href: string };

export default function ItemNav() {
  const { t } = useTranslation();

  const items: NavItem[] = [
    { id: 'home', label: t('components.itemNav.home', 'Home'), href: '#home' },
    { id: 'features', label: t('components.itemNav.features', 'Features'), href: '#features' },
    { id: 'pricing', label: t('components.itemNav.pricing', 'Pricing'), href: '#pricing' },
    { id: 'about', label: t('components.itemNav.about', 'About'), href: '#about' },
    { id: 'contact', label: t('components.itemNav.contact', 'Contact'), href: '#contact' },
  ];

  return (
    <nav className="item-nav w-full bg-white border-b border-gray-200" style={{ height: 'var(--itemnav-height, 56px)' }}>
      <div className="max-w-full overflow-x-auto h-full flex items-center">
        <ul
          className="flex gap-4 px-4 h-full items-center justify-center whitespace-nowrap mx-auto"
          style={{ marginBottom: '0rem' }}
        >
          {items.map((it) => (
            <li key={it.id} className="h-full flex items-center">
              <a
                href={it.href}
                className="h-full flex items-center px-3 rounded-md text-sm text-gray-800 hover:bg-gray-50 no-underline"
                style={{ textDecoration: 'none' }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}