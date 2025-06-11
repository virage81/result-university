import { PageLoading } from '@/components';
import { CategoryCard } from '@/components/category';
import { useDetailsQuery } from '@/hooks/useDetailsQuery';
import { Flex, Text } from '@mantine/core';
import { useParams } from 'react-router-dom';

export const CategoryDetail = () => {
	const { slug = '', id = '' } = useParams();

	const { data, error, loading } = useDetailsQuery({ id, query: slug });

	return (
		<Flex component='section' flex={1} align='center' justify='center'>
			{loading && <PageLoading />}
			{error && (
				<Text fz={{ base: 'lg', sm: 'xl' }} c='red.5' ta='center'>
					{error}
				</Text>
			)}
			{data && <CategoryCard data={data} />}
		</Flex>
	);
};
