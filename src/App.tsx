import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import ProtectedRoute from './servises/ProtectedRoute';
import { Spinner } from './features/queryEditor';
import { useUserState } from './features/authentication';
import { AlertModal } from './components/UI';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { loading, isAuthenticated, userError } = useUserState();
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const { t } = useTranslation();

  useEffect(() => {
    if (userError) {
      setShowErrorModal(true);
      setAuthError(t('errors.fetching_user').toString());
    }
  }, [userError, t]);

  if (loading) {
    return (
      <div className="absolute bottom-1/2 right-1/2  ">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="main" element={<Main />} />
        </Route>
        <Route path="/" element={<Welcome />} />
        <Route path="auth" element={<Auth />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <AlertModal
        onClose={() => {
          setShowErrorModal(false);
          setAuthError('');
        }}
        show={showErrorModal}
        message={authError}
      />
    </>
  );
}

export default App;
