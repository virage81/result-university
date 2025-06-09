import { Outlet } from 'react-router-dom';

import { Header } from '@/components';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { PageLoading } from '@/components/PageLoading';
import { AuthProvider } from '@/contexts/auth';
import { createTheme, MantineProvider } from '@mantine/core';
import { Suspense } from 'react';

const theme = createTheme({});

export const MainLayout = () => {
	return (
		<MantineProvider theme={theme}>
			<AuthProvider>
				<Header />
				<main className='flex w-full p-5 mx-auto max-w-7xl grow'>
					<ErrorBoundary>
						<Suspense fallback={<PageLoading />}>
							<Outlet />
						</Suspense>
					</ErrorBoundary>
				</main>
			</AuthProvider>
		</MantineProvider>
	);
};
