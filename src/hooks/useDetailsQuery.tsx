import { Api } from '@/lib/axios';
import type { MergedCategories } from '@/types/categories';
import { EntityUtils } from '@/utils/entity-utils';
import { useCallback, useEffect, useState } from 'react';

interface Props {
	id: string;
	query: string;
}

const converter = new EntityUtils();

export const useDetailsQuery = ({ id, query }: Props) => {
	const [data, setData] = useState<MergedCategories | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>('');

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setData(null);
			setError('');

			const { data } = await Api.get(`${query}/${id}`);
			setData(converter.convertDto(data));
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else setError('Internal Server Error');
		} finally {
			setLoading(false);
		}
	}, [query, id]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return {
		data,
		loading,
		error,
	};
};
