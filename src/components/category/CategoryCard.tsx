import type { Character, Episode, Location } from '@/types/categories';
import { isCharacter, isEpisode, isLocation } from '@/utils';

interface Props {
	data: Episode | Character | Location;
}

export const CategoryCard = ({ data }: Props) => {
	return (
		<div className='flex gap-5 py-5 bg-white border-2 border-indigo-500 px-7 rounded-xl'>
			{isCharacter(data) && <img src={data.image} alt={`${data.name} image`} className='rounded-lg' />}

			<div className='flex flex-col gap-2'>
				<p className='font-bold'>{data.name}</p>
				<p>Created at: {data.created}</p>

				{isEpisode(data) && (
					<>
						<p>Upload date: {data.air_date}</p>
						<p>Episode: {data.episode}</p>
					</>
				)}

				{isCharacter(data) && (
					<>
						<p>Gender: {data.gender}</p>
						<p>Specie: {data.species}</p>
						<p>Status: {data.status}</p>
						<p>Type: {data.type || 'Unknown'}</p>
					</>
				)}

				{isLocation(data) && (
					<>
						<p>Dimension: {data.dimension}</p>
						<p>Type: {data.type}</p>
					</>
				)}
			</div>
		</div>
	);
};
