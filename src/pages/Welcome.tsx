import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../redux/hooks';
import { AuthToggler } from '../features/authentication';
import { Header } from '../features/header';
import { useTransform, motion, useScroll } from 'framer-motion';
import { Footer } from '../features/footer';

const Welcome = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div>
      <Header offsetY={offsetY} scrollY={scrollY} />
      <motion.h1 style={{ height: '1000px', backgroundColor: 'yellow', marginTop }}>
        {t('welcome')}
      </motion.h1>
      <div className="cursor-pointer text-indigo-500">
        <Link to={isAuthenticated ? '/main' : '/auth'}>
          {isAuthenticated ? t('go_to_main') : t('go_to_login')}
        </Link>
      </div>
      <div>
        <AuthToggler />
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
