import { Flex, Text } from '@mantine/core';

export const PageLoading = () => {
	return (
		<Flex component='section' flex={1} align='center' justify='center'>
			<Text fz={{ base: 'sm', sm: 'xl' }}>Loading...</Text>
		</Flex>
	);
};
