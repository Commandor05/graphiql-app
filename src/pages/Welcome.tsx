import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../features/SelectLanguage';
import { useAppSelector } from '../redux/hooks';
import { AuthToggler } from '../features/authentication';
import { Footer } from '../components/footer/Footer';

const Welcome = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <div className="cursor-pointer text-indigo-500">
        <Link to={isAuthenticated ? '/main' : '/auth'}>
          {isAuthenticated ? t('go_to_main') : t('go_to_login')}
        </Link>
      </div>
      <div>
        <AuthToggler />
      </div>
      <div>
        <SelectLanguage />
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
