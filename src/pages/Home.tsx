import { useAuthContext } from '@/contexts/auth';
import { Button, Flex, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();

	const { user, signOut } = useAuthContext();

	return (
		<Flex component='section' flex={1} align='center' justify='center' gap='lg' direction='column'>
			{user && (
				<Text fz={{ base: 'md', sm: 'lg' }} fw={700}>
					Hi, {user.nickname} 👋
				</Text>
			)}

			<Text fz={{ base: 'lg', sm: 'xl' }} fw={700}>
				Welcome to Rick And Morty project!
			</Text>

			{!user ? (
				<Button bg='indigo.5' onClick={() => navigate('/login')}>
					Sign In
				</Button>
			) : (
				<Button bg='indigo.5' onClick={signOut}>
					Sign Out
				</Button>
			)}
		</Flex>
	);
};
