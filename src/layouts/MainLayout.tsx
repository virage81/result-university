import { Outlet } from 'react-router-dom';

import { Header } from '@/components';
import { AuthProvider } from '@/contexts/auth';

export const MainLayout = () => {
	return (
		<AuthProvider>
			<Header />
			<main className='flex w-full p-5 mx-auto max-w-7xl grow'>
				<Outlet />
			</main>
		</AuthProvider>
	);
};
