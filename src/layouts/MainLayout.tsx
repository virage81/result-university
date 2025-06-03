import { Outlet } from 'react-router-dom';

import { Header } from '@/components';
import { PageLoading } from '@/components/PageLoading';
import { AuthProvider } from '@/contexts/auth';
import { Suspense } from 'react';

export const MainLayout = () => {
	return (
		<AuthProvider>
			<Header />
			<main className='flex w-full p-5 mx-auto max-w-7xl grow'>
				<Suspense fallback={<PageLoading />}>
					<Outlet />
				</Suspense>
			</main>
		</AuthProvider>
	);
};
