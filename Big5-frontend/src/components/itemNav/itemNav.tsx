import { useTranslation } from 'react-i18next';

type NavItem = { id: string; label: string; href: string };

export default function ItemNav() {
  const { t } = useTranslation();

  // Items belong to ItemNav itself
  const items: NavItem[] = [
    { id: 'home', label: t('components.itemNav.home', 'Home'), href: '#home' },
    { id: 'features', label: t('components.itemNav.features', 'Features'), href: '#features' },
    { id: 'pricing', label: t('components.itemNav.pricing', 'Pricing'), href: '#pricing' },
    { id: 'about', label: t('components.itemNav.about', 'About'), href: '#about' },
    { id: 'contact', label: t('components.itemNav.contact', 'Contact'), href: '#contact' },
  ];

  return (
    <nav className="w-full bg-white h-14 z-40 border-b border-gray-200">
      <div className="max-w-full overflow-x-auto h-full">
        <ul className="flex gap-4 px-4 h-full items-center justify-center whitespace-nowrap">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={it.href}
                className="inline-block px-3 py-1 rounded-md text-sm text-gray-700"
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