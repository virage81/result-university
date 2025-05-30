import type { Character, Episode, Location } from '@/types/categories';
import { Link } from 'react-router-dom';

interface Props {
	data: Episode | Location | Character;
	slug: string;
}

export const CategoryListItem = ({ data, slug }: Props) => {
	return (
		<div className='flex items-center justify-between gap-5 py-5 bg-white border-2 border-indigo-500 px-7 rounded-xl'>
			<Link to={`/categories/${slug}/${data.id}`} className='text-lg font-bold transition-all hover:underline'>
				{data.name}
			</Link>
			<p>
				<span className='font-bold'>created at:</span> {data.created}
			</p>
		</div>
	);
};
