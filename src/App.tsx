import { Route, Routes } from 'react-router-dom';
import { useUserState } from './features/authentication/hooks/useUserState';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import ProtectedRoute from './servises/ProtectedRoute';

function App() {
  const { loading, isAuthenticated } = useUserState();
  if (loading) {
    return <div>Loading...</div>;
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
    </>
  );
}

export default App;
