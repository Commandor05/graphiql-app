import { t } from 'i18next';
import SelectLanguage from '../../features/SelectLanguage';
import './burger.css';

export const BurgerMenu = ({ burgerIsOpen }: { burgerIsOpen: boolean }) => {
  return (
    <>
      <div className={burgerIsOpen ? 'burger burger_active' : 'burger'}>
        <SelectLanguage></SelectLanguage>
        <button
          className="w-32 rounded-md py-1"
          style={{ border: '1px solid #ffffff', color: '#ffffff', minWidth: 80 }}
        >
          {t('exit')}
        </button>
      </div>
    </>
  );
};
