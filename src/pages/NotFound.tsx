import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../redux/hooks';
import { Header } from '../features/header';
import { useTransform, motion, useScroll } from 'framer-motion';
import { Footer } from '../features/footer';

const NotFound = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);
  return (
    <>
      <Header offsetY={offsetY} scrollY={scrollY} />

      <motion.div style={{ marginTop }}>
        <div className="flex h-screen justify-center">
          <div className="container">
            <div className="flex h-5/6 flex-col content-center items-center justify-center">
              <h2 className="text-9xl font-bold italic">404</h2>
              <p className="text-4xl">{t('not_found')}</p>
              <button className="btn mt-10">
                <Link to="/">{t('buttons.go_home')}</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default NotFound;
