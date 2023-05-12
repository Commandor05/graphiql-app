import SelectLanguage from '../../features/SelectLanguage';
import { Logo } from '../logo/Logo';
import { Wrapper } from '../wrapper/Wrapper';
import { useTranslation } from 'react-i18next';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { Burger } from '../burger/Burger';

interface HeaderProps {
  offsetY: number[];
  scrollY: MotionValue<number>;
}

export const Header = (props: HeaderProps) => {
  const { scrollY, offsetY } = props;
  const heightSize = [86, 76];
  const logoSize = [60, 30];
  const fontSizes = ['30px', '20px'];

  const height = useTransform(scrollY, offsetY, heightSize);
  const logoWidth = useTransform(scrollY, offsetY, logoSize);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const { t } = useTranslation();
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <motion.header
      className="sticky top-0 bg-primary-background bg-[url('./public/graph-wash.png')]"
      style={{ height }}
    >
      <Wrapper>
        <>
          <Logo logoWidth={logoWidth} fontSize={fontSize} />
          <div className="hidden sm:flex ">
            <SelectLanguage></SelectLanguage>
            <button className="ml-8 mt-5 w-32 rounded-md rounded-md border border-solid border-white px-4 py-1.5 text-white">
              {t('exit')}
            </button>
          </div>
          <Burger toggleBurger={toggleBurger} burgerIsOpen={burgerIsOpen} />
          <BurgerMenu burgerIsOpen={burgerIsOpen} />
        </>
      </Wrapper>
    </motion.header>
  );
};
