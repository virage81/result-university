import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	const getNavLinkClassName = useCallback((isActive: boolean = false): string => {
		const className = `${isActive ? 'text-indigo-700' : 'text-inherit'}`;
		return className;
	}, []);

	return (
		<header className='sticky top-0 z-20 flex items-center justify-center gap-5 p-5 h-header text-black bg-gray-400 index-x-0'>
			<nav className='flex gap-5'>
				<NavLink to='/' className={({ isActive }) => getNavLinkClassName(isActive)}>
					Home
				</NavLink>
				<NavLink to='/categories/character' className={({ isActive }) => getNavLinkClassName(isActive)}>
					Characters
				</NavLink>
				<NavLink to='/categories/location' className={({ isActive }) => getNavLinkClassName(isActive)}>
					Locations
				</NavLink>
				<NavLink to='/categories/episode' className={({ isActive }) => getNavLinkClassName(isActive)}>
					Episodes
				</NavLink>
			</nav>
		</header>
	);
};
