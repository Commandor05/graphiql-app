import { MdMenu, MdMenuOpen } from 'react-icons/md';

export const Burger = ({
  burgerIsOpen,
  toggleBurger,
}: {
  burgerIsOpen: boolean;
  toggleBurger: () => void;
}) => {
  return (
    <button className="relative z-20 inline-block h-12 sm:hidden" onClick={toggleBurger}>
      {burgerIsOpen ? (
        <MdMenuOpen size="50px" color="#e10098" className="absolute right-0 top-0" />
      ) : (
        <MdMenu size="50px" color="#e10098" className="absolute right-0 top-0" />
      )}
    </button>
  );
};
