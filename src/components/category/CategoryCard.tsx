import type { Character, Episode, Location } from '@/types/categories';
import { isCharacter, isEpisode, isLocation } from '@/utils';
import { Flex, Text } from '@mantine/core';

interface Props {
	data: Episode | Character | Location;
}

export const CategoryCard = ({ data }: Props) => {
	return (
		<Flex gap='lg' py='lg' px='xl' bg='white' bd='2px solid indigo.5' className='rounded-xl'>
			{isCharacter(data) && <img src={data.image} alt={`${data.name} image`} className='rounded-lg' />}

			<Flex gap='sm' direction='column'>
				<Text fw={700}>{data.name}</Text>
				<Text>Created at: {data.created}</Text>

				{isEpisode(data) && (
					<>
						<Text>Upload date: {data.air_date}</Text>
						<Text>Episode: {data.episode}</Text>
					</>
				)}

				{isCharacter(data) && (
					<>
						<Text>Gender: {data.gender}</Text>
						<Text>Specie: {data.species}</Text>
						<Text>Status: {data.status}</Text>
						<Text>Type: {data.type || 'Unknown'}</Text>
					</>
				)}

				{isLocation(data) && (
					<>
						<Text>Dimension: {data.dimension}</Text>
						<Text>Type: {data.type}</Text>
					</>
				)}
			</Flex>
		</Flex>
	);
};
