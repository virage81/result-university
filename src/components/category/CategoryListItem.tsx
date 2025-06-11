import type { Character, Episode, Location } from '@/types/categories';
import { Paper, Text } from '@mantine/core';
import { type Ref } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	data: Episode | Location | Character;
	slug: string;
	ref?: Ref<HTMLDivElement>;
}

export const CategoryListItem = ({ data, slug, ref }: Props) => {
	return (
		<Paper
			withBorder
			py='md'
			px='lg'
			radius='lg'
			bd='2px solid indigo.5'
			bg='white'
			ref={ref}
			display='flex'
			className='items-center justify-between gap-5'>
			<Text
				component={Link}
				to={`/categories/${slug}/${data.id}`}
				fw={700}
				fz='md'
				className='transition-all hover:underline'>
				{data.name}
			</Text>
			<Text>
				<Text span fw={700} className='font-bold'>
					created at:
				</Text>{' '}
				{data.created}
			</Text>
		</Paper>
	);
};

CategoryListItem.displayName = 'CategoryListItem';
