import { MainLayout } from '@/layouts';
import { Categories, Home } from '@/pages';
import { NotFound } from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/categories',
				element: <Categories />,
			},
		],
	},
	{
		element: <MainLayout />,
		children: [
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);
