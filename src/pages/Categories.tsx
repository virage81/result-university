import { CategoryListItem } from '@/components/category';
import { AsideFilter } from '@/components/category/AsideFilter';
import { CHARACTERS, EPISODES, LOCATIONS } from '@/constants';
import { useNotFound } from '@/hooks/useNotFound';
import type { Character, Episode, Location } from '@/types/categories';
import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const Categories = () => {
	const { slug } = useParams();

	const [searchParams] = useSearchParams();

	const order = useMemo(() => searchParams.get('created') ?? 'asc', [searchParams]);

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

	const sortedData = useMemo(() => {
		return data.sort((a, b) => {
			const aDate = new Date(a.created).getTime();
			const bDate = new Date(b.created).getTime();

			return order === 'asc' ? aDate - bDate : bDate - aDate;
		});
	}, [data, order]);

	useNotFound(data);

	return (
		<section className='grid grid-cols-5 w-full gap-10 grow'>
			<div className='flex flex-col gap-2 col-span-4'>
				{sortedData.map(item => (
					<CategoryListItem key={item.id} data={item} slug={slug!} />
				))}
			</div>
			<AsideFilter />
		</section>
	);
};
