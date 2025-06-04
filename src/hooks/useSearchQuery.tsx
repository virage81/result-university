import { Api } from '@/lib/axios';
import type { MergedCategories } from '@/types/categories';
import { EntityUtils } from '@/utils/entity-utils';
import axios, { AxiosError, type Canceler } from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const converter = new EntityUtils();

interface Props {
	query: string;
	page?: number;
	order?: string;
}

const ITEMS_PER_PAGE = 20;

export const useSearchQuery = ({ query, page = 41, order }: Props) => {
	const [data, setData] = useState<MergedCategories[]>([]);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState(false);

	const hasMore = useRef(true);

	const fetchData = useCallback(
		async (cancel: Canceler | undefined) => {
			if (!hasMore.current) return;

			try {
				setLoading(true);
				setError('');

				const { data } = await Api({
					method: 'GET',
					url: query,
					params: {
						page,
					},
					cancelToken: new axios.CancelToken(c => cancel === c),
				});

				if (data.info.count / (page * ITEMS_PER_PAGE) > 1) hasMore.current = true;
				else hasMore.current = false;

				setData(prev => converter.mergeUnique(prev, (data?.results ?? []).map(converter.convertDto)));
			} catch (error) {
				if (axios.isCancel(error)) {
					return;
				} else if (error instanceof Error) {
					setError(error.message);
				} else if (error instanceof AxiosError) {
					setError(error.message);
				} else setError('Internal Server Error');
			} finally {
				setLoading(false);
			}
		},
		[page, query]
	);

	const sortedData = useMemo(() => {
		return data?.sort((a, b) => {
			const aDate = new Date(a.created).getTime();
			const bDate = new Date(b.created).getTime();

			return order === 'asc' ? aDate - bDate : bDate - aDate;
		});
	}, [data, order]);

	useEffect(() => {
		let cancel: Canceler | undefined;
		fetchData(cancel);

		return () => {
			if (cancel) cancel();
		};
	}, [fetchData]);

	useEffect(() => {
		setData([]);
		hasMore.current = true;
	}, [query]);

	return { data: sortedData, error, loading, hasMore };
};
