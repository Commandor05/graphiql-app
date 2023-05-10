import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { AuthToggler } from '../features/authentication';

const Welcome = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  return (
    <div>
      <h1>Welcome page</h1>
      <div className="cursor-pointer text-indigo-500">
        <Link to={isAuthenticated ? '/main' : '/auth'}>
          {isAuthenticated ? 'Go to - Main page' : 'Go to - Sign In / Sign Up page'}
        </Link>
      </div>
      <div>
        <AuthToggler />
      </div>
    </div>
  );
};

export default Welcome;
