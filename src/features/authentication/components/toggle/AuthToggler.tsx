import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/hooks';
import { useLogoutUser } from '../../hooks/useLogout';
import { useEffect, useState } from 'react';

const AuthToggler = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const [title, setTitle] = useState('Login');
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
    isAuthenticated ? setTitle('Logout') : setTitle('Login');
  }, [isAuthenticated]);

  return (
    <button className="btn disabled my-3" onClick={handleClick}>
      {title}
    </button>
  );
};

export default AuthToggler;
