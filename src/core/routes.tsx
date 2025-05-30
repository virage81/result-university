import { MainLayout } from '@/layouts';
import { Categories, CategoryDetail, Home } from '@/pages';
import { NotFound } from '@/pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				children: [
					{
						index: true,
						element: <Home />,
					},
				],
			},
			{
				path: '/categories/:slug/',
				children: [
					{
						index: true,
						element: <Categories />,
					},
					{
						path: ':id',
						element: <CategoryDetail />,
					},
				],
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);
