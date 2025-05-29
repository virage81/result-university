import { CategoryListItem } from '@/components/category';
import { CHARACTERS, EPISODES, LOCATIONS } from '@/constants';
import type { Character, Episode, Location } from '@/types/categories';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const Categories = () => {
	const { slug } = useParams();

	const data = useMemo<(Episode | Character | Location)[]>(() => {
		switch (slug) {
			case 'characters': {
				return CHARACTERS;
			}
			case 'locations': {
				return LOCATIONS;
			}
			case 'episodes': {
				return EPISODES;
			}
			default: {
				return [];
			}
		}
	}, [slug]);

	return (
		<section className='flex flex-col justify-center w-full gap-2 grow'>
			{!data.length && <p className='text-xl text-center text-red-500'>Category "{slug}" not found...</p>}

			{data.map(item => (
				<CategoryListItem key={item.id} data={item} slug={slug!} />
			))}
		</section>
	);
};
