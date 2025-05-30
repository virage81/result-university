import type { Character, Episode, Location } from '@/types/categories';

export const isEpisode = (data: Episode | Character | Location): data is Episode => {
	return (data as Episode)?.air_date !== undefined;
};
export const isCharacter = (data: Episode | Character | Location): data is Character => {
	return (data as Character)?.gender !== undefined;
};
export const isLocation = (data: Episode | Character | Location): data is Location => {
	return (data as Location)?.dimension !== undefined;
};
