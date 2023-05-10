import { logedOutUser } from '../../../redux/features/user/userSlice';
import { useAppDispatch } from '../../../redux/hooks';
import { logout } from '../../../servises/firebase';

export const useLogoutUser = () => {
  const dispatch = useAppDispatch();

  return () => {
    logout();
    dispatch(logedOutUser());
  };
};
