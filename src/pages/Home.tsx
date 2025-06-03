import { Button } from '@/components/common';
import { useAuthContext } from '@/contexts/auth';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();

	const { user, signOut } = useAuthContext();

	return (
		<section className='flex flex-col items-center justify-center gap-10 grow'>
			{user && <h2 className='text-2xl font-bold'>Hi, {user.nickname} 👋</h2>}

			<h2 className='text-3xl font-bold'>Welcome to Rick And Morty project!</h2>

			<div className='flex gap-5 items-center'>
				{!user ? (
					<Button onClick={() => navigate('/login')}>Sign In</Button>
				) : (
					<Button onClick={signOut}>Sign Out</Button>
				)}
			</div>
		</section>
	);
};
