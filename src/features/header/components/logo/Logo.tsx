import { motion, MotionValue } from 'framer-motion';
import LogoImg from '../../../../../public/logo.svg';
import './logo.css';

export const Logo = ({
  logoWidth,
  fontSize,
}: {
  logoWidth: MotionValue<number>;
  fontSize: MotionValue<string>;
}) => {
  return (
    <>
      <div className="relative z-20 inline-flex items-center justify-center gap-3.5">
        <motion.img src={LogoImg} style={{ width: logoWidth }} />
        <motion.h1 className="logo-title text-3xl text-primary" style={{ fontSize }}>
          GraphQL
        </motion.h1>
      </div>
    </>
  );
};
