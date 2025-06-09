import { ProtectedRoute } from '@/components';
import { MainLayout } from '@/layouts';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home').then(module => ({ default: module.Home })));
const Login = lazy(() => import('@/pages/Login').then(module => ({ default: module.Login })));
const Categories = lazy(() => import('@/pages/Categories').then(module => ({ default: module.Categories })));
const CategoryDetail = lazy(() =>
	import('@/pages/CategoryDetail').then(module => ({ default: module.CategoryDetail }))
);
const NotFound = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })));

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
				path: '/login',
				element: <Login />,
			},
			{
				element: <ProtectedRoute />,
				children: [
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
				],
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);
