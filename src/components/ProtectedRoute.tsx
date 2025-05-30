import { useAuthContext } from '@/contexts/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = () => {
	const location = useLocation();

	const { user } = useAuthContext();

	if (!user) return <Navigate to='/login' state={{ from: `${location.pathname}${location.search}` }} />;

	return <Outlet />;
};
