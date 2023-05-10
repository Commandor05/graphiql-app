import { PropsWithChildren, ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectPath?: string;
  children?: ReactNode | undefined;
};

const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = '/',
  children,
}: PropsWithChildren<ProtectedRouteProps>) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ?? <Outlet />}</>;
};

export default ProtectedRoute;
