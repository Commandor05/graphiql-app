import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppDispatch } from '../../../redux/hooks';
import { auth, db } from '../../../servises/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { authenticatedUser, logedOutUser } from '../../../redux/features/user/userSlice';
import { User } from '../../../types/User';

export const useUserState = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        const { email, name, uid } = data;
        dispatch(authenticatedUser({ email, name, uid } as User));
        setIsAuthenticated(true);
      } catch (err) {
        console.error('An error occured while fetching user data', err);
      }
    };

    if (!loading && !user) {
      dispatch(logedOutUser());
      setIsAuthenticated(false);
    }

    if (loading || !user) return;

    fetchUserName();
  }, [user, loading, dispatch, error]);

  return { user, loading, error, isAuthenticated };
};
