import { AuthToggler } from '../../../authentication';
import SelectLanguage from '../../../SelectLanguage';
import './burger.css';

export const BurgerMenu = ({ burgerIsOpen }: { burgerIsOpen: boolean }) => {
  return (
    <>
      <div className={burgerIsOpen ? 'burger burger_active' : 'burger'}>
        <SelectLanguage></SelectLanguage>
        <AuthToggler />
      </div>
    </>
  );
};
