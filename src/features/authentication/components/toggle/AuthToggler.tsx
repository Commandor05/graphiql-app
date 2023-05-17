import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../redux/hooks';
import { useLogoutUser } from '../../hooks/useLogout';
import { useEffect, useState } from 'react';

const AuthToggler = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const [title, setTitle] = useState(t('login'));
  const navigate = useNavigate();
  const logoutUser = useLogoutUser();
  const handleClick = () => {
    if (isAuthenticated) {
      logoutUser();
    } else {
      navigate('/auth');
    }
  };

  useEffect(() => {
    isAuthenticated ? setTitle(t('logout')) : setTitle(t('login'));
  }, [isAuthenticated, t]);

  return (
    <button className=" btn" onClick={handleClick}>
      {title}
    </button>
  );
};

export default AuthToggler;
