import SelectLanguage from '../../../SelectLanguage';
import { Logo } from '../logo/Logo';
import { Wrapper } from '../../../../components/wrapper/Wrapper';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { BurgerMenu } from '../burgerMenu/BurgerMenu';
import { Burger } from '../burger/Burger';
import { AuthToggler } from '../../../authentication';

interface HeaderProps {
  offsetY: number[];
  scrollY: MotionValue<number>;
}

const Header = (props: HeaderProps) => {
  const { scrollY, offsetY } = props;
  const heightSize = [86, 76];
  const logoSize = [60, 30];
  const fontSizes = ['30px', '20px'];

  const height = useTransform(scrollY, offsetY, heightSize);
  const logoWidth = useTransform(scrollY, offsetY, logoSize);
  const fontSize = useTransform(scrollY, offsetY, fontSizes);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <motion.header
      className="sticky top-0 z-10 bg-primary-background bg-[url('./public/graph-wash.png')]"
      style={{ height }}
    >
      <Wrapper>
        <>
          <Logo logoWidth={logoWidth} fontSize={fontSize} />
          <div className="hidden items-center  gap-12 sm:flex ">
            <SelectLanguage></SelectLanguage>
            <AuthToggler />
          </div>
          <Burger toggleBurger={toggleBurger} burgerIsOpen={burgerIsOpen} />
          <BurgerMenu burgerIsOpen={burgerIsOpen} />
        </>
      </Wrapper>
    </motion.header>
  );
};

export default Header;
