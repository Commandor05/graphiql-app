import { t } from 'i18next';
import SelectLanguage from '../../features/SelectLanguage';
import './burger.css';

export const BurgerMenu = ({ burgerIsOpen }: { burgerIsOpen: boolean }) => {
  return (
    <>
      <div className={burgerIsOpen ? 'burger burger_active' : 'burger'}>
        <SelectLanguage></SelectLanguage>
        <button
          className="w-32 rounded-md border border-solid border-white py-1 text-white"
          style={{ minWidth: 80 }}
        >
          {t('exit')}
        </button>
      </div>
    </>
  );
};
