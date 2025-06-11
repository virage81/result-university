import { Button, Flex, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<Flex component='section' flex={1} align='center' justify='center' direction='column' gap='lg'>
			<Text fz={'md'}>Page you are looking for does not exists</Text>

			<Button bg='indigo.5' onClick={() => navigate(-1)}>
				Go back
			</Button>
		</Flex>
	);
};
