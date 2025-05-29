import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<main className='flex w-full p-5 mx-auto max-w-7xl grow'>
				<Outlet />
			</main>
		</>
	);
};
