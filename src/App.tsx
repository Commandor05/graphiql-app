import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './shared/locales/i18next';
import { Header } from './components/Header';
import { useTransform, motion, useScroll } from 'framer-motion';

function App() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div className="relative">
      <I18nextProvider i18n={i18n}>
        <Header offsetY={offsetY} scrollY={scrollY} />
        <motion.h2 style={{ height: '300px', backgroundColor: 'yellow', marginTop }}>
          {t('hello')} React. GraphiQL
        </motion.h2>
        <motion.h2 style={{ height: '300px', backgroundColor: 'red' }}>
          {t('hello')} React. GraphiQL
        </motion.h2>
        <motion.h2 style={{ height: '300px', backgroundColor: 'green' }}>
          {t('hello')} React. GraphiQL
        </motion.h2>
        <motion.h2 style={{ height: '300px', backgroundColor: 'black', color: '#fff' }}>
          {t('hello')} React. GraphiQL
        </motion.h2>
      </I18nextProvider>
    </div>
  );
}

export default App;
