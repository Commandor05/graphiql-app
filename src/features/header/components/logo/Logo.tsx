import { motion, MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/hooks';
import LogoImg from './assets/logo.svg';
import './logo.css';

export const Logo = ({
  logoWidth,
  fontSize,
}: {
  logoWidth: MotionValue<number>;
  fontSize: MotionValue<string>;
}) => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  return (
    <Link
      to={isAuthenticated ? '/' : '/auth'}
      className="relative z-20 inline-flex items-center justify-center gap-3.5 hover:scale-110"
    >
      <motion.img src={LogoImg} style={{ width: logoWidth }} />
      <motion.h1 className="logo-title text-3xl text-primary" style={{ fontSize }}>
        GraphiQL
      </motion.h1>
    </Link>
  );
};
