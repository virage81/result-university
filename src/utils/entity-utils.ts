import type { CharacterDto, EpisodeDto, LocationDto, MergedCategories } from '@/types/categories';
import { isCharacter, isEpisode, isLocation } from '@/utils';

type ConvertDtoParams = CharacterDto | LocationDto | EpisodeDto;
type ConvertDtoResponse = MergedCategories;

export class EntityUtils {
	constructor() {}

	public convertDto(dto: ConvertDtoParams): ConvertDtoResponse {
		if (isCharacter(dto)) {
			return {
				id: dto.id,
				name: dto.name,
				status: dto.status,
				species: dto.species,
				type: dto.type,
				gender: dto.gender,
				image: dto.image,
				created: dto.created,
			};
		}
		if (isLocation(dto)) {
			return {
				id: dto.id,
				name: dto.name,
				type: dto.type,
				dimension: dto.dimension,
				created: dto.created,
			};
		}
		if (isEpisode(dto)) {
			return {
				id: dto.id,
				name: dto.name,
				air_date: dto.air_date,
				episode: dto.episode,
				created: dto.created,
			};
		}

		throw new Error('Entity not convertible');
	}

	public mergeUnique(...arrays: MergedCategories[][]) {
		const merged = arrays.flat();
		const uniqueMap = new Map<number, MergedCategories>();

		merged.forEach(item => {
			if (!uniqueMap.has(item.id)) uniqueMap.set(item.id, item);
		});

		return Array.from(uniqueMap.values());
	}
}
