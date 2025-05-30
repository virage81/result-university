import { CategoryCard } from '@/components/category';
import { CHARACTERS, EPISODES, LOCATIONS } from '@/constants';
import type { Character, Episode, Location } from '@/types/categories';
import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const getItem = (array: (Episode | Character | Location)[], id: string) => {
	return array.find(item => item.id === parseInt(id));
};

export const CategoryDetail = () => {
	const { slug, id } = useParams();

	const data = useMemo(() => {
		if (!id || !slug) return;

		switch (slug) {
			case 'characters': {
				return getItem(CHARACTERS, id);
			}
			case 'locations': {
				return getItem(LOCATIONS, id);
			}
			case 'episodes': {
				return getItem(EPISODES, id);
			}
			default: {
				return;
			}
		}
	}, [slug, id]);

	if (!data) return <Navigate to='/not-found' replace />;

	return <section className='flex items-center justify-center grow'>{<CategoryCard data={data!} />}</section>;
};
