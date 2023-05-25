import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../redux/hooks';
import { useLogoutUser } from '../../hooks/useLogout';

const AuthToggler = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logoutUser = useLogoutUser();

  return (
    <>
      {isAuthenticated ? (
        <button className="btn" onClick={() => logoutUser()}>
          {t('buttons.logout')}
        </button>
      ) : (
        <>
          <button
            className="btn"
            onClick={() => {
              navigate('/auth', { state: { isRegister: false } });
            }}
          >
            {t('buttons.sign_in')}
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate('/auth', { state: { isRegister: true } });
            }}
          >
            {t('buttons.sign_up')}
          </button>
        </>
      )}
    </>
  );
};

export default AuthToggler;
