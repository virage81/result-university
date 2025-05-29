import { MainLayout } from '@/layouts';
import { Categories, CategoryDetail, Home } from '@/pages';
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
				path: '/categories/:slug/',
				element: <Categories />,
			},
			{
				path: '/categories/:slug/:id',
				element: <CategoryDetail />,
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
