import { ShoppingBagIcon } from '@heroicons/react/24/outline';

type Props = {
  onClick?: () => void;
  ariaLabel?: string;
};

export default function CartButton({ onClick, ariaLabel = 'Cart' }: Props) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="ml-2 p-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 flex items-center"
      onClick={onClick}
    >
      <ShoppingBagIcon className="w-5 h-5 text-gray-700" />
    </button>
  );
}