import { Flex, Paper, Text } from '@mantine/core';
import { useCallback, type ReactNode } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

const ROUTES = [
	{
		to: '/',
		label: 'Home',
	},
	{
		to: '/categories/character',
		label: 'Characters',
	},
	{
		to: '/categories/location',
		label: 'Locations',
	},
	{
		to: '/categories/episode',
		label: 'Episodes',
	},
];

export const Header = () => {
	return (
		<Paper
			component='header'
			p={{ xs: 'lg', base: 'xs' }}
			shadow='md'
			bg='gray.4'
			c='dark.9'
			pos='sticky'
			top={0}
			inset={{ x: 0 }}
			h='var(--height-header)'
			className='z-20'>
			<Flex component='nav' align='center' justify='center' gap='lg' __size='lg'>
				{ROUTES.map(route => (
					<CustomNavLink key={route.to} to={route.to}>
						{route.label}
					</CustomNavLink>
				))}
			</Flex>
		</Paper>
	);
};

interface CustomNavLinkProps extends NavLinkProps {
	children: ReactNode;
}

const CustomNavLink = ({ children, ...rest }: CustomNavLinkProps) => {
	const getNavLinkClassName = useCallback((isActive: boolean = false): string => {
		return `${isActive ? 'text-indigo-700' : 'text-inherit'}`;
	}, []);

	return (
		<NavLink className={({ isActive }) => getNavLinkClassName(isActive)} {...rest}>
			<Text fz={{ base: 'sm', xs: 'md' }}>{children}</Text>
		</NavLink>
	);
};
