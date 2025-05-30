import { CategoryCard } from '@/components/category';
import { CHARACTERS, EPISODES, LOCATIONS } from '@/constants';
import { useNotFound } from '@/hooks/useNotFound';
import type { Character, Episode, Location } from '@/types/categories';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

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

	useNotFound(data);

	return <section className='flex items-center justify-center grow'>{<CategoryCard data={data!} />}</section>;
};
