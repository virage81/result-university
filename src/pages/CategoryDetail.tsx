import { PageLoading } from '@/components';
import { CategoryCard } from '@/components/category';
import { useDetailsQuery } from '@/hooks/useDetailsQuery';
import { useParams } from 'react-router-dom';

export const CategoryDetail = () => {
	const { slug = '', id = '' } = useParams();

	const { data, error, loading } = useDetailsQuery({ id, query: slug });

	return (
		<section className='flex items-center justify-center grow'>
			{loading && <PageLoading />}
			{error && <p className='text-xl text-center text-red-500'>{error}</p>}
			{data && <CategoryCard data={data} />}
		</section>
	);
};
